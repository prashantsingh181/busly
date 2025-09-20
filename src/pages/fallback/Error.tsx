import { Link } from "react-router";

export default function Error() {
  return (
    <main className="from-theme-400 to-theme-100 min-h-screen bg-gradient-to-br">
      <div className="custom-container pb-10">
        <img
          src="/error.png"
          alt="Broken Robot Illustration"
          className="mx-auto block"
        />
        <div className="mt-6 flex flex-col items-center gap-6">
          <p className="text-textSecondary text-xl font-medium sm:text-2xl">
            Something went{" "}
            <span className="text-theme-700 text-2xl font-semibold sm:text-4xl">
              Wrong.
            </span>{" "}
            We will fix it in a jiffy.
          </p>
          <Link to="/" className="primary-button text-lg">
            Home Page
          </Link>
        </div>
      </div>
    </main>
  );
}
