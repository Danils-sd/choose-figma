export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export const validLogin = (login) => {
    if(login.length > 5 && login.length < 12) { return true };
    return false;
}

export const validPassword = (password) => {
    if(password.length > 5 && password.length < 12) { return true };
    return false;
}