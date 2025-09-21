import useLocalStorage from "@/hooks/useLocalStorage";
import { LoginInfoContext } from "./LoginInfoContext";
import { LOGIN_STORAGE_KEY } from "@/config/configKeys";
import { getUserById } from "@/data/user";

interface LoginInfoProviderProps {
  children: React.ReactNode;
}

export default function LoginInfoProvider({
  children,
}: Readonly<LoginInfoProviderProps>) {
  const [userId, setUserId] = useLocalStorage<number | null>(
    LOGIN_STORAGE_KEY,
    null,
  );
  let userInfo = null;
  if (userId) {
    userInfo = getUserById(userId) ?? null;
  }
  const isLoggedIn = userInfo !== null;

  function login(userId: number) {
    setUserId(userId);
  }
  function logout() {
    setUserId(null);
  }

  return (
    <LoginInfoContext value={{ isLoggedIn, userInfo, login, logout }}>
      {children}
    </LoginInfoContext>
  );
}
