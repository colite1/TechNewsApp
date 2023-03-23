const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages
      };
    case "RemoveStories":
      return {
        ...state,
        hits: state.hits.filter(
          (currEle) => currEle.objectID !== action.payload
        )
      };
    case "SEARCHSTORIES":
      return {
        ...state,
        query: action.payload
      };
    case "NEXT":
      let pageNum1 = state.page + 1;
      if (pageNum1 >= state.nbPages) {
        pageNum1 = 0;
      }
      return {
        ...state,
        page: pageNum1
      };

    case "PREV":
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum
      };
    default:
      return {
        state
      };
  }
  //return state;
};
export default Reducer;
