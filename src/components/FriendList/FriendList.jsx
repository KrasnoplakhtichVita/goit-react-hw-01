import FriendListItem from "../FriendListItem/FriendListItem"
import clsx from "clsx";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
    return(
<ul className={clsx(css.friends)}>
	{friends.map((({avatar,name,isOnline,id}) => {return <li key={id} className={clsx(css.friend)}>
		<FriendListItem 
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />
	</li>}))}
</ul>
    )
}

export default FriendList;