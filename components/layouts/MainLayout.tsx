import { FC, ReactElement } from "react";
import Head from "next/head";
import { NavbarApp } from "../ui";

interface MainLayoutProps {
  title?: string;
  children: ReactElement;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon APP"}</title>
        <meta name="author" content="bongoman-by" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Fernando Herrera's course of Udemy" />
        <meta name="keywords" content={`${title}, pokemon, udemy`} />
        <meta
          property="og:title"
          content={`Information about pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`This is the page about ${title}`}
        />
        <meta
          property="og:url"
          content={`${origin}/pokemon/name/${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/images/banner.png`}
        />
      </Head>
      <NavbarApp />
      <main>{children}</main>
    </>
  );
};
export { MainLayout };
