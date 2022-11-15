interface UserResponse {
  username: string;
  image: string;
  token: string;
}
function setLocalStorage(user: UserResponse) {
  localStorage.setItem("username", user.username);
  localStorage.setItem("image", user.image);
  localStorage.setItem("token", user.token);
}

function isLogin() {
  return localStorage.getItem("username") !== null ? true : false;
}

function clearLocalStorage() {
  localStorage.removeItem("username");
  localStorage.removeItem("image");
  localStorage.removeItem("token");
}

export default { setLocalStorage, isLogin, clearLocalStorage };
