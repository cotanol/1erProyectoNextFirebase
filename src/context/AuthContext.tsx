"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { googleProvider } from "@/db/db";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  modalLogin: boolean;
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>;

  login: () => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth debe estar dentro de AuthProvider");

  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [modalLogin, setModalLogin] = useState(false);
  // Verificar el estado de la autenticación al cargar la app
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Si el usuario está logueado, lo actualizamos
      } else {
        setUser(null); // Si no está logueado, establecemos null
      }
    });
    return unsubscribe;
  }, []);

  // Función de login con Google
  const login = async () => {
    const auth = getAuth();
    try {
      await signInWithPopup(auth, googleProvider);
      setModalLogin(false); // Cerramos el modal de login
    } catch (error) {
      console.error("Error en el login con Google", error);
    }
  };

  // Función de logout
  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null); // Limpiamos el estado del usuario
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, modalLogin, setModalLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
