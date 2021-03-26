import React from "react";
import { useSelector, connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  //An alternative to usiung matStateToProps is to use useSelector imported from 'react-redux'
  //const itemCount = useSelector((state) => selectCartItemsCount(state));
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

//An alternative to this is using the useSelector hook usedAbove imported from 'react-redux'
const mapStateToProps = (state) => {
  console.log("I am being called");
  return {
    itemCount: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
