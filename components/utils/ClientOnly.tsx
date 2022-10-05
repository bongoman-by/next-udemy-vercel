import { NextPage } from "next";
import React, { ReactElement } from "react";

interface ClientOnlyProps {
  children: ReactElement | ReactElement[]; 
}

const ClientOnly: NextPage<ClientOnlyProps> = ({
  children,
  ...delegated
}) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <React.Fragment {...delegated}>{children}</React.Fragment>;
};

export { ClientOnly };
