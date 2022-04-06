import React from "react";
import { Button } from "react-bootstrap";
import { reduxForm } from "redux-form";
import {
  CreateField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
const ProfileDataForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>Полное имя:</b>
        {CreateField("Полное имя", "fullName", [], Input)}
      </div>
      <div>
        <b>Поиск работы:</b>
        {CreateField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>Обо мне:</b>
        {CreateField("Обо мне", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Профессиональные умения:</b>
        {CreateField(
          "Профессиональные умения",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        {/* <b>Контакты</b>:
      {Object.keys(profile.contacts).map((key) => {
        return (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        );
      })} */}
      </div>
    </form>
  );
};
const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormRedux;
