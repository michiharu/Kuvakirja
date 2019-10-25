import * as API from "./types";
import axios from "./axios";

export const login = (auth: API.LoginPostRequest) => axios
  .post<API.LoginPostResponse>(API.loginURL, auth)
  .then(res => res.data)
  .catch(error => ({ error }));

export const logout = () => axios
  .delete(API.loginURL)
  .then(res => res.data)
  .catch(error => ({ error }));
