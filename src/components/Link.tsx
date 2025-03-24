import { ReactNode } from "react";

interface Props {
  href: string;
  children?: ReactNode;
}

const Link = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ cursor: "pointer" }}
    >
      {children}
    </a>
  );
};

export default Link;
