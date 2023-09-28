import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// console.log("db", db());

export const addFiles = async (imageLink: string) => {
  // let files = collection(database, "files");
  // const i = addDoc(collection(database, "users"));
  const docData = {
    field1: "значення1",
    field2: "значення2",
    // Додайте інші поля та їх значення, які ви хочете зберегти
  };

  // Додаємо документ до колекції "myCollection"
  addDoc(collection(db, "myCollection"), docData)
    .then((docRef) => {
      console.log("Документ успішно доданий з ідентифікатором:", docRef.id);
    })
    .catch((error) => {
      console.error("Помилка під час додавання документа:", error);
    });
};
