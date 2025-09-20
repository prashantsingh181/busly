import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="from-theme-400 to-theme-100 grid min-h-screen place-items-center bg-gradient-to-br">
      <div className="custom-container py-10">
        <img
          className="mx-auto block"
          src="/404.png"
          alt="Illustration of 404"
        />
        <div className="mt-6 flex flex-col gap-6 items-center">
          <p className="text-textSecondary text-xl font-medium sm:text-2xl">
            <span className="text-theme-700 text-2xl font-semibold sm:text-4xl">
              Huh?
            </span>{" "}
            This hasn't happened in a while. Are you sure you are at the right
            place?
          </p>
          <Link to="/" className="primary-button text-lg">
            Home Page
          </Link>
        </div>
      </div>
    </main>
  );
}
