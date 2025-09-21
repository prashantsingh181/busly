import { REDIRECT_URL_KEY } from "@/config/configKeys";
import { useLoginInfo } from "@/context/login-details/LoginInfoContext";
import { Navigate, useLocation } from "react-router";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({
  children,
}: Readonly<PrivateRouteProps>) {
  const { isLoggedIn } = useLoginInfo();
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to={`/login?${REDIRECT_URL_KEY}=${encodeURIComponent(
          location.pathname + location.search,
        )}`}
        replace
      />
    );
  }
  return children;
}
