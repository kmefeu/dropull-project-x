import React, { useCallback, useContext, useEffect, useState } from "react";
import AssetCardList from "Components/AssetCard/AssetCardList";
import { Container, SearchBarContainer } from "./styles";
import { MainContext } from "context/MainContext";

const Home: React.FC = () => {
  const { setOwner } = useContext(MainContext);
  const [inputValue, setInputValue] = useState("");

  const customSearch = useCallback(
    async (event) => {
      if (event.keyCode !== 13) return;
      setOwner(inputValue);
    },
    [inputValue, setOwner]
  );
  useEffect(() => {
    document.addEventListener("keydown", customSearch, false);
    return () => {
      document.removeEventListener("keydown", customSearch, false);
    };
  }, [customSearch]);

  return (
    <Container>
      <SearchBarContainer>
        <input
          type="text"
          onChange={(input) => setInputValue(input.target.value.toLowerCase())}
          placeholder="search with the owner's address"
        />
      </SearchBarContainer>
      <AssetCardList />
    </Container>
  );
};

export default Home;
