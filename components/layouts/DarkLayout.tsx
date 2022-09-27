import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  backgroundColor: "rgba(0,0,0,0.3)",
  borderRadius: "5px",
  padding: "10px",
};

interface FCProps {
  children: React.ReactNode;
}

export const DarkLayout: FC<FCProps> = ({ children }) => {
  return (
    <div
      style={style}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
