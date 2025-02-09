"use server";

import { fetchCourses } from "@/services/service-course";
import CourseCard from "../CourseCard";

export default async function CoursesList() {
  const dataCourses = await fetchCourses();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dataCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
