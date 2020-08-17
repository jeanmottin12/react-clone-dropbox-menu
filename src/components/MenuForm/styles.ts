import styled from "styled-components";
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
  height: 61px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-quaternary);
      margin-left: 10px;
      font-size: 29px;
    }
  }
  
  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;

    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  > .title {
    font-size: 25px;
    font-weight: 500;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    padding: 13px 18px;
    font-size: 14px;

    margin-top: 18px;
  }

  > button {
    margin-top: 18px;

    padding: 13px 18px;
    font-size: 16px;
    background: var(--color-blue);
    color: var(--color-tertiary);
    border: none;

    cursor: pointer;

    &:hover {
      opacity: 0.87;
    }
  }

  > .terms {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 4px;
  }
`;

