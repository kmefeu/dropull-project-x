import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f0f0;
  padding: 0 5%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: #191919;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.div`
  overflow: hidden;
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: #bdbdbd solid 1px;
  transition: 0.25s;
  font-size: 12px;
  cursor: pointer;

  :hover {
    transform: scale(1.015);
  }
`;

export const Name = styled.span`
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Description = styled.span`
  color: blue;
`;

export const Collection = styled.span`
  margin-bottom: 15px;
`;

export const Creator = styled.span`
  margin-bottom: 5px;
`;

export const Price = styled.span``;

export const Date = styled.span``;

export const Image = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
`;

export const InformationContainer = styled.div`
  border-top: #bdbdbd solid 1px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
