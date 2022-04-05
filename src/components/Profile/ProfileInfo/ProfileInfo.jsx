import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          src={profile.photos.large ? profile.photos.large : userPhoto}
          style={{ height: 100 }}
        />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>
          <div>Обо мне:{profile.aboutMe}</div>
          <div>Контакты:</div>
          <ul>
            <li>
              Facebook:
              {profile.contacts.facebook
                ? profile.contacts.facebook
                : "Информация отстутсвует"}
            </li>
            <li>
              Website:
              {profile.contacts.website
                ? profile.contacts.website
                : "Информация отстутсвует"}
            </li>
            <li>
              VK:
              {profile.contacts.vk
                ? profile.contacts.vk
                : "Информация отстутсвует"}
            </li>
            <li>
              Twitter:
              {profile.contacts.twitter
                ? profile.contacts.twitter
                : "Информация отстутсвует"}
            </li>
            <li>
              Instagram:
              {profile.contacts.instagram
                ? profile.contacts.instagram
                : "Информация отстутсвует"}
            </li>
            <li>
              Youtube:
              {profile.contacts.youtube
                ? profile.contacts.youtube
                : "Информация отстутсвует"}
            </li>
            <li>
              github:
              {profile.contacts.github
                ? profile.contacts.github
                : "Информация отстутсвует"}
            </li>
            <li>
              mainLink:
              {profile.contacts.mainLink
                ? profile.contacts.mainLink
                : "Информация отстутсвует"}
            </li>
          </ul>
        </div>
        <div>
          <div>
            Поиск работы:
            {profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
          </div>
          <div>Описание по жизни:{profile.lookingForAJobDescription}</div>
          <div>Полное имя:{profile.fullName}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
