export const CUSTOMER_USE_SELECTION = "CUSTOMER_USE_SELECTION"

export const setUserSelection = (selectedItems) => ({
    type: CUSTOMER_USE_SELECTION,
    payload: selectedItems
})