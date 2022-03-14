import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  console.log(props.message);

  return (
    <div className={s.item}>
      <img src="https://uploadstatic-sea.mihoyo.com/contentweb/20210715/2021071517142832030.png" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
