import Spinner from "./Spinner";

function ScreenLoader() {
  return (
    <div className="absolute inset-0 z-30 grid place-items-center bg-black/30">
      <Spinner />
    </div>
  );
}

export default ScreenLoader;
