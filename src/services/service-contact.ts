import { db } from "@/db/db";
import { Contact } from "@/types/contact";
import { addDoc, collection } from "firebase/firestore";

export async function addContact(contact: Contact) {
  try {
    const collectionName = collection(db, "contacts");
    const { id: _id, ...contactWithoutId } = contact;
    await addDoc(collectionName, contactWithoutId);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
