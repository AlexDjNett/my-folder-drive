import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let files = collection(database, "files");

export const addFiles = (imageLink: string) => {
  try {
    addDoc(files, {
      imageLink,
    });
  } catch (error) {
    console.log("error addFiles", error);
  }
};
