import * as actions from './actions';

export interface InitialState {
  data:string,
  connected:boolean
}

const initialState: InitialState = {
  data: 'intial data!',
  connected: false
};

const reducer = (state = initialState, action: { type: any;payload:any }) => {
  switch (action.type) {
    case actions.ACTION_SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case actions.ACTION_SET_CONNECTED:
      return {
        ...state,
        connected: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
