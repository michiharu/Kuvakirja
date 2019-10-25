import axiosbase from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as env from '../settings/env.json';
import * as API from './types';
import { postLogin, deleteLogin } from './mock-data/login';

export const baseURL = 'http://localhost:55616';

const mockAdapter = () => {
  const mock = new MockAdapter(axiosbase, { delayResponse: 1000 });
  // login
  mock.onPost(API.loginURL).reply(postLogin);
  mock.onDelete(API.loginURL).reply(deleteLogin);

  return axiosbase;
};

const axios = env.useMock ? mockAdapter() : axiosbase.create({
    baseURL,
    headers: {'Content-Type': 'application/json'},
  });

export default axios;