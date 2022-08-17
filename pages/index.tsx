import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SocialsTypes, LinksTypes, UserTypes, ProductsTypes } from '../types';
import { sanityClient, urlFor } from '../sanity';

interface Props {
  user: [UserTypes];
  socials: [SocialsTypes];
  links: [LinksTypes];
  products: [ProductsTypes];
}

const Home: NextPage<Props> = ({ socials, user, links, products }) => {
  console.log(products);
  console.log('links', links);
  console.log('user', user);
  console.log('socials', socials);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        asdfg
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const userQuery = `
    *[_type == 'editUser'] {
      _id,
      image,
      name,
      contactEmail,
      title,
      socialsTitle,
      linksTitle,
      productsTitle,
      showSocialSection,
      showLinksSection,
      showProductsSection,
    }
  `;

  const linksQuery = `
    *[_type == 'links'] {
      _id,
      _createdAt,
      link,
      linkText,
      coupon,
      couponAmt,
    }
  `;

  const productsQuery = `
    *[_type == 'products'] {
      _id,
      _createdAt,
      name,
      logo,
      description,
      price,
      discount,
      link,
    }
  `;

  const socialsQuery = `
    *[_type == 'socials'] {
      _id,
      link,
      linkText,
    }
  `;

  const [user, links, socials, products] = await Promise.all([
    sanityClient.fetch(userQuery),
    sanityClient.fetch(linksQuery),
    sanityClient.fetch(socialsQuery),
    sanityClient.fetch(productsQuery),
  ]);

  return {
    props: {
      user: user,
      links: links,
      socials: socials,
      products: products,
    },
  };
};
