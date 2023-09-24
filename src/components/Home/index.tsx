import { signIn, signOut } from "next-auth/react";
import Button from "../common/Button";
import { useFetchSession } from "@/hooks/useSession";
import styles from "./index.module.scss";
import TopBar from "../TopBar";

export default function HomeComponent() {
  return <TopBar />;
}
