import React from "react";
import s from "./Post.module.css";
import logo from "../../../../assets/images/logo.png";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={logo} />
      {props.message}
      <div>
        <span>likes</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
