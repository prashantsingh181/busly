export default function InfoRow({
  icon: Icon,
  text,
  label,
}: {
  icon: React.ElementType;
  text: string;
  label: string;
}) {
  return (
    <span className="flex gap-2 py-1 text-sm md:text-base">
      <Icon className="text-theme-700/70 mt-1 text-center" />
      <span className="text-textSecondary font-semibold text-nowrap">
        {label} :
      </span>
      <p className="font-medium text-neutral-700/75">{text}</p>
    </span>
  );
}
