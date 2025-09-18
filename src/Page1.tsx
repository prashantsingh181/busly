import { Link } from "react-router";

export default function Page1() {
  return (
    <>
      <div className="text-xl text-red-500">Page 1</div>
      <Link to="/page2">Page 2</Link>
    </>
  );
}
