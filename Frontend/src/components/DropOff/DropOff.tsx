import { FC } from "react";

import DownArrow from "../../assets/icons/DownArrow";
import { DropDown, Calender } from '../';
import { CITIES, TIME } from "../../utils/constants";
import { DropOffHeaderContainer, DropOffHeader, DropOffLabel, DropOffDiv, DropOffDiv2, DropOffItem, DropOffTitle, DropOffWrapper, SelectCity, SelectDiv } from "./styles";
import { useDropDownContext } from "../../contexts/DropDownContext";
import { usePickUpDropOffContext } from "../../contexts/PickUpDropOffContext";

const DropOff: FC = () => {
  const { handleOpenMenu2, openMenu2, openMenu4, handleOpenMenu4 } = useDropDownContext();
  const { locationTwoChange, state, timeTwoChange, dateTwoChange } = usePickUpDropOffContext();

  return (
    <DropOffWrapper>
      <DropOffHeaderContainer>
        <DropOffHeader type="radio" checked />
        <DropOffLabel>Drop-Off</DropOffLabel>
      </DropOffHeaderContainer>
      <DropOffItem>
        <DropOffDiv>
          <DropOffTitle><h4>To</h4></DropOffTitle>
          <SelectDiv>
            <SelectCity><h5>{state.location2.length > 0 ? state.location2: 'Select City'}</h5></SelectCity>
            <DownArrow handleClick={handleOpenMenu2}/>
          </SelectDiv>
        </DropOffDiv>
        <DropOffDiv2>
          <DropOffTitle><h4>Date</h4></DropOffTitle>
          <SelectDiv>
            <SelectCity><h5>{state.date2.length > 0 ? state.date2 : 'Select Your Date'}</h5></SelectCity>
            <Calender dateChange={dateTwoChange}/>
          </SelectDiv>
        </DropOffDiv2>
        <DropOffDiv>
          <DropOffTitle><h4>Time</h4></DropOffTitle>
          <SelectDiv>
            <SelectCity><h5>{state.time2.length > 0 ? state.time2: 'Select your time'}</h5></SelectCity>
            <DownArrow handleClick={handleOpenMenu4}/>
          </SelectDiv>
          <DropDown dropDownItems={TIME} openMenu={openMenu4} dispatchClickFunction={timeTwoChange} handleDropDownClose={handleOpenMenu4} />
        </DropOffDiv>
      </DropOffItem>
      <DropDown dropDownItems={CITIES} openMenu={openMenu2} dispatchClickFunction={locationTwoChange} handleDropDownClose={handleOpenMenu2}/>
    </DropOffWrapper>
  )
}

export default DropOff;