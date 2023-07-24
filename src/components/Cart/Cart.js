import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = (props) => {

    const cartCtx=useContext(CartContext);
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
    const hasItem=cartCtx.items.length>0;
    const CartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    }
    const CartItemAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1})
    }
    const cartItems=<ul className={classes['cart-items']}>{cartCtx.items.map((item)=><CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={CartItemRemoveHandler.bind(null,item.id)} onAdd={CartItemAddHandler.bind(null,item)}/> )}</ul>
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span className={classes.total}>
                Total Amount
            </span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            {hasItem && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart
