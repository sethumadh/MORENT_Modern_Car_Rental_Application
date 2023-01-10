import { DropDownWrapper, DropDownList, Item } from './styles';
import { Dispatch, VoidFunction } from '../../types';

type DropDownProps = {
  dropDownItems: string[];
  openMenu: boolean;
  dispatchClickFunction?: Dispatch;
  handleDropDownClose: VoidFunction;
};

const DropDown = ({ dropDownItems, openMenu, dispatchClickFunction, handleDropDownClose}: DropDownProps) => {
  const handleClick = (e: Event): void => {
    const target = e.target as HTMLElement;
    dispatchClickFunction(target.innerText);
    handleDropDownClose();
  }

  return (
    <DropDownWrapper open={openMenu}>
      <DropDownList>
        {dropDownItems.map((item, idx) => (
          <Item key={idx} onClick={handleClick}>
            <p>{item}</p>
          </Item>
        ))}
      </DropDownList>
    </DropDownWrapper>
  )
}

export default DropDown