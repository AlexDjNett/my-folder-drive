import { storage, app, db } from "@/firebaseConfig";
import type { NextApiRequest, NextApiResponse } from "next";

const firestore = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};

export default firestore;
