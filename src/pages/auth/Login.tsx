import LoginForm from "@/components/common/LoginForm";
import { useLoginInfo } from "@/context/login-details/LoginInfoContext";
import { Navigate } from "react-router";

export default function Login() {
  const { isLoggedIn } = useLoginInfo();

  if (isLoggedIn) {
    <Navigate to="/" />;
  }

  return (
    <main className="from-theme-400 to-theme-100 font-inter grid min-h-screen place-items-center bg-gradient-to-br">
      <div className="custom-container py-10">
        <LoginForm />
      </div>
    </main>
  );
}
