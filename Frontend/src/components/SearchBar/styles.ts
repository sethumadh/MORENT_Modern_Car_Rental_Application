import styled from "styled-components";

export const SearchIconElement = styled.img` 
  width: 24px; 
  height:24px;
  position: absolute;
  left: 1rem;
  bottom: 12px;
  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {

  }
`;

interface SearchVisibility {
    showSearchBar: boolean;
}

interface FilterVisibility {
    showFilter: boolean;
}

export const SearchSettings = styled("div")<SearchVisibility>`
    display: ${props => props.showSearchBar ? 'none' : 'flex'};

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: ${props => props.showSearchBar ? 'flex' : 'none'};
    max-height: 64px;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const Filter = styled("img")<FilterVisibility>`
    display: ${props => props.showFilter ? 'none' : 'flex'};

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: ${props => props.showFilter ? 'flex' : 'none'};
  }
`;

export const Filter2 = styled.img`
    display: none;

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: flex;
  }
`;

export const SearchSettings2 = styled.div`
    display: none;

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: flex;
    max-height: 64px;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const Filter3 = styled.img`
    display: none;

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: none;
  }
`;

export const SearchSettings3 = styled.div`
  display: flex;

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: none;
    max-height: 64px;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SearchSettingsContainer = styled.div`
  position: relative;
  display: flex;
  flex: 0.25;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid rgba(195, 212, 233, 0.4);
  border-radius: 10px;
  display: flex;
  min-width: 270px;
  padding-left: 3rem;
  ::placeholder {
    color: #3d5278;
  }
`;
