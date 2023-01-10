
import { Filter2, Input, SearchIconElement, SearchSettings2, SearchSettingsContainer } from "./styles";

import { FilterIcon, SearchIcon } from "../../assets/icon";

const SearchBarMobile = () => {
    return (
        <SearchSettings2 >
            <SearchSettingsContainer>
                <SearchIconElement src={SearchIcon} />
                <Input type="text" placeholder="Search something here" />
            </SearchSettingsContainer>
            <Filter2 src={FilterIcon} />
        </SearchSettings2>
    )
}

export default SearchBarMobile