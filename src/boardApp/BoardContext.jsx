import { createContext, useReducer, useContext } from "react";

const BoardContext = createContext();

const initialState = {
  posts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map(p =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case "DELETE_POST":
      return { ...state, posts: state.posts.filter(p => p.id !== action.payload) };
    default:
      return state;
  }
}

export function BoardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => useContext(BoardContext);
