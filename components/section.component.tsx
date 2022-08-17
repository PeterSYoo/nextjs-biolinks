interface Props {
  children: React.ReactNode;
  utilStyles?: any;
}

const Section = ({ children, utilStyles }: Props) => {
  return (
    <div className={`${utilStyles} p-3 rounded-lg`}>
      <div className="flex justify-between items-center">{children}</div>
    </div>
  );
};

export default Section;
