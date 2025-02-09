"use client";

import { useAuth } from "@/context/AuthContext";
import { LoginModal } from "./index";

const LoginModalTrigger = () => {
  const { modalLogin, setModalLogin } = useAuth();

  return (
    <>{modalLogin && <LoginModal onClose={() => setModalLogin(false)} />}</>
  );
};

export default LoginModalTrigger;
