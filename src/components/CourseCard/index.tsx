"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Course, CartItem } from "@/types/course";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative w-full h-48">
        <Link href={`courses/${course.id}`}>
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </Link>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
            {course.level}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-gray-700">Instructor:</span>
          <span className="ml-2 text-gray-900 font-medium">
            {course.instructor}
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-700">Duration:</span>
          <span className="ml-2 text-gray-900">{course.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            ${course.price}
          </span>
          <button
            onClick={() => handleAddToCart({ ...course, quantity: 1 })}
            className="flex font-medium items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
