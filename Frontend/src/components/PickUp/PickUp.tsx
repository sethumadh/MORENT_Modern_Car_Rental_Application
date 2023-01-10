import { FC } from "react";
import DownArrow from "../../assets/icons/DownArrow";

import { PickUpHeaderContainer, PickUpHeader, PickUpLabel, PickUpDiv, PickUpDiv2, PickUpItem, PickUpTitle, PickUpWrapper, SelectCity, SelectDiv } from "./styles";
import { DropDown, Calender } from '../';
import { CITIES, TIME } from "../../utils/constants";
import { useDropDownContext } from "../../contexts/DropDownContext";
import { usePickUpDropOffContext } from "../../contexts/PickUpDropOffContext";

const PickUp: FC = () => {
  const { handleOpenMenu, openMenu, handleOpenMenu3, openMenu3 } = useDropDownContext();
  const { locationOneChange, state, timeOneChange, dateOneChange } = usePickUpDropOffContext();

  return (
    <PickUpWrapper>
      <PickUpHeaderContainer>
        <PickUpHeader type="radio" checked />
        <PickUpLabel>Pick-Up</PickUpLabel>
      </PickUpHeaderContainer>
      <PickUpItem>
        <PickUpDiv>
          <PickUpTitle><h4>From</h4></PickUpTitle>
          <SelectDiv>
            <SelectCity><h5>{state.location1.length > 0 ? state.location1: 'Select your city'}</h5></SelectCity>
            <DownArrow handleClick={handleOpenMenu}/>
          </SelectDiv>
        </PickUpDiv>
        <PickUpDiv2>
          <PickUpTitle><h4>Date</h4></PickUpTitle>
          <SelectDiv>
            <SelectCity><h5>{state.date1.length > 0 ? state.date1 : 'Select Your Date'}</h5></SelectCity>
          <Calender dateChange={dateOneChange}/>
          </SelectDiv>
        </PickUpDiv2>
        <PickUpDiv>
          <PickUpTitle><h4>Time</h4></PickUpTitle>
          <SelectDiv>
            <SelectCity><h5>{state.time1.length > 0 ? state.time1: 'Select your time'}</h5></SelectCity>
            <DownArrow handleClick={handleOpenMenu3} />
          </SelectDiv>
            <DropDown dropDownItems={TIME} openMenu={openMenu3} dispatchClickFunction={timeOneChange} handleDropDownClose={handleOpenMenu3} />
        </PickUpDiv>
      </PickUpItem>
      <DropDown dropDownItems={CITIES} openMenu={openMenu} dispatchClickFunction={locationOneChange} handleDropDownClose={handleOpenMenu}/>
    </PickUpWrapper>
  )
}

export default PickUp;