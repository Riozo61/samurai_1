import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { Button } from "react-bootstrap";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    debugger;
    console.log(formData);
    // saveProfile(formData);
    // setEditMode(false);
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm initialValues={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <Button onClick={goToEditMode}>Edit</Button>
        </div>
      )}
      <div>
        <b>Полное имя:</b>
        {profile.fullName}
      </div>
      <div>
        <b>Обо мне:</b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Поиск работы:</b>
        {profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
      </div>

      {profile.lookingForAJob && (
        <div>
          <b>Профессиональные умения:</b>
          {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>Контакты</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  );
};

export default ProfileInfo;
