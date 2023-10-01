import ShowFiles from "@/components/ShowFiles";
import TopBar from "@/components/TopBar";
import UploadFiles from "@/components/UploadFiles";
import { useFetchSession } from "@/hooks/useSession";
import { useRouter } from "next/router";

export default function Folder() {
  const router = useRouter();
  const { session } = useFetchSession();

  const parentId = router.query.id as string;

  //   console.log(router.query.id);

  return (
    <main className="flex min-h-screen flex-col bg-sky-500">
      <TopBar />

      {session ? (
        <>
          <UploadFiles parentId={parentId} />
          <ShowFiles parentId={parentId} />{" "}
        </>
      ) : null}
    </main>
  );
}
