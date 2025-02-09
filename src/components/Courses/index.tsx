"use client";

import React, { useState } from "react";
import {
  Filter,
  SlidersHorizontal,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CoursesPageProps {
  courses: Course[];
}

import { Course } from "@/types/course";

export const CoursesPage = ({ courses }: CoursesPageProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 15;

  const filteredCourses = courses.filter((course) => {
    const matchesPrice =
      course.price >= priceRange[0] && course.price <= priceRange[1];
    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesPrice && matchesLevel && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = sortedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const categories = Array.from(
    new Set(courses.map((course) => course.category))
  );
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const FilterContent = () => (
    <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Level Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Level</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="level"
              value="all"
              checked={selectedLevel === "all"}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="mr-2"
            />
            All Levels
          </label>
          {levels.map((level) => (
            <label key={level} className="flex items-center">
              <input
                type="radio"
                name="level"
                value={level}
                checked={selectedLevel === level}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="mr-2"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="font-medium mb-2">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === "all"}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mr-2"
            />
            All Categories
          </label>
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          {/* Title and Filter button for mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Courses
              </h1>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Filter className="w-5 h-5" />
                <span className="text-sm">Filter</span>
              </button>
            </div>

            {/* Sort dropdown - Hidden on mobile, shown from sm breakpoint */}
            <div className="hidden sm:block">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="relevance">Most Relevant</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Sort dropdown for mobile - Only shown on mobile */}
          <div className="mt-4 sm:hidden">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="relevance">Most Relevant</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <FilterContent />
              <div className="mt-8">
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-64">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <SlidersHorizontal className="w-5 h-5 text-gray-500" />
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Course List */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6">
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <Link
                    href={`courses/${course.id}`}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    <div className="md:w-48 w-full h-32 relative">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600">
                            {course.title}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {course.description}
                          </p>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">
                          ${course.price}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="mr-4">{course.instructor}</span>
                        <span className="mr-4">{course.duration}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center items-center space-x-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
