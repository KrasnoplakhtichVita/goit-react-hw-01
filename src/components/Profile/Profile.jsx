import clsx from "clsx";
import css from "./Profile.module.css"

const Profile = ({name,tag,location,image,stats:{followers,views,likes}}) => (
<div className={css.profile}>
	  <div className={clsx(css.description)}>
	    <img className={clsx(css.icon)}
	      src={image}
	      alt="User avatar"
	    />
	    <p className={clsx(css.name)}>{name}</p>
	    <p className={clsx(css.tag)}>@{tag}</p>
	    <p className={clsx(css.location)}>{location}</p>
	  </div>
	
	  <ul className={clsx(css.stats)}>
	    <li className={clsx(css.item)}>
	      <span>Followers<br/></span>
	      <span className={clsx(css.number)}>{followers}</span>
	    </li>
	    <li className={clsx(css.item)}>
	      <span>Views<br/></span>
	      <span className={clsx(css.number)}>{views}</span>
	    </li>
	    <li className={clsx(css.item)}>
	      <span>Likes<br/></span>
	      <span className={clsx(css.number)}>{likes}</span>
	    </li>
	  </ul>
</div>
	
);

export default Profile;