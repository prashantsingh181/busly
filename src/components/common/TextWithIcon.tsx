import { HiSparkles } from "react-icons/hi2";

interface TextWithIconProps {
  icon?: React.ReactNode;
  text: string;
  containerClassName?: string;
  textClassName?: string;
}

export default function TextWithIcon({
  icon = <HiSparkles className="text-lg" />,
  text,
  containerClassName,
  textClassName,
}: Readonly<TextWithIconProps>) {
  return (
    <div
      className={
        containerClassName ??
        "text-theme-700 flex items-center justify-center gap-1.5"
      }
    >
      {icon}
      <span className={textClassName ?? "font-medium"}>{text}</span>
    </div>
  );
}
