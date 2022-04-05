import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { Container } from "react-bootstrap";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((dialog) => {
    return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />;
  });
  let messagesElements = state.messages.map((message) => {
    return <Message key={message.id} message={message.message} />;
  });

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <Container className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </Container>
  );
};

export default Dialogs;
