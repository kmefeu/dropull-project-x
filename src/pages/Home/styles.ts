import styled from "styled-components";

export const Container = styled.div`
  padding-top: 70px;
`;

export const SearchBarContainer = styled.div`
  height: 50px;
  position: fixed;
  width: 600px;
  top: 0;
  left: 5%;
  padding-left: 8px;

  @media screen and (max-width: 1200px) {
    width: 500px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  input {
    font-size: 16px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    color: var(--background);
    border: var(--dark_neutral) solid 1px;
    border-top: none;
    border-radius: 0 0 8px 8px;
    z-index: 10;
  }
`;
