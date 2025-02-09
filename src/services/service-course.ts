import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/db";
import { Course } from "@/types/course";

export async function fetchCourses() {
  const collectionName = collection(db, "courses");
  const dataDB = await getDocs(collectionName);
  const data = dataDB.docs.map((courseDB) => {
    return { id: courseDB.id, ...courseDB.data() } as Course;
  });
  return data;
}

export async function fetchCourse(id: string) {
  const collectionName = collection(db, "courses");
  const dataDB = await getDocs(collectionName);
  const data = dataDB.docs.map((courseDB) => {
    return { id: courseDB.id, ...courseDB.data() } as Course;
  });
  return data.find((course) => course.id === id);
}
