import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, YOPTA", likesCount: 191 },
        { id: 2, message: "It's me Ayaya", likesCount: 999999 },
      ],
      newPostText: "wake up, samurai!",
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "HIIIIIIII" },
        { id: 2, message: "How is your primogemes?" },
        { id: 3, message: "HI YOPTA!" },
        { id: 4, message: "Хочу жрать" },
        { id: 5, message: "и я Хочу жрать" },
      ],
      dialogs: [
        { id: 1, name: "Ayayayayayaya" },
        { id: 2, name: "Kekich" },
        { id: 3, name: "Lol" },
        { id: 4, name: "Azaza" },
        { id: 5, name: "Ayayaka" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //паттерн Наблюдатель
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
