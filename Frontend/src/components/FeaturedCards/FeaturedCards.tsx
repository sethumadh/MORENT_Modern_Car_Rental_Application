import { FC } from "react";

import { FeaturedCardsWrapper, FeaturedHorizontal, Input, SearchIconElement, SearchSettings, SearchSettingsContainer } from "./styles";

import { SingleFeaturedCard, SingleFeaturedCard2 } from '..';
import SearchBar from "../SearchBar/SearchBar";

const FeaturedCards: FC = () => {
  return (
    <>
      <SearchBar showSearchBar={true} showFilter={true} />
      <FeaturedHorizontal>
        <FeaturedCardsWrapper>
          <SingleFeaturedCard />
          <SingleFeaturedCard2 />
        </FeaturedCardsWrapper>
      </FeaturedHorizontal>
    </>
  )
}

export default FeaturedCards;