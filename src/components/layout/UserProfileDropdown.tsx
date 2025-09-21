import { Link } from "react-router";
import { FaUser } from "react-icons/fa6";
import { Dropdown } from "@/components/common/Dropdown";
import { useLoginInfo } from "@/context/login-details/LoginInfoContext";

const UserProfileDropdown = () => {
  const { isLoggedIn, userInfo, logout } = useLoginInfo();

  return (
    <>
      {isLoggedIn && userInfo ? (
        <Dropdown className="group/item toggle-button dropdown relative">
          <Dropdown.Trigger
            className="btn icon-btn flex h-[3rem] w-[3rem] items-center justify-center"
            id="menuBuilderList"
            data-bs-toggle="dropdown"
          >
            <div className="flex items-center gap-[.375rem]">
              <div className="h-[3rem] w-[3rem] overflow-hidden rounded-full bg-theme-500">
                <img
                  alt="user profile"
                  src={userInfo?.img}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Dropdown.Trigger>
          <Dropdown.Content
            placement="bottom-left"
            className="profile-dropdown"
            aria-labelledby="Profile Options"
          >
            <ul className="z-40 flex w-[10rem] flex-col overflow-hidden rounded-xl bg-neutral-100 text-nowrap shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]">
              <Link
                to="/bookings"
                className="text-theme-900 hover:bg-theme-700 w-full px-3 py-[0.6rem] text-center font-bold transition hover:text-white"
              >
                My Bookings
              </Link>
              <button
                onClick={logout}
                className="text-theme-900 hover:bg-theme-700 w-full px-3 py-[0.6rem] text-center font-bold transition hover:text-white"
              >
                Logout
              </button>
            </ul>
          </Dropdown.Content>
        </Dropdown>
      ) : (
        <Link to="/login" className="primary-button flex gap-2">
          <FaUser />
          <span>Login</span>
        </Link>
      )}
    </>
  );
};

export default UserProfileDropdown;
