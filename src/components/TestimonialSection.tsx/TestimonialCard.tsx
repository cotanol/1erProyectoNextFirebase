import { Testimonial } from "@/types/testimonial";
import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105">
      <div className="flex items-center mb-6">
        <div className="relative w-12 h-12">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
};

export default TestimonialCard;
