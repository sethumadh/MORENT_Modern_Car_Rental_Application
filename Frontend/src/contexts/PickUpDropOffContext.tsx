import { createContext, useContext, useReducer } from "react";

import { ContextProps, Dispatch } from '../types/index';

type ActionTypesTypes = {
  location1: 'LOCATION_ONE';
  location2: 'LOCATION_TWO';
  date1: 'DATE_ONE';
  date2: 'DATE_TWO';
  time1: 'TIME_ONE';
  time2: 'TIME_TWO';
};

const ActionTypes: ActionTypesTypes = {
  location1: 'LOCATION_ONE',
  location2: 'LOCATION_TWO',
  date1: 'DATE_ONE',
  date2: 'DATE_TWO',
  time1: 'TIME_ONE',
  time2: 'TIME_TWO',
}

type StateType = {
  location1: string;
  location2: string;
  date1: string;
  date2: string;
  time1: string;
  time2: string;
};

const initialState: StateType = {
  location1: '',
  location2: '',
  date1: '',
  date2: '',
  time1: '',
  time2: '',
};

type ActionIdx = 'location1' | 'location2' | 'date1' | 'date2' | 'time1' | 'time2';

type Action = {
  type:  ActionTypesTypes[ActionIdx];
  payload: string;
}

type ContextObject = {
  locationOneChange: Dispatch;
  locationTwoChange: Dispatch;
  dateOneChange: Dispatch;
  dateTwoChange: Dispatch;
  timeOneChange: Dispatch;
  timeTwoChange: Dispatch;
  state: StateType;
}

const defaultContextObj = {} as ContextObject;

const Context = createContext(defaultContextObj);

const PickUpDropOffReducer = (state: StateType, action: Action): StateType => {
  switch(action.type) {
    case 'LOCATION_ONE': 
      return { ...state, location1: action.payload };
    case 'LOCATION_TWO': 
      return { ...state, location2: action.payload };
    case 'DATE_ONE': 
      return { ...state, date1: action.payload };
    case 'DATE_TWO': 
      return { ...state, date2: action.payload };
    case 'TIME_ONE': 
      return { ...state, time1: action.payload };
    case 'TIME_TWO': 
      return { ...state, time2: action.payload };
    default: {
      return state;
    }
  }
}

export const PickUpDropOffContext = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(PickUpDropOffReducer, initialState);
  
  const locationOneChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.location1, payload: payload });
  const locationTwoChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.location2, payload: payload });
  const dateOneChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.date1, payload: payload });
  const dateTwoChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.date2, payload: payload });
  const timeOneChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.time1, payload: payload });
  const timeTwoChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.time2, payload: payload });

  const defaultContextObject = {
    locationOneChange,
    locationTwoChange,
    dateOneChange,
    dateTwoChange,
    timeOneChange,
    timeTwoChange,
    state,
  };

  return (
    <Context.Provider value={defaultContextObject}>
      {children}
    </Context.Provider>
  )
}

export const usePickUpDropOffContext = () => useContext(Context);

