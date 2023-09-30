import ShowFiles from "../ShowFiles";
import TopBar from "../TopBar";
import UploadFiles from "../UploadFiles";
import ProgressDefault from "../common/ProgressDefault";

export default function HomeComponent() {
  return (
    <>
      <TopBar />
      <UploadFiles />
      <ShowFiles />
    </>
  );
}
