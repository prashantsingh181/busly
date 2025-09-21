import LoginForm from "@/components/common/LoginForm";
import { memo } from "react";

interface LoginModalProps {
  show: boolean;
  hideModal: () => void;
}

function LoginModal({ show, hideModal }: LoginModalProps) {
  return show ? (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-[2px]">
      <LoginForm message="Please Login First!" onLogin={hideModal} />
    </div>
  ) : null;
}

export default memo(LoginModal);
