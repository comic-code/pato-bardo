import { cinzelDecorative } from "@/pages/_app";
import styled from "styled-components";

export const MainStatusWrapper = styled.section`
  padding: 0.5rem;
  background: var(--gray);
  border-radius: 5px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
`

export const AtributeWrapper = styled.div`
  border: 1px solid var(--background);
  width: 7.25rem;
  height: 5rem;
  margin: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  position: relative;

  label {
    color: var(--white);
    font-family: ${cinzelDecorative.style.fontFamily};
    font-weight: bold;
    font-size: 0.8rem;
  }

  input {
    width: 100%;
    text-align: center;
    flex: 1;
    font-size: 2rem;
    padding-bottom: 0.25rem;
    font-weight: bold;
    border-radius: 5px;
    border: 0;
  }

  span {
    position: absolute;
    bottom: -0.75rem;
    background-color: var(--cyan);
    width: 3rem;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1.25rem;
    border: 1px solid var(--background)
  }
`