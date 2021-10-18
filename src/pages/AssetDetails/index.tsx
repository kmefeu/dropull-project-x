import React, { useContext, useEffect, useState } from "react";
import getData from "api/getData";
import { MainContext } from "context/MainContext";
import { Assets } from "interface/assets";
import { useParams } from "react-router";
import formatPrice from "utils/formatPrice";
import {
  Collection,
  Container,
  Date,
  Image,
  InformationContainer,
  Name,
  Price,
  Creator,
  Description,
  ContractName,
  Id,
  OwnerImage,
  OwnerName,
  AssetContainer,
  BannerImage,
  NameRow,
  OwnerRow,
  Label,
  CollectionRow,
} from "./styles";
import loadingImage from "assets/loading.gif";
import GoBack from "assets/goBack.svg";
import NavigationButton from "Components/NavigationButton";

const AssetDetails: React.FC = () => {
  const { dataAssets } = useContext(MainContext);
  const { assetContractAddress, tokenId } = useParams<any>();
  const [currentAsset, setCurrentAsset] = useState<Assets>();

  useEffect(() => {
    const requestData = async () => {
      const url = `https://api.opensea.io/api/v1/asset/${assetContractAddress}/${tokenId}/`;
      await getData(url).then((assets) => {
        setCurrentAsset(assets);
      });
    };
    requestData();
  }, [dataAssets, assetContractAddress, tokenId]);

  return (
    <Container>
      <NavigationButton goTo={"/"} iconSrc={GoBack} alt="Go to homepage" />
      <BannerImage url={currentAsset?.collection.banner_image_url} />

      <AssetContainer>
        <Image
          src={currentAsset?.image_url || loadingImage}
          alt={currentAsset?.description}
        />
        <InformationContainer>
          <NameRow>
            <Name>{currentAsset?.name}</Name>
            <Id>{currentAsset?.id}</Id>
          </NameRow>
          {currentAsset?.owner?.user?.username !== "NullAddress" && (
            <>
              <Label>Owner</Label>
              <OwnerRow>
                <OwnerImage
                  src={currentAsset?.owner?.profile_img_url || loadingImage}
                  alt={currentAsset?.owner?.user?.username || ""}
                />
                <OwnerName>{currentAsset?.owner?.user?.username}</OwnerName>
              </OwnerRow>
            </>
          )}
          {currentAsset?.collection && (
            <>
              <Label>Collection</Label>
              <CollectionRow>
                <Collection>{currentAsset?.collection?.name}</Collection>
              </CollectionRow>
            </>
          )}

          <Label>Sale</Label>
          <div>
            <Date>{currentAsset?.last_sale?.event_timestamp}</Date>
            <Price>{formatPrice(currentAsset?.last_sale?.total_price)}</Price>
          </div>

          {currentAsset?.asset_contract && (
            <>
              <Label>Contract</Label>
              <div>
                <ContractName>
                  {currentAsset?.asset_contract?.name}
                </ContractName>
              </div>
            </>
          )}
          {currentAsset?.creator && (
            <>
              <Label>Creator</Label>
              <div>
                <Creator>{currentAsset?.creator?.user?.username}</Creator>
              </div>
            </>
          )}
          {currentAsset?.description && (
            <>
              <Label>Description</Label>
              <Description>{currentAsset?.description}</Description>
            </>
          )}
        </InformationContainer>
      </AssetContainer>
    </Container>
  );
};

export default AssetDetails;
