
import { Filter, Input, SearchIconElement, SearchSettings, SearchSettingsContainer } from "./styles";

import { FilterIcon, SearchIcon } from "../../assets/icon";

const SearchBar = ({ showSearchBar, showFilter }: { showSearchBar: boolean, showFilter: boolean }) => {
    return (
        <SearchSettings showSearchBar={showSearchBar}>
            <SearchSettingsContainer>
                <SearchIconElement src={SearchIcon} />
                <Input type="text" placeholder="Search something here" />
            </SearchSettingsContainer>
            <Filter showFilter={showFilter} src={FilterIcon} />
        </SearchSettings>
    )
}

export default SearchBar