import clsx from "clsx";
import css from "./TransactionHistory.module.css"
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"

const TransactionHistory = ({items}) => {
    return (<table className={clsx(css.table)}>
        <thead className={clsx(css.head)}>
          <tr>
            <th className={clsx(css.slot)}>Type</th>
            <th className={clsx(css.slot)}>Amount</th>
            <th className={clsx(css.slot)}>Currency</th>
          </tr>
        </thead>
      
        <tbody>
            {items.map(({id,type,amount,currency})=>{
            return (
            <TransactionHistoryItem 
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            />)})}
        </tbody>
      </table>
      )
}

export default TransactionHistory;