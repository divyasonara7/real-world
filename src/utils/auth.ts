function setLocalStorage(user: any) {
  localStorage.setItem("username", user.username);
  localStorage.setItem("image", user.image);
  localStorage.setItem("token", user.token);
  localStorage.setItem("user", JSON.stringify(user));
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
