import { useEffect } from "react";

interface ToastProps {
  message: string;
}

function Toast({ message }: Readonly<ToastProps>) {
  useEffect(() => {}, []);
  return (
    <div
      id="toast"
      className="card bg-theme-100 text-theme-700 border-theme-600 animate-toast fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 translate-y-[200%] border p-4"
    >
      {message}
    </div>
  );
}

export default Toast;
