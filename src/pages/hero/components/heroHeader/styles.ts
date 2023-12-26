import { spectralSC } from "@/pages/_app";
import styled from "styled-components";

export const HeroHeaderWrapper = styled.section`
  background-color: var(--gray);
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 5px;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid var(--cyan);
    margin-right: 0.5rem;
  }

  div.infos {
    color: var(--white);

    span {
      font-family: ${spectralSC.style.fontFamily};
      font-weight: bold;

      &.level {
        color: var(--green);
      }
    }
  }

`