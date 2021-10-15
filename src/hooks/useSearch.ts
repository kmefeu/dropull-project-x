import React, { useCallback, useEffect, useState } from "react";
import getData from "api/getData";
import { Assets } from "interface/assets";

const UseSearch = () => {
  const [loading, setLoading] = useState(false);
  const [dataAssets, setDataAssets] = useState<Assets[]>([]);
  const [owner, setOwner] = useState("");
  const [offset, setOffset] = useState(20);
  const [offsetBase, setOffsetBase] = useState(0);
  const [endOfList, setEndOfList] = useState(false);

  const loadCallsUpdate = useCallback(() => {
    if (loading || endOfList) return;

    setLoading(true);
    let urlWithOwner = `https://api.opensea.io/api/v1/assets?owner=${owner}&order_direction=desc&offset=${offsetBase}&limit=${offset}`;
    let noOwnerUrl = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offsetBase}&limit=${offset}`;

    const request = async () => {
      owner.length > 0
        ? await getData(urlWithOwner).then(({ assets }) => {
            setDataAssets((s) => [...s, ...assets]);
            assets.length < 20 && setEndOfList(() => true);
          })
        : await getData(noOwnerUrl).then(({ assets }) => {
            setDataAssets((s) => [...s, ...assets]);
            assets.length < 20 && setEndOfList(() => true);
          });
      setOffsetBase((s) => s + offset);
      setLoading(false);
    };

    request();
  }, [endOfList, loading, offset, offsetBase, owner]);

  useEffect(() => {
    console.log("loading = " + loading);
  }, [loading]);

  useEffect(() => {
    console.log("offset = " + offset);
  }, [offset]);

  useEffect(() => {
    console.log("offsetBase = " + offsetBase);
  }, [offsetBase]);

  useEffect(() => {
    console.log("endOfList = " + endOfList);
  }, [endOfList]);

  return {
    loading,
    setLoading,
    dataAssets,
    setDataAssets,
    owner,
    setOwner,
    offset,
    setOffset,
    offsetBase,
    setOffsetBase,
    loadCallsUpdate,
    endOfList,
    setEndOfList,
  };
};

export default UseSearch;
