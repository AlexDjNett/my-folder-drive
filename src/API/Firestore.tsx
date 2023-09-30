import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// console.log("db", db());
let files = collection(db, "files");

export const addFiles = async (imageLink: string) => {
  try {
    addDoc(files, { imageLink });
  } catch (e) {
    console.log("error create file", e);
  }
};

export const getFiles = () => {};
