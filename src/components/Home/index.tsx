import { useFetchSession } from "@/hooks/useSession";
import ShowFiles from "../ShowFiles";
import TopBar from "../TopBar";
import UploadFiles from "../UploadFiles";
import ProgressDefault from "../common/ProgressDefault";

export default function HomeComponent() {
  const { session } = useFetchSession();
  return (
    <>
      <TopBar />
      {session ? (
        <>
          <UploadFiles parentId="" />
          <h2 className="ml-[20px] mt-[40px] text-xl font-bold">Root</h2>

          <ShowFiles parentId="" />
        </>
      ) : null}
    </>
  );
}
