import React from "react";
import s from "./Post.module.css";
import likePhoto from "../../../../assets/images/like.png";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://www.stemlab.by/stemKidsArt/static/proga1.png"
                alt=""
                className={s.avatar}
            />
            <div>{props.message}</div>
            <div className={s.item}>
                <img 
                        src={likePhoto}
                        alt=""
                        className={s.likePhoto}
                    /> { props.likesCount}
            
                
            </div>
        </div>
    );
};

export default Post;
