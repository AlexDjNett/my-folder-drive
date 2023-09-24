import { ChangeEvent, useState } from "react";
import Button from "../common/Button";
import { fileUpload } from "@/API/FileUpload";

export default function UploadFiles() {
  const [isFileVisible, setIsFileVisible] = useState(false);
  const [file, setFile] = useState({});
  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("🚀 ~ file: index.tsx:9 ~ uploadFile ~ file:", file);
    fileUpload(file);
  };

  return (
    <div className="ml-[20px] mt-[20px] flex gap-x-[16px]">
      <Button
        title="Add a file"
        btnClass="bg-amber-600"
        onClick={() => setIsFileVisible(!isFileVisible)}
      />
      {isFileVisible ? (
        <input
          type="file"
          className="file-input file-input-bordered file-input-info w-full max-w-xs"
          onChange={(e) => uploadFile(e)}
        />
      ) : null}

      <Button title="Create a Folder" btnClass="bg-yellow-500" />
    </div>
  );
}
