import { ChangeEvent, useState } from "react";
import Button from "../common/ButtonDefault";
import { fileUpload } from "@/API/FileUpload";
import { useFetchSession } from "@/hooks/useSession";
import ProgressDefault from "../common/ProgressDefault";

export default function UploadFiles() {
  const [isFileVisible, setIsFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const { session } = useFetchSession();
  const [file, setFile] = useState({});
  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    fileUpload(file, setProgress);
  };

  return (
    <div>
      <div className="ml-[20px] mt-[20px] flex gap-x-[16px]">
        {" "}
        {session ? (
          <>
            {" "}
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
            <Button title="Create a Folder" btnClass="bg-yellow-500" />{" "}
          </>
        ) : null}
      </div>
      <div>{progress === 0 ? null : <ProgressDefault {...{ progress }} />}</div>
    </div>
  );
}
