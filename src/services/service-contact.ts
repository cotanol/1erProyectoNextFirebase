import { db } from "@/db/db";
import { Contact } from "@/types/contact";
import { addDoc, collection } from "firebase/firestore";

export async function addContact(contact: Contact) {
  try {
    const collectionName = collection(db, "contacts");
    const { id, ...contactWithoutId } = contact;
    if (process.env.NODE_ENV === "development") {
      console.log("Ignoring id:", id); // Solo se imprime en desarrollo
    }
    await addDoc(collectionName, contactWithoutId);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
