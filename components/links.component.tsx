import Item from './item.component';

interface Props {
  link: string;
  linkText: string;
  createdAt?: string;
  name?: string;
  description?: string;
  price?: number;
  discount?: number;
  logo?: string;
  coupon?: string;
  couponAmt?: string;
}

const Links = (Props: Props) => {
  return (
    <div className="px-1 rounded-lg pt-1 bg-2 bg-white">
      <Item
        link={Props.link}
        linkText={Props.linkText}
        createdAt={Props.createdAt}
        description={Props.description}
        price={Props.price}
        discount={Props.discount}
        logo={Props.logo}
        coupon={Props.coupon}
        couponAmt={Props.couponAmt}
      />
    </div>
  );
};

export default Links;
