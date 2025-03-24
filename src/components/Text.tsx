import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  type?: "h1" | "h2" | "p" | "psmall";
  isBold?: boolean;
  isLight?: boolean;
  isLink?: boolean;
  style?: { [key: string]: string };
  children?: ReactNode;
}

const Text = ({ type, isBold, isLight, isLink, style, children }: Props) => {
  return type === "h1" ? (
    <H1 isLight={isLight} isBold={isBold} isLink={isLink} style={{ ...style }}>
      {children}
    </H1>
  ) : type === "h2" ? (
    <H2 isLight={isLight} isBold={isBold} isLink={isLink} style={{ ...style }}>
      {children}
    </H2>
  ) : type === "p" ? (
    <P isLight={isLight} isBold={isBold} isLink={isLink} style={{ ...style }}>
      {children}
    </P>
  ) : type === "psmall" ? (
    <PSmall
      isLight={isLight}
      isBold={isBold}
      isLink={isLink}
      style={{ ...style }}
    >
      {children}
    </PSmall>
  ) : (
    <P isLight={isLight} isBold={isBold} isLink={isLink} style={{ ...style }}>
      {children}
    </P>
  );
};

export default Text;

const BaseText = styled.span.attrs(
  (props: { isBold: boolean; isLight: boolean; isLink: boolean }) => props
)`
  display: inline-block;
  transition: all 0.3s;
  color: ${({ theme, isLight }) =>
    isLight ? theme.colors.plight : theme.colors.p};
  font-weight: ${({ isBold }) => isBold && 600};
  &:hover {
    ${({ theme, isLink }) =>
      isLink && {
        color: theme.colors.one,
        cursor: "pointer",
        transform: "translateY(-2px)",
      }}
  }
`;

const H1 = styled(BaseText)`
  font-size: 42px;
  font-weight: 600;
`;

const H2 = styled(BaseText)`
  font-size: 18px;
  line-height: 1.7;
  font-weight: 600;
`;

const P = styled(BaseText)`
  font-size: 16px;
  line-height: 1.7;
`;

const PSmall = styled(P)`
  font-size: 14px;
`;
