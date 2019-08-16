import React from "react"
import { connect } from "react-redux"
import { buyThing } from "../actions"
import "./ProductsToBuy.css"
const ProductsToBuy = (props) => {
    return <>
        <button className="buy" onClick={() => props.buyThing(2)}>Bread 2$</button>
        <button className="buy" onClick={() => props.buyThing(3)}>Fish 3$</button>
        <button className="buy" onClick={() => props.buyThing(1)}>Banana 1$</button>
        <button className="buy" onClick={() => props.buyThing(10)}>Orange 10$</button>
        <button className="buy" onClick={() => props.buyThing(2)}>Cola 2$</button>
        <button className="buy" onClick={() => props.buyThing(1)}>Water 1$</button>

    </>
}


export default connect(null, { buyThing: buyThing })(ProductsToBuy);