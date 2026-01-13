import React, { useReducer, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

export const DispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'set': {
      return { ...state, ...action.payload, completed_screens: Array.from(new Set(action.payload.completed_screens)) };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const Provider = ({ client, children }) => {
  const [state, dispatch] = useReducer(reducer, { client, loading: true });

  useEffect(() => {
    const load = async () => {
      try {
        const response = await client.get('/account/');
        dispatch({
          type: 'set',
          payload: {
            ...response.data.data,
            completed_screens: [],
            loading: false
          }
        });
      } catch (err) {
        dispatch({
          type: 'set',
          payload: { user: {}, completed_screens: [], loading: false }
        });
      }
    };
    if (window.sessionStorage.getItem('access')) {
      load();
      return;
    }
    dispatch({
      type: 'set',
      payload: { user: {}, completed_screens: [], loading: false }
    });
  }, [client]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

Provider.propTypes = {
  client: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

Provider.defaultProps = {};
