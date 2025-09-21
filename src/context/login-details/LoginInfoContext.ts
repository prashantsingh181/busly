import type { User } from "@/types/user";
import { createContext, useContext } from "react";

interface LoginInfoContextType {
  isLoggedIn: boolean;
  userInfo: User | null;
  login: (userId: number) => void;
  logout: () => void;
}

export const LoginInfoContext = createContext<LoginInfoContextType | null>(
  null,
);

export const useLoginInfo = () => {
  const context = useContext(LoginInfoContext);
  // if context is used outside provider then throw error to let the developer know
  if (context === null) {
    throw new Error("useLoginInfo should be used inside LoginInfoContext");
  }
  return context;
};
