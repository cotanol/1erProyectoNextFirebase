import { CoursesPage } from "@/components/Courses";
import { fetchCourses } from "@/services/service-course";

export default async function CoursesPagePrincipal() {
  const courses = await fetchCourses();

  return <CoursesPage courses={courses} />;
}
