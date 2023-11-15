import { AiFillFileText, AiFillFolder } from "react-icons/ai";
import { fetchFiles } from "@/hooks/fetchFiles";
import { useRouter } from "next/router";
import { useFetchSession } from "@/hooks/useSession";
import { BiDotsVerticalRounded } from "react-icons/bi";
import InputDefault from "../common/InputDefault";
import ButtonDefault from "../common/ButtonDefault";
import { ChangeEvent, useRef, useState } from "react";

export default function ShowFiles({ parentId }: ShowFilesProps) {
  const { session } = useFetchSession();
  const [currentId, setCurrentId] = useState<String>();
  const refBtnShareModal = useRef(null);
  const [emailUser, setEmailUser] = useState("");

  const userEmail = session?.user.email as string;

  const { fileList } = fetchFiles(parentId, userEmail);

  const router = useRouter();

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };

  const getSharedEmails = () => {
    // console.log("🚀 ~ file: index.tsx:15 ~ ShowFiles ~ emailUser:", emailUser);
    // console.log("refBtnShareModal", refBtnShareModal);
  };

  return (
    <div
      className="mx-auto mt-[30px] grid w-[95%] gap-[30px]"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 10%))" }}
    >
      {fileList.map((file) => (
        <div key={file.id} className="h-[200px] w-[100%] object-contain">
          {file.isFolder ? (
            <div className="relative h-[100%]">
              <div
                className=" flex h-[100%] flex-col items-center justify-center rounded-lg bg-accent "
                onClick={() => router.push(`folder?id=${file.id}`)}
              >
                <AiFillFolder size={80} />
                <p className="text-center">{file.folderName}</p>
              </div>
              <label htmlFor="my_modal_6">
                <BiDotsVerticalRounded
                  className=" absolute bottom-[15px] right-[15px] cursor-pointer"
                  size={20}
                  onClick={() => setCurrentId(file.id)}
                />
              </label>
            </div>
          ) : (
            <div
              className="flex h-[100%] flex-col items-center justify-center rounded-lg bg-accent"
              onClick={() => openFile(file.imageLink)}
            >
              <img
                className="h-[100px] w-[100px] object-contain"
                src={file.imageLink}
              />
              <p className="text-center">{file.imageName}</p>
            </div>
          )}

          {/* <img src={file.imageLink} /> */}
        </div>
      ))}

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my_modal_6"
        ref={refBtnShareModal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <InputDefault
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmailUser(e.target.value)
            }
          />

          <div className="modal-action">
            <ButtonDefault
              title="Share"
              onClick={() => {
                // (document as any).my_modal_6.close();
                // (document as any).getElementById("my_modal_6");
                getSharedEmails();
              }}
            />
            <label htmlFor="my_modal_6" className="btn normal-case">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
