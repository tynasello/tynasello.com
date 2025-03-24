import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  type: "bubble" | "section" | "project" | "tag";
  onClick?: any;
  activeSectionNumber?: number;
  sectionNumber?: number;
  style?: {};
  children?: ReactNode;
}

const Button = ({
  type,
  onClick,
  activeSectionNumber,
  sectionNumber,
  style,
  children,
}: Props) => {
  return type === "bubble" ? (
    <SBubbleButton onClick={onClick} style={{ ...style }}>
      {children}
    </SBubbleButton>
  ) : type === "section" ? (
    <SSectionButton
      onClick={onClick}
      active={activeSectionNumber}
      section={sectionNumber}
      style={{ ...style }}
    >
      {children}
    </SSectionButton>
  ) : type === "project" ? (
    <SProjectButton style={{ ...style }}> {children} </SProjectButton>
  ) : type === "tag" ? (
    <SSkillButton style={{ ...style }}>{children}</SSkillButton>
  ) : (
    <></>
  );
};

export default Button;

const BaseButton = styled.button`
  cursor: pointer;

  transition: all 0.3s ease;
  border-radius: 10px;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.lightbg};
  color: ${({ theme }) => theme.colors.plight};

  &:hover {
    transform: translateY(-4px);
    > * {
      color: ${({ theme }) => theme.colors.p};
    }
  }
`;

const SBubbleButton = styled(BaseButton)`
  padding: 0.7rem;
  font-size: 23px;
  border-radius: 15px;
  gap: 0.5rem;
`;

const SSectionButton = styled(BaseButton).attrs(
  (props: { active: number; section: number }) => props
)`
  padding: 1rem 1.4rem;
  font-size: 23px;

  background: ${({ theme, active, section }) =>
    section === active
      ? section === 1
        ? theme.colors.onea
        : section === 2
        ? theme.colors.twoa
        : null
      : "inherit"};
  color: ${({ theme, active, section }) =>
    section === active
      ? section === 1
        ? theme.colors.one
        : section === 2
        ? theme.colors.two
        : null
      : theme.colors.plight};

  span {
    padding-left: 0.8rem;
    color: ${({ theme, active, section }) =>
      section === active
        ? section === 1
          ? theme.colors.one
          : section === 2
          ? theme.colors.two
          : null
        : theme.colors.plight};
  }
  &:hover {
    > * {
      color: ${({ theme, active, section }) =>
        section === active
          ? section === 1
            ? theme.colors.one
            : section === 2
            ? theme.colors.two
            : null
          : theme.colors.p};
    }
    background: ${({ theme, active, section }) =>
      section !== active && theme.colors.lightbg};
  }
`;

const SProjectButton = styled(BaseButton)`
  padding: 0.34rem 0.6rem;
`;

const SSkillButton = styled(BaseButton)`
  cursor: default;
  padding: 0.34rem 0.6rem;
`;
