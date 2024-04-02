import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({avatar, name, isOnline}) => {
return(
    <div>
  <img className={clsx(css.avatar)} src={avatar} alt={name} width="48" />
  <p className={clsx(css.name)}>{name}</p>
  <p className={clsx(css.status, {
    [css.isOnline]: isOnline,
   [ css.isOffline]: !isOnline
  })}>{isOnline?"Online":"Offline"}</p>
</div>
)
}

export default FriendListItem;