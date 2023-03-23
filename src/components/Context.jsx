import React from "react";
import { useReducer, useEffect } from "react";
import reducer from "./Reducer";
const initialState = {
  isLoading: true,
  query: "css",
  nbPages: 0,
  page: 0,
  hits: []
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let url = "https://hn.algolia.com/api/v1/search?";
  const fetchAPI = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStorie = (id) => {
    dispatch({ type: "RemoveStories", payload: id });
  };

  const searchStorie = (reqQuery) => {
    dispatch({
      type: "SEARCHSTORIES",
      payload: reqQuery
    });
  };

  const getNextPage = () => {
    dispatch({
      type: "NEXT"
    });
  };
  const getPrevPage = () => {
    dispatch({
      type: "PREV"
    });
  };
  useEffect(() => {
    fetchAPI(`${url}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeStorie,
        getNextPage,
        getPrevPage,
        searchStorie
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
