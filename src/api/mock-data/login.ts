import { AxiosRequestConfig } from 'axios';
import { LoginPostResponse, LoginPostErrResponse } from '../types';
import { user1, user2 } from './common-data/users';

export const postLogin = (config: AxiosRequestConfig) => {
  const { method, url, data: requestJson } = config;
  const req = JSON.parse(requestJson);

  const data1: LoginPostResponse = {
    user: user1,
  };

  const data2: LoginPostResponse = {
    user: user2,
  };

  const data3: LoginPostErrResponse = {
    error: { code: 0, message: 'IDまたはPasswordに誤りがあります。'}
  };

  const data = req.id === 'a' ? data1 : req.id === 'b' ? data2 : data3;
  console.log(method, url, req, data);
  return [200, data]
};

export const deleteLogin = (config: AxiosRequestConfig) => {
  const { method, url } = config;
  const data = {}
  console.log(method, url, data);
  return [200, data]
};