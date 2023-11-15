import { signIn, signOut } from "next-auth/react";
import Button from "../common/ButtonDefault";
import { useFetchSession } from "@/hooks/useSession";
import styles from "./index.module.scss";

export default function TopBar() {
  const { session } = useFetchSession();
  return (
    <div className={"absolute right-[20px] top-[20px]"}>
      {session ? (
        <div className="flex items-center">
          <h1 className="pr-[20px] text-[16px] font-extrabold tracking-tight text-white">
            Welcome {session?.user.name}
          </h1>
          <img
            onClick={() => signOut()}
            className={"h-[40px] w-[40px] rounded-full"}
            src={session?.user.image as string}
          />
        </div>
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass={"btn-primary"}
          title="Sign Up!"
        />
      )}
    </div>
  );
}
