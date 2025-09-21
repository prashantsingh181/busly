import { useLoginInfo } from "@/context/login-details/LoginInfoContext";
import { users } from "@/data/user";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router";

interface LoginFormProps {
  message?: string;
  onLogin?: () => void;
}

function LoginForm({ message, onLogin }: Readonly<LoginFormProps>) {
  const { login } = useLoginInfo();
  const navigate = useNavigate();
  function handleLogin(userId: number) {
    login(userId);
    if (onLogin) {
      onLogin();
    } else {
      navigate("/");
    }
  }
  return (
    <div className="card mx-auto max-w-[30rem] p-6">
      <h2 className="section-heading">Login</h2>
      {message && (
        <p className="mt-3 text-center text-base text-red-400">{message}</p>
      )}
      <div className="mt-6 text-center text-base text-neutral-800/75">
        Select a user:
      </div>
      <div className="mt-3 flex flex-col gap-4">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => handleLogin(user.id)}
            className="flex items-center gap-4 rounded-lg bg-neutral-200/50 p-3 text-left shadow transition-shadow hover:shadow-xl"
          >
            <div className="bg-theme-500 h-[3rem] w-[3rem] overflow-hidden rounded-full shadow sm:h-[4rem] sm:w-[4rem]">
              <img className="h-full w-full object-cover" src={user.img} />
            </div>
            <div className="text-textSecondary flex flex-1 flex-col gap-1 text-lg font-medium">
              <h3 className="text-theme-700 font-semibold italic">
                {user.name}
              </h3>
              <p className="text-sm text-neutral-500">{user.description}</p>
              <div className="flex items-center gap-2 text-xs text-neutral-800">
                <FaLocationDot />
                <span>{user.location}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LoginForm;
