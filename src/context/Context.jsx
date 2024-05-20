import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "../reducer/Reducer";
import axios from "axios";

import {
    LOADING,
    SHOW_ITEMS,
    DELETE_ITEM, 
    ADD_ITEM, 
} from "../reducer/actions"


const url = "https://api.openbrewerydb.org/v1/breweries";

const AppContext = createContext();

const initialState = {
    items: [],
    isLoading: true,
};

export const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
  
    // dispatches
    const deleteItem = (id) => dispatch({type: DELETE_ITEM, payload: { id }});
    const addItem = (item) => dispatch({type: ADD_ITEM, payload: { item }});

    const fetchData = async () => {
        dispatch({ type: LOADING })
        try {
            const { data }  = await axios.get(url, {
                headers: {
                    Accept: "application/json"
                }
            });
            dispatch({ type: SHOW_ITEMS, payload: { items: data }})
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <AppContext.Provider value={{
            ...state,
            fetchData,
            deleteItem,
            addItem,
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => useContext(AppContext);