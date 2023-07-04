import React from 'react'
import styles from './ProfileList.module.css'
import { profiles } from '../../profile-data'
import Profile from './Profile'

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles["profile-container"]}>
        {profiles.map((profile, index) => {
          const {img, name, job, company, link} = profile;
          return (<Profile
          key = {index}
          name = {name}
          image = {img}
          job = {job}
          company = {company}
          link = {link} />
          );
        }
        )}
        </div>
      </div>
    </section>
  )
}

export default ProfileList