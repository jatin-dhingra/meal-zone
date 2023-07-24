import React from 'react'
import img from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>Food-Zone</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>

        </header>
        <div className={classes['main-image']}>
            <img src={img} alt="food image"/>
        </div>
    </React.Fragment>
  )
}

export default Header
