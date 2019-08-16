export const buyThing = (price) => {
    return {
        type: "BUY_THING",
        payload: price
    }
}

export const sellThing = (price) => {
    return {
        type: "SELL_THING",
        payload: price
    }
}


export const cancelTransactions = () => {
    return { type: "CANCEL_ALL" }
}