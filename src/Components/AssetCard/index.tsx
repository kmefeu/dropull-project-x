import { Assets } from "interface/assets";
import React from "react";
import { formatDate } from "utils/formatDate";
import {
  Collection,
  Image,
  Name,
  Card,
  InformationContainer,
  Price,
  Date,
  Row,
} from "./styles";

interface AssetCardProps {
  asset: Assets;
}

const AssetCard: React.FC<AssetCardProps> = (
  { asset }: AssetCardProps,
  index
) => {
  const price = () => {
    if (asset.last_sale.total_price) {
      return `${+asset.last_sale?.total_price / 1000000000000000000}`;
    }
    return "New Asset";
  };

  return asset?.image_preview_url && asset?.name ? (
    <Card key={index}>
      <Image src={asset?.image_preview_url} alt={asset?.description} />
      <InformationContainer>
        <Name>{asset?.name}</Name>
        <Name>{asset?.id}</Name>
        <Collection>{asset?.collection?.name}</Collection>
        <Row>
          <Date>{asset?.last_sale?.event_timestamp}</Date>
          <Price>{price}</Price>
        </Row>
      </InformationContainer>
    </Card>
  ) : (
    <></>
  );
};

export default AssetCard;
