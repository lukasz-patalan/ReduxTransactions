import { combineReducers } from "redux"

const buyThingReducer = (wallet = 100, action) => {
    if (action.type === "BUY_THING") {
        return wallet - action.payload
    } else if (action.type === "SELL_THING") {
        return wallet + action.payload
    } else if (action.type === "CANCEL_ALL") {
        return wallet = 100
    }
    return wallet
}




export default combineReducers({
    wallet: buyThingReducer
})