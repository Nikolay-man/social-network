import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/s1200.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.users}>
            <span className={styles.userIcon}>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.userPhoto}
                            alt=""
                        />
                    </NavLink>
                </div>
                
            </span>
            <span className={styles.userInfo}>
                <span>
                    <div><span className={styles.titleText}>name: </span>{user.name}</div>
                    <div><span className={styles.titleText}>status: </span>{user.status}</div>
                </span>
            </span>
            <span>
                <div className={styles.followed}>
                    {user.followed ? (
                        <button 
                        className={styles.buttonFollowed}
                            disabled={followingInProgress.some((id) => id === user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                            <button 
                            className={styles.buttonFollowed}
                                disabled={followingInProgress.some((id) => id === user.id)}
                                onClick={() => {
                                    follow(user.id);
                                }}
                            >
                                Follow
                            </button>
                        )}
                </div>
            </span>
        </div>
    );
};

export default User;
