  import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { app } from "../../Firebase";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    const auth = getAuth(app);
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Save image to Firebase Storage
      const storage = getStorage(app);
      const imageRef = storageRef(
        storage,
        `profile-images/${user.uid}/${image.name}`,
      );
      await uploadBytes(imageRef, image);

      // Save user data (email, username, profile image URL) to Firestore
      const db = getFirestore(app);
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: email,
        username: username,
        profileImage: `profile-images/${user.uid}/${image.name}`,
      });

      console.log("User signed up:", user);
      // You can perform further actions here, such as sending verification email, etc.
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
      setError(errorMessage);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Profile Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
