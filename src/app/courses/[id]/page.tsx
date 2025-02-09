import { CourseDetail } from "@/components/CourseDetail";
import { fetchCourse } from "@/services/service-course";
type Params = Promise<{ id: string }>;

export default async function CourseDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const course = await fetchCourse(id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Book not found</p>
      </div>
    );
  }

  return <CourseDetail course={course} />;
}
