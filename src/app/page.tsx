import { HeroSlider } from "@/components/HeroSlider";
import { heroSlides } from "@/data/data-hero";
import CoursesListHome from "@/components/CoursesList";
import PricingSection from "@/components/PricingSection.tsx";
import TestimonialSection from "@/components/TestimonialSection.tsx";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSlider slides={heroSlides} />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading text-gray-900 mb-4">
                Featured Courses
              </h2>
              <p className="text-xl text-gray-600">
                Start your learning journey with our top-rated courses
              </p>
            </div>

            <CoursesListHome />
          </div>
        </section>
        <PricingSection />
        <TestimonialSection />
        <TrustedBy />
      </main>
    </div>
  );
}
