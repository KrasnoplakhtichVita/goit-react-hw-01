import clsx from "clsx";
import css from "./TransactionHistoryItem.module.css"

const TransactionHistoryItem = (({type,amount,currency}) => {
return( 
<tr className={clsx(css.item)}>
    <td className={clsx(css.slot)}>{type}</td>
    <td className={clsx(css.slot)}>{amount}</td>
    <td className={clsx(css.slot)}>{currency}</td>
  </tr>)
})

export default TransactionHistoryItem;