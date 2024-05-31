// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { createObjectCsvWriter } from "csv-writer";
import path from "path";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB7Q4zY9N-0Hn-UHP4fiTZhSy0ZV8ASCY",
  authDomain: "techykoder-9e76b.firebaseapp.com",
  projectId: "techykoder-9e76b",
  storageBucket: "techykoder-9e76b.appspot.com",
  messagingSenderId: "1090566859282",
  appId: "1:1090566859282:web:55ab97eaa8bfade58206cb",
  measurementId: "G-DQVL7HPTHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// CSV Writer configuration
const csvWriter = createObjectCsvWriter({
  path: path.join(process.cwd(), "emails.csv"), // Ensure correct path resolution
  header: [{ id: "email", title: "Email" }],
});

// Function to fetch emails and save to CSV
async function fetchEmailsAndSaveToCSV() {
  try {
    const studentsRef = collection(db, "Student");
    const studentDocs = await getDocs(studentsRef);

    // Prepare data for CSV
    const emailData = [];
    studentDocs.forEach((doc) => {
      const data = doc.data();
      if (data.email) {
        emailData.push({ email: data.email });
      }
    });

    // Log data for debugging
    console.log("Email Data:", emailData);

    // Write data to CSV
    await csvWriter.writeRecords(emailData);
    console.log("CSV file 'emails.csv' created successfully.");
  } catch (error) {
    console.error("Error fetching emails or writing to CSV:", error);
  }
}

// Run the function
fetchEmailsAndSaveToCSV();
