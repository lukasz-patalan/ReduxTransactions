import React from "react"
import { connect } from "react-redux"
import { sellThing } from "../actions"
import "./ProductsToSell.css"
const ProductsToSell = (props) => {
    return <>
        <button className="sell" onClick={() => props.sellThing(2)}>book 2$</button>
        <button className="sell" onClick={() => props.sellThing(100)}>phone 100$</button>
        <button className="sell" onClick={() => props.sellThing(2)}>newspaper 2$</button>
        <button className="sell" onClick={() => props.sellThing(12)}>wine 12$</button>
        <button className="sell" onClick={() => props.sellThing(1.5)}>Pepsi 1.5$</button>
        <button className="sell" onClick={() => props.sellThing(0.5)}>Apple 0.5$</button>

    </>
}


export default connect(null, { sellThing: sellThing })(ProductsToSell);