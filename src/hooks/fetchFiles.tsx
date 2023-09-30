import { onSnapshot } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";

let files = collection(db, "files");

export const fetchFiles = () => {
  const [fileList, setFileList] = useState<Array<ArrayFilesType>>([]);

  useEffect(() => {
    return onSnapshot(files, (response) => {
      const files = response.docs.map((item) => ({
        imageLink: item.data().imageLink,
        id: item.id,
      }));
      setFileList(files);
    });
  }, []);

  return { fileList };
};
