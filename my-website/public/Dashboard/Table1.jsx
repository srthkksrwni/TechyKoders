import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../Firebase";

export default function Table1() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(app);
        const usersCollection = collection(db, "users");
        const querySnapshot = await getDocs(usersCollection);

        const data = [];
        querySnapshot.forEach((doc) => {
          // Extract data from each document
          const userData = doc.data();
          data.push({ id: doc.id, ...userData });
        });

        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center container mt-5">
      <table class="table table-striped">
        <thead className="bg-dark">
          <tr className="text-white">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
