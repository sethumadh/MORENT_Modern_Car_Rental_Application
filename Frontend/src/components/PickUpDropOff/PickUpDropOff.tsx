import { FC } from "react";

import { PickUpDropContainer, PickUpDropOffWrapper } from "./styles";
import { PickUp, LocationSwitcher, DropOff } from '../';

const PickUpDropOff: FC = () => {
  return (
    <PickUpDropOffWrapper>
      <PickUpDropContainer>
        <PickUp />
        <LocationSwitcher />
        <DropOff />
      </PickUpDropContainer>
    </PickUpDropOffWrapper>
  )
}

export default PickUpDropOff;