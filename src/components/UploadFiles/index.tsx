import { ChangeEvent, useState } from "react";
import Button from "../common/ButtonDefault";
import { fileUpload } from "@/API/FileUpload";
import { useFetchSession } from "@/hooks/useSession";
import ProgressDefault from "../common/ProgressDefault";
import InputDefault from "../common/InputDefault";
import { addFolder } from "@/API/Firestore";

export default function UploadFiles({ parentId }: UploadProps) {
  const { session } = useFetchSession();
  const userEmail = session?.user.email as string;

  const [isFileVisible, setIsFileVisible] = useState(false);
  const [isFolderVisible, setIsFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");

  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState({});

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    fileUpload(file, setProgress, parentId, userEmail);
  };

  const uploadFolder = () => {
    const payload = {
      folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
      userEmail: session?.user.email as string,
    };
    addFolder(payload);
    setFolderName("");
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
              onClick={() => {
                setIsFileVisible(!isFileVisible);
                setIsFolderVisible(false);
              }}
            />
            {isFileVisible ? (
              <input
                type="file"
                className="file-input file-input-bordered file-input-info w-full max-w-xs"
                onChange={(e) => uploadFile(e)}
              />
            ) : null}
            <Button
              onClick={() => {
                setIsFolderVisible(!isFolderVisible);
                setIsFileVisible(false);
              }}
              title="Create a Folder"
              btnClass="bg-yellow-500"
            />
            {isFolderVisible ? (
              <>
                {" "}
                <InputDefault
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFolderName(e.target.value)
                  }
                  value={folderName}
                />
                <Button
                  onClick={() => uploadFolder()}
                  title="Create a Folder"
                  btnClass="bg-yellow-500"
                />
              </>
            ) : null}
          </>
        ) : null}
      </div>
      <div>{progress === 0 ? null : <ProgressDefault {...{ progress }} />}</div>
    </div>
  );
}
