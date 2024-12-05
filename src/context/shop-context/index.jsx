import { createContext, useReducer } from "react";

const ShopAppContext = createContext({});

const ShopContext = ({ children }) => {
  const initialState = {
    // Ensure valid data from localStorage
    data: (() => {
      try {
        const storedData = JSON.parse(localStorage.getItem("shop"));
        return Array.isArray(storedData) ? storedData : [];
      } catch (e) {
        return [];
      }
    })(),
  };

  const reducer = (state, { type, value, delete_id }) => {
    switch (type) {
      case "add":
        // Ensure state.data is always an array
        const updatedData = [...(state?.data || []), { ...value, count: 1 }];
        console.log(updatedData, "updatedData");

        // Store updated data in localStorage
        localStorage.setItem("shop", JSON.stringify(updatedData));

        // Update the state with new data
        return { ...state, data: updatedData };

      case "delete":
        state.data = state.data.filter(value => value.id !== delete_id)
        localStorage.setItem("shop", JSON.stringify(state.data))
        console.log(delete_id)
        return {...state, data: state.data}

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopAppContext.Provider>
  );
};

export { ShopAppContext, ShopContext };
