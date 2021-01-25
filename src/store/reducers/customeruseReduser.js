import { CUSTOMER_USE_SELECTION } from '../actions/customeruseAction'

const initialstate = {
    selectedItem: {
        genral: [],
        coock: [],
        entertainment: [],
        outsideview: []
    }
}

export const customeruseReduser = (state = initialstate, action) => {
    switch (action.type) {
        case CUSTOMER_USE_SELECTION: {
            return {
                ...state,
                selectedItem: action.payload
            }
        }
        default: { return { ...state } }
    }
}