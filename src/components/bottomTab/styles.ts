import { spectralSC } from "@/pages/_app";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

interface BottomTabButtonProps extends LinkProps {
  active: boolean;
}

export const BottomTabWrapper = styled.nav`
  display: flex;
  flex: 1;
  background-color: var(--gray);
  width: 100%;
  height: 4.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
`

export const BottomTabButton = styled(Link)<BottomTabButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0.1rem;
  padding-top: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  height: 100%;
  transition: filter 0.5s;
  font-family: ${spectralSC.style.fontFamily};
  background-color: ${props => props.active ? 'var(--cyan)' : 'var(--gray)'};
  color: ${props => props.active ? 'var(--background)' : 'var(--white)'};

  &:not(:first-child) {
    border-left: 1px solid var(--background);
  }

  &:hover {
    filter: brightness(1.25);
  }

  img {
    width: 2.25rem;
    height: 2.25rem;
  }
`