
import { Filter3, Input, SearchIconElement, SearchSettings3, SearchSettingsContainer } from "./styles";

import { FilterIcon, SearchIcon } from "../../assets/icon";

const SearchBar2 = () => {
    return (
        <SearchSettings3>
            <SearchSettingsContainer>
                <SearchIconElement src={SearchIcon} />
                <Input type="text" placeholder="Search something here" />
            </SearchSettingsContainer>
            <Filter3 src={FilterIcon} />
        </SearchSettings3>
    )
}

export default SearchBar2