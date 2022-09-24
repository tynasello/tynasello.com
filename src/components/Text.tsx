import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  type?: string;
  isBold?: boolean;
  isLight?: boolean;
  isLink?: boolean;
  style?: { [key: string]: string };
  children?: ReactNode;
}

const Text = ({ type, isBold, isLight, isLink, style, children }: Props) => {
  return type === "h1" ? (
    <H1 style={{ ...style }}>{children}</H1>
  ) : type === "h2" ? (
    <H2 style={{ ...style }}>{children}</H2>
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

const BaseText = styled.span`
  display: inline-block;
  transition: all 0.3s;
`;

const H1 = styled(BaseText)`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.p};
`;

const H2 = styled(BaseText)`
  font-size: 18px;
  line-height: 1.7;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.p};
`;

const P = styled(BaseText).attrs(
  (props: { isBold: boolean; isLight: boolean; isLink: boolean }) => props
)`
  font-size: 16px;
  line-height: 1.7;

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

const PSmall = styled(P).attrs(
  (props: { isBold: boolean; isLight: boolean; isLink: boolean }) => props
)`
  font-size: 14px;

  color: ${({ theme, isLight }) =>
    isLight ? theme.colors.plight : theme.colors.p};
  font-weight: ${({ isBold }) => isBold && 600};
  &:hover {
    ${({ theme, isLink }) =>
      isLink && {
        color: theme.colors.one,
        cursor: "pointer",
      }}
  }
`;
