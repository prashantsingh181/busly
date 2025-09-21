interface SpinnerProps {
  width?: string;
  height?: string;
  className?: string;
}

function Spinner({
  width = "1.5rem",
  height = "1.5rem",
  className = "",
}: SpinnerProps) {
  return (
    <div
      style={{ width, height }}
      className={`border-theme-500 inline-block animate-spin rounded-full border-2 border-l-transparent ${
        className ? className : ""
      }`}
    ></div>
  );
}

export default Spinner;
