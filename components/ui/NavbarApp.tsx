import { ReactElement } from "react";
import NextLink from "next/link";
import { Navbar, useTheme } from "@nextui-org/react";
import { ClientOnly } from "../utils/ClientOnly";
import { useRouter } from "next/router";
import { Logo } from ".";

const NavbarApp = (): ReactElement => {
  const { theme } = useTheme();
  const router = useRouter();
  const pages = [
    { text: "Pokemon", href: "/" },
    { text: "Favorites", href: "/favorites" },
  ];

  const menuItems = pages.map((page) => (
    <NextLink key={page.href} href={page.href} passHref>
      <Navbar.Link isActive={router.asPath === page.href ? true : false}>
        {page.text}
      </Navbar.Link>
    </NextLink>
  ));

  return (
    <ClientOnly>
      <Navbar
        isBordered={false}
        disableBlur={true}
        variant="floating"
        css={theme ? { backgroundColor: theme.colors.gray400.value } : {}}
        containerCss={{
          justifyContent: "flex-start",
          background: "inherit",
        }}
      >
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">{menuItems}</Navbar.Content>
      </Navbar>
    </ClientOnly>
  );
};

export { NavbarApp };
