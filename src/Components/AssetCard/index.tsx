import { Assets } from "interface/assets";
import React from "react";
import formatPrice from "utils/formatPrice";
import {
  Collection,
  Image,
  Name,
  Card,
  InformationContainer,
  Price,
  Date,
  Row,
  CoinImage,
} from "./styles";
import loadingImage from "assets/loading.gif";
import eth from "assets/eth.svg";
interface AssetCardProps {
  asset: Assets;
}

const AssetCard: React.FC<AssetCardProps> = (
  { asset }: AssetCardProps,
  index
) => {
  return asset?.image_preview_url && asset?.name ? (
    <Card
      key={index}
      to={`/asset/${asset?.asset_contract.address}/${asset?.token_id}`}
    >
      <Image
        src={asset?.image_preview_url || loadingImage}
        alt={asset?.description}
      />
      <InformationContainer>
        <Name>{asset?.name}</Name>
        <Collection>{asset?.collection?.name}</Collection>
        <Row>
          <Date>{asset?.last_sale?.event_timestamp}</Date>
          <Price>
            <CoinImage src={eth} />
            {formatPrice(asset?.last_sale?.total_price)}
          </Price>
        </Row>
      </InformationContainer>
    </Card>
  ) : (
    <></>
  );
};

export default AssetCard;
