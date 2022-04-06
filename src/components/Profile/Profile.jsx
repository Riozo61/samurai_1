import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Container } from "react-bootstrap";

const Profile = (props) => {
  return (
    <Container>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </Container>
  );
};

export default Profile;
