import React, { useContext } from "react";
import { Assets } from "interface/assets";
import AssetCard from ".";
import { Container } from "./styles";
import InfiniteScrollTrigger from "Components/InfiniteScrollTrigger";
import { MainContext } from "context/MainContext";
const AssetCardList: React.FC = () => {
  const { dataAssets, loading, loadCallsUpdate, endOfList } =
    useContext(MainContext);

  return (
    <>
      <Container>
        {dataAssets?.map((asset: Assets, index) => {
          return <AssetCard asset={asset} key={index} />;
        })}
      </Container>
      <InfiniteScrollTrigger
        loading={loading}
        functionToTrigger={loadCallsUpdate}
        endOfList={endOfList}
      />
    </>
  );
};

export default AssetCardList;
