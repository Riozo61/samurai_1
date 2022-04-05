const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Когда встретимся?" },
    { id: 4, message: "Позвони мне" },
    { id: 5, message: "Встреча запланирована на завтра в 15:00" },
  ],
  dialogs: [
    { id: 1, name: "Дмитрий" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Светлана" },
    { id: 4, name: "Егор" },
    { id: 5, name: "Максим" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  };
};

export default dialogsReducer;
