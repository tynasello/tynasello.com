import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  type: string;
  onClick?: any;
  active?: string;
  section?: string;
  style?: {};
  children?: ReactNode;
}

const Button = ({ type, onClick, active, section, style, children }: Props) => {
  return type === "contact" ? (
    <SContactButton onClick={() => onClick && onClick()} style={{ ...style }}>
      {children}
    </SContactButton>
  ) : type === "main" ? (
    <SMainButton
      active={active}
      section={section}
      onClick={() => onClick && section && onClick(section)}
    >
      {children}
    </SMainButton>
  ) : type === "project" ? (
    <SProjectButton>{children}</SProjectButton>
  ) : type === "tag" ? (
    <SSkillButton>{children}</SSkillButton>
  ) : (
    <></>
  );
};

export default Button;

const BaseButton = styled.button`
  transition: all 0.3s ease;
  cursor: pointer;
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

const SContactButton = styled(BaseButton)`
  padding: 0.7rem;
  font-size: 23px;
  border-radius: 15px;

  span {
    padding-left: 0.5rem;
  }
`;

const SProjectButton = styled(BaseButton)`
  span {
    padding: 0.34rem 0.6rem;
  }
`;

const SSkillButton = styled(BaseButton)`
  span {
    padding: 0.34rem 0.6rem;
  }
`;

const SMainButton = styled(BaseButton).attrs(
  (props: { active: string; section: string }) => props
)`
  padding: 1rem 1.4rem;
  font-size: 23px;

  background: ${({ theme, active, section }) =>
    section === active
      ? section === "One"
        ? theme.colors.onea
        : section === "Two"
        ? theme.colors.twoa
        : null
      : "inherit"};
  color: ${({ theme, active, section }) =>
    section === active
      ? section === "One"
        ? theme.colors.one
        : section === "Two"
        ? theme.colors.two
        : null
      : theme.colors.plight};

  span {
    padding-left: 0.8rem;
    color: ${({ theme, active, section }) =>
      section === active
        ? section === "One"
          ? theme.colors.one
          : section === "Two"
          ? theme.colors.two
          : null
        : theme.colors.plight};
  }
  &:hover {
    > * {
      color: ${({ theme, active, section }) =>
        section === active
          ? section === "One"
            ? theme.colors.one
            : section === "Two"
            ? theme.colors.two
            : null
          : theme.colors.p};
    }
    background: ${({ theme, active, section }) =>
      section !== active && theme.colors.lightbg};
  }
`;
