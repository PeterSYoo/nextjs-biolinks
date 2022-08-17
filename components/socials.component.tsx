import Item from '../components/item.component';

interface Props {
  link: string;
  linkText: string;
}

const Socials = ({ link, linkText }: Props) => {
  return (
    <div className="px-1 bg-slate-200 rounded-lg">
      <Item link={link} linkText={linkText} />
    </div>
  );
};

export default Socials;
