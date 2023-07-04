import React from 'react'
import styles from './Profile.module.css'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import Card from '../UI/Card/Card'

// import profileImg from '.././assets/profile1.png'
const Profile = (props) => {
  return ( 
    <Card>
      <div className={styles.profile}>
      <img src={props.image}  alt='profile pic' />
      <div className={styles["profile-content"]}>
      <h3><b>My profile</b></h3>

      <div className={styles.text}>
        <p>Name:</p> 
        <p>{props.name}</p>
      </div>

      <div className={styles.text}>
        <p>Job:</p> 
        <p> {props.job}</p>
      </div>

      <div className={styles.text}>
        <p>Company:</p> 
        <p> {props.company}</p>
      </div>

      <IconContext.Provider value={{ color: "#666", size: "20px" }}>
            <div className={styles.icons}>
            <a href="https://twitter.com">
              <AiOutlineTwitter />
            </a>
            <a href="https://github.com">
              <AiOutlineGithub />
            </a>
            <a href="https://plus.google.com">
              <AiOutlineGooglePlus />
            </a>
            </div>
      </IconContext.Provider>

      <div className={styles.btn}>
        <a href={props.link}>View Profile</a>
      </div>

      </div>
      </div>
    </Card>
    
  )
}

Profile.defaultProps = {
  image: 'https://gratisography.com/wp-content/uploads/2023/06/gratisography-chill-chinchilla-free-stock-photo-1170x780.jpg',
  name : 'name',
  job : 'job',
  company : 'company'
};

export default Profile;
