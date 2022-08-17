import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SocialsTypes, LinksTypes, UserTypes, ProductsTypes } from '../types';
import { sanityClient, urlFor } from '../sanity';
import { motion } from 'framer-motion';
import Section from '../components/section.component';
import Socials from '../components/socials.component';
import Links from '../components/links.component';
import { MailIcon } from '@heroicons/react/solid';
import Link from 'next/link';

interface Props {
  user: [UserTypes];
  socials: [SocialsTypes];
  links: [LinksTypes];
  products: [ProductsTypes];
}

const Home: NextPage<Props> = ({ socials, user, links, products }) => {
  const [share, setShare] = useState(false);

  const onShare = () => {
    const clipboard = navigator.clipboard.writeText(window.location.href);
    clipboard
      .then(() => {
        setShare(true);
      })
      .then(() => {
        setTimeout(() => {
          setShare(false);
        }, 2000);
      });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>{user[0].name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 justify-center">
        <div className="space-y-4">
          <div className="flex justify-between items-center w-full">
            {/* avatar */}
            <div className="flex">
              <Image
                src={urlFor(user[0].image).url()}
                alt="avatar"
                width={75}
                height={75}
                className="rounded-lg items-center flex"
              />
            </div>

            {/* socials section */}
            {user[0].showSocialsSection && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
                className=""
              >
                <Section>
                  <div className="gap-1 items-center w-full">
                    <div className="overflow-x-auto flex gap-2 items-center">
                      {socials.map((social: any) => (
                        <Socials
                          key={social._id}
                          link={social.links}
                          linkText={social.linkText}
                        />
                      ))}
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}
          </div>

          {/* user info section */}
          <div className="flex items-center justify-between">
            <div className="font-light text-sm flex">
              {/* heading */}
              {user[0].title}
            </div>
            <div className="flex space-x-2">
              <button className="" onClick={onShare}>
                {share ? 'URL Copied!' : 'Copy URL!'}
              </button>
              <div className="cursor-pointer flex justify-end">
                <Link href={`mailto:${user[0].contactEmail}`}>
                  <MailIcon className="text-gray-400 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* products / mentioned links */}
          <div className="space-y-3 max-w-xs lg:max-w-lg">
            {/* products */}
            {user[0].showProductsSection && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
              >
                <h1 className="font-semibold text-xl pb-2 pt-4 flex justify-end">
                  {user[0].productsTitle}
                </h1>
                <Section>
                  <div className="grid items-center space-y-2 w-full">
                    <div className="overflow-x-auto flex gap-2 items-center">
                      {products
                        .sort((a: any, b: any) => {
                          return (
                            new Date(b._createdAt).getTime() -
                            new Date(a._createdAt).getTime()
                          );
                        })
                        ?.map((product: any) => (
                          <Links
                            key={product._id}
                            link={product.link}
                            linkText={product.name}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            discount={product.discount || null}
                            logo={product.logo}
                          />
                        ))}
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}
          </div>
        </div>
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
      showSocialsSection,
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
