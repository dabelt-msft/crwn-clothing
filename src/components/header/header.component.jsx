import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

//V1
//state here is the root reducer because mapStateToProps is passed through connect()
//from there we access the user reducer and so forth
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

//v2 - using structured selectors
const mapStateToProps = (state) =>
  //With createStructuredSelector, we don't have to pass state into each of the functions,
  //and don't even have to invoke them.
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

//passing mapStateToProps to connects gets the result of currentUser (currently set to null), and hidden,
// and will pass as those as props to the Header Component to be destructured
export default connect(mapStateToProps)(Header);
