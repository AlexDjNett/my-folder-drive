import { onSnapshot } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFetchSession } from "./useSession";

let files = collection(db, "files");

export const fetchFiles = (parentId: string, userEmail: string) => {
  const [fileList, setFileList] = useState<Array<ArrayFilesType>>([]);

  const emailQuery = query(files, where("userEmail", "==", userEmail));

  const getFolders = () => {
    if (!parentId) {
      onSnapshot(emailQuery, (response) => {
        const files = response.docs
          .map((item) => ({
            imageLink: item.data().imageLink,
            id: item.id,
            imageName: item.data().imageName,
            isFolder: item.data().isFolder,
            folderName: item.data().folderName,
            parentId: item.data().parentId,
          }))
          .filter((item: any) => item.parentId === "");
        setFileList(files);
      });
    } else {
      onSnapshot(emailQuery, (response) => {
        const files = response.docs
          .map((item) => ({
            imageLink: item.data().imageLink,
            id: item.id,
            imageName: item.data().imageName,
            isFolder: item.data().isFolder,
            folderName: item.data().folderName,
            parentId: item.data().parentId,
          }))
          .filter((item: any) => item.parentId === parentId);
        setFileList(files);
      });
    }
  };

  useEffect(() => {
    getFolders();
  }, [parentId]);

  return { fileList };
};
