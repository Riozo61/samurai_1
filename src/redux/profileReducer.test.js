import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";
let state = {
  posts: [
    { id: 1, message: "Hi, YOPTA", likesCount: 191 },
    { id: 2, message: "It's me Ayaya", likesCount: 999999 },
  ],
};

test("length of posts shoul be incremented", () => {
  //1. test data
  let action = addPostActionCreator("YOOOOOO");
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation

  expect(newState.posts.length).toBe(3);
});
test("message of new post should be correct", () => {
  //1. test data
  let action = addPostActionCreator("YOOOOOO");
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation

  expect(newState.posts[2].message).toBe("YOOOOOO");
});
test("after deleting length of message should be decremented", () => {
  //1. test data
  let action = deletePost(1);
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(1);
});
test("after deleting length shouldn't be decremented if id is incorrect", () => {
  //1. test data
  let action = deletePost(1000);
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(2);
});
