import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg' 

import './header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div> :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
                
                
            </div>
        </div>
    )
}

//state here is the root reducer because mapStateToProps is passed through connect()
//from there we access the user reducer and so forth
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

//passing mapStateToProps to connects gets the result of currentUser (currently set to null) and will pass as props to the Header Component
export default connect(mapStateToProps)(Header);