interface UserResponse {
  username: string;
  image: string;
}
function setLocalStorage(user: UserResponse) {
  localStorage.setItem("username", user.username);
  localStorage.setItem("image", user.image);
}

function isLogin() {
  return localStorage.getItem("username") !== null ? true : false;
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("image");
}

export default { setLocalStorage, isLogin, logout };
