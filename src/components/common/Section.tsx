interface SectionProps {
  heading: string;
  children?: React.ReactNode;
}

export default function Section({ heading, children }: Readonly<SectionProps>) {
  return (
    <>
      <h2 className="font-poppins text-textPrimary text-base font-semibold md:text-lg">
        {heading}
      </h2>
      {children}
    </>
  );
}
