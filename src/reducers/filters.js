// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "",
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SET_SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SET_SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.StartDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.EndDate };
    default:
      return state;
  }
};
