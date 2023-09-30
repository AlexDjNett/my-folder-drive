import { AiFillFileText } from "react-icons/ai";
import { fetchFiles } from "@/hooks/fetchFiles";

export default function ShowFiles() {
  const { fileList } = fetchFiles();

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };

  return (
    <div
      className="mx-auto mt-[30px] grid w-[70%] gap-[30px]"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 30%))" }}
    >
      {fileList.map((file) => (
        <div key={file.imageLink} className="h-[300px] w-[100%] object-contain">
          <div
            className="flex h-[100%] items-center justify-center rounded-lg bg-accent"
            onClick={() => openFile(file.imageLink)}
          >
            <AiFillFileText size={80} />
          </div>

          {/* <img src={file.imageLink} /> */}
        </div>
      ))}
    </div>
  );
}
