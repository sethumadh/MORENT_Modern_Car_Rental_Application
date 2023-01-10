import { createGlobalStyle} from 'styled-components';

export const DatePickerWrapperStyles = createGlobalStyle`
  .react-datepicker-wrapper {
    width: 14px !important;
    height: 24px !important;
  }

  .react-datepicker-popper {
    z-index: 30 !important;
  }
`;