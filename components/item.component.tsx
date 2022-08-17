import Link from 'next/link';

interface Props {
  link: string;
  linkText: string;
  createdAt?: string;
  description?: string;
  price?: number;
  discount?: number;
  logo?: string;
  coupon?: string;
  couponAmt?: string;
}

const discountCalc = (price: number, discount: number) => {
  const discountedPrice = price - price * (discount / 100);
  return discountedPrice;
};

const Item = (Props: Props) => {
  return (
    <Link href={`${Props.link}`}>
      <div className="space-y-1 cursor-pointer">
        <div
          className="flex text-sm justify-center py-1 px-2 truncate ... 
        rounded-lg font-semibold"
        >
          {Props.linkText}
        </div>
      </div>
      {/* {Props.description && (
        <div className="grid justify-end space-y-1">
          <>
            {Props.description && (
              <div className="text-xs font-extralight justify-end flex">
                {Props.description}
              </div>
            )}
            {Props.discount && (
              <div className="flex justify-evenly space-x-4 items-center">
                {Props.logo && <div className="flex">{Props.logo}</div>}
                <div className="text-xs"></div>
              </div>
            )}
          </>
        </div>
      )} */}
    </Link>
  );
};

export default Item;
