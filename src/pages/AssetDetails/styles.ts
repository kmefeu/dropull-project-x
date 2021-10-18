import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  padding-bottom: 85px;
  color: var(--alt_background);
`;
interface BannerImageProps {
  url: string | undefined;
}

export const BannerImage = styled.div<BannerImageProps>`
  font-size: 12px;
  width: 100%;
  height: 220px;
  object-fit: cover;
  margin-bottom: -90px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  ${({ url }) => {
    if (url) return `background-image: url(${url});`;
    return `background: linear-gradient(
      124deg,
      #ff2400,
      #e81d1d,
      #e8b71d,
      #e3e81d,
      #1de840,
      #1ddde8,
      #2b1de8,
      #dd00f3,
      #dd00f3
    );`;
  }}
`;

export const AssetContainer = styled.div`
  display: flex;
  z-index: 10;
  margin: auto;
  width: 80%;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--white);
  border: var(--dark_neutral) solid 1px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 55%;
  object-fit: cover;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const InformationContainer = styled.div`
  width: 45%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 5px;
  }
`;

export const NameRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-weight: bolder;
  font-size: 28px;
  margin-bottom: 5px;
`;

export const Id = styled.span`
  font-size: 18px;
  margin-bottom: 25px;
`;
export const Label = styled.span`
  margin: 25px 0 5px;
  font-size: 22px;
  width: 90%;
  font-weight: bold;
  border-bottom: var(--dark_neutral) solid 1px;
`;

export const OwnerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const OwnerName = styled.span`
  margin-left: 5px;
`;

export const OwnerImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CollectionRow = styled.div``;

export const Collection = styled.span`
  margin-bottom: 25px;
`;

export const Description = styled.span`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.5px;
`;

export const ContractName = styled.span`
  margin-bottom: 15px;
`;

export const Creator = styled.span`
  margin-bottom: 5px;
`;

export const Price = styled.span``;

export const Date = styled.span``;
