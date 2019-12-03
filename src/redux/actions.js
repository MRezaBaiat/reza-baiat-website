export const ACTION_SET_DATA = 'ACTION_SET_DATA';
export const ACTION_SET_CONNECTED = 'ACTION_SET_CONNECTED';

export function setData (data: string) {
  return {
    type: ACTION_SET_DATA,
    payload: data
  };
}

export function setDataUsingThunk (newData: string) {
  return (dispatch, getState) => {
    const { data } = getState().global;

    setTimeout(() => {
      dispatch({
        type: ACTION_SET_DATA,
        payload: data + newData
      });
    }, 1000);
  };
}

export function setConnected (connected: boolean) {
  return {
    type: ACTION_SET_CONNECTED,
    payload: connected
  };
}

