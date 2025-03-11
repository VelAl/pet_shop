export const signUpValidation = (values) => {
  if (!values.name) return ["name", "name must be provided"];
  if (values.name.length < 2)
    return ["name", "name must be at least 2 characters long"];
  if (values.name.includes(" "))
    return ["name", "name must be one word without empty spaces"];
  if (!values.username) return ["username", "username must be provided"];
  if (values.username.length < 2)
    return ["username", "username must be at least 2 characters long"];
  if (values.username.includes(" "))
    return ["username", "username must be one word without empty spaces"];
  if (!values.password) return ["password", "password must be provided"];
  if (values.password.length < 5)
    return ["password", "password must be at least 5 characters long"];
  if (values.password.includes(" "))
    return ["password", "username must be one word without empty spaces"];

  return null;
};
