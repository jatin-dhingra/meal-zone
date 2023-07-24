import React from 'react'
import  classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext,useEffect ,useState} from 'react'
import CartContext from '../../store/cart-context'
const HeaderCartButton = (props) => {
  const [btnhiglight,setbtnhighlight]=useState(false);
  const cartCtx=useContext(CartContext);
  const {items}=cartCtx;

  const numberofCartItem=cartCtx.items.reduce((currNumber,item)=>{
    return currNumber+item.amount;
  },0)

  const btnClasses=`${classes.button} ${ btnhiglight?classes.bump:''}`

  useEffect(()=>{
    if(cartCtx.items.length===0)
    {
      return;
    }
    setbtnhighlight(true);
    const timer=setTimeout(()=>{
      setbtnhighlight(false);
    },300)

    return ()=>{
      clearTimeout(timer);
    };
    
  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberofCartItem}
        </span>
    </button>
  )
}

export default HeaderCartButton
