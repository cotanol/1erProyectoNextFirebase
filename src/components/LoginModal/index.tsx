"use client";

import React from "react";
import { X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface LoginModalProps {
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { login } = useAuth();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back</h2>

        {/* Botón de login con Google */}
        <button
          onClick={login}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign In with Google
        </button>

        <div className="text-center text-sm text-gray-600 mt-4">
          Do not have an account?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
