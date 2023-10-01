import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// console.log("db", db());
let files = collection(db, "files");

export const addFiles = async (
  imageLink: string,
  imageName: string,
  parentId: string,
  userEmail: string,
) => {
  try {
    addDoc(files, {
      imageLink,
      imageName,
      isFolder: false,
      parentId,
      userEmail,
    });
  } catch (e) {
    console.log("error create file", e);
  }
};

export const addFolder = (payload: AddFolderPayload) => {
  try {
    addDoc(files, {
      ...payload,
    });
  } catch (e) {
    console.log("error create folder", e);
  }
};
