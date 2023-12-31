import React,{useRef,useState} from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
  const amountInputRef=useRef();
  const [amountisValid,setmountisvalid]=useState(true);
  const submitHandler=(e)=>{
    e.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber= +enteredAmount;
    if(enteredAmount.trim().length===0 | enteredAmountNumber<1 || enteredAmountNumber>5)
    {
      setmountisvalid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);

  }
  return (
   <form className={classes.form} onSubmit={submitHandler}>
    <Input
         ref={amountInputRef} 
        label="Amount" 
        input={{
        id:'amount_'+props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/>
    <button>+ Add</button>
    {!amountisValid && <p>Please Enter a valid Amount 1-5</p>}
   </form>
  )
}

export default MealItemForm
