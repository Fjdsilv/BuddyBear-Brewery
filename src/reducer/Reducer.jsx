import {
    LOADING,
    SHOW_ITEMS,
    DELETE_ITEM,
    ADD_ITEM,
} from "./actions";

export const reducer = (state, action) => {
    switch(action.type) {
        case LOADING: 
            return { ...state, isLoading: true };
        case SHOW_ITEMS:
            return { ...state, items: action.payload.items, isLoading: false };
        case ADD_ITEM: 
            const newItem = action.payload.item
            return { ...state, items: [ newItem , ...state.items ] };
        case DELETE_ITEM:
            const newItems = state.items.filter(item => item.id !== action.payload.id);
            return { ...state, items: newItems }    
        default:
            return state;
    }
}