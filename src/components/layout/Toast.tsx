import { useEffect } from "react";

interface ToastProps {
  message: string;
}

function Toast({ message }: Readonly<ToastProps>) {
  useEffect(() => {}, []);
  return (
    <div
      id="toast"
      className="card bg-theme-100 text-theme-700 border-theme-600 animate-toast fixed left-1/2 -translate-x-1/2 bottom-6 z-[100] translate-y-[200%] border p-4"
    >
      {message}
    </div>
  );
}

export default Toast;
