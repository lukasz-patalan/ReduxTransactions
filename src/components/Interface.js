import React from "react"
import { connect } from "react-redux"
import { cancelTransactions } from "../actions"
import "./Interface.css"

import ProductsToBuy from "./ProductsToBuy"
import ProductsToSell from "./ProductsToSell"
const Interface = (props) => {

    return <>
        <div >
            <h2>Wallet: {props.wallet}$ </h2>
            <button className="cancel" onClick={props.cancelTransactions}>Cancel All Transations</button>
            <h3>Products to buy:</h3>
            < ProductsToBuy />
            <h3>Products to sell:</h3>
            <ProductsToSell />
        </div>
    </>
}
const mapStateToProps = (state) => {
    return { wallet: state.wallet }
}
export default connect(mapStateToProps, { cancelTransactions: cancelTransactions })(Interface);