import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: var(--dirt-white);
  padding: 0 5%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: var(--alt_background);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled(Link)`
  overflow: hidden;
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: var(--dark_neutral) solid 1px;
  color: var(--alt_background);
  transition: 0.25s;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;

  :hover {
    transform: scale(1.015);
  }
`;

export const InformationContainer = styled.div`
  border-top: var(--dark_neutral) solid 1px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Name = styled.span`
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Collection = styled.span`
  margin-bottom: 15px;
`;

export const Price = styled.div`
  display: flex;
  align-content: center;
`;

export const CoinImage = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 5px;
`;

export const Date = styled.span``;

export const Image = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
`;
