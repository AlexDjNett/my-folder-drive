import { signIn, signOut } from "next-auth/react";
import Button from "../common/Button";
import { useFetchSession } from "@/hooks/useSession";
import styles from "./index.module.scss";

export default function TopBar() {
  const { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <>
          <img
            onClick={() => signOut()}
            className={styles.profileImg}
            src={session?.user.image as string}
          />
        </>
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
