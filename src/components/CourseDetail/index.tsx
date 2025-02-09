"use client";
import {
  Star,
  ShoppingCart,
  Heart,
  Download,
  BookOpen,
  FileText,
  CheckCircle,
} from "lucide-react";
import { CartItem, Course } from "@/types/course";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";

interface CourseDetailProps {
  course: Course;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  const { cartItems, setCartItems } = useShoppingCart();

  const handleAddToCart = (cartItem: CartItem) => {
    if (cartItems.find((item) => item.id === cartItem.id)) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item
      );
      setCartItems(updatedCartItems);
      return;
    }
    const updatedCartItems = [...cartItems, cartItem];
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Imagen y Detalles del Libro */}
        <div className="space-y-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-full h-60 md:h-72 lg:h-96 relative ">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <FileText className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Formats</p>
              <p className="font-semibold">PDF, EPUB</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <BookOpen className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Pages</p>
              <p className="font-semibold">450+</p>
            </div>
          </div>
        </div>

        {/* Información del Libro */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {course.category}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {course.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <p className="text-gray-700">
              <span className="font-medium">Author:</span> {course.instructor}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">(234 reviews)</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-blue-600">
                  ${course.price}
                </span>
                <span className="ml-2 text-gray-500 line-through">
                  ${(course.price * 2).toFixed(2)}
                </span>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                50% OFF - Limited Time
              </span>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => handleAddToCart({ ...course, quantity: 1 })}
                className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center font-semibold"
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <button className="w-full border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center font-semibold">
              <Download className="w-5 h-5 mr-2" /> Download Sample Chapter
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">This book includes:</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                DRM-free PDF format
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                EPUB format for e-readers
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Source code downloads
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Free updates for new editions
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Lifetime access
              </li>
            </ul>
          </div>

          {/* Table of Contents Preview */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Table of Contents Preview:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-sm text-gray-500 mr-2">Ch. 1</span>
                Introduction to Modern JavaScript
              </li>
              <li className="flex items-start">
                <span className="text-sm text-gray-500 mr-2">Ch. 2</span>
                ES6+ Features and Syntax
              </li>
              <li className="flex items-start">
                <span className="text-sm text-gray-500 mr-2">Ch. 3</span>
                Async Programming with Promises
              </li>
              <li className="flex items-start text-gray-400">
                <span className="text-sm mr-2">...</span>
                And 12 more chapters
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold">Reader Reviews</h3>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= 4
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">4.8 out of 5</span>
            </div>
          </div>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
            Write a Review
          </button>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-6">
            <div className="flex items-center mb-2">
              <div className="relative w-10 h-10">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=50"
                  alt="Reviewer"
                  fill
                  className="rounded-full mr-3"
                />
              </div>

              <div>
                <h4 className="font-semibold">John Doe</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              This book is an excellent resource for learning modern JavaScript.
              The examples are practical and the explanations are clear. The
              included source code and exercises helped me grasp the concepts
              quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
