import { Link } from "react-router";

export default function Page2() {
  return (
    <>
      <div className="text-xl text-green-500">Page 2</div>
      <Link to="/">Page 1</Link>
    </>
  );
}
