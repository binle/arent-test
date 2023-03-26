import { message } from 'antd';
import { JWT_AUTHENTICATION, TestAccount } from '../../constants';
import { IUserData, LoginResponseBodyDto } from '../../definitions';
import { axiosClient } from './_axios-client';

export const asyncGetCurrentUserInformation = async (): Promise<IUserData | undefined> => {
  const jwt = localStorage.getItem(JWT_AUTHENTICATION);
  if (jwt === TestAccount) {
    return {
      accountInfo: { id: TestAccount, username: TestAccount },
      notifications: [],
    };
  }
  try {
    return (await axiosClient.get('/api/user/info')).data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    message.open({ type: 'error', content: error.message });
  }
};

export const asyncLogin = async (username: string, password: string): Promise<LoginResponseBodyDto> => {
  let result;
  if (username === TestAccount) {
    result = { jwt: TestAccount };
  } else {
    result = (await axiosClient.post<LoginResponseBodyDto>('/api/login', { username, password })).data;
  }
  localStorage.setItem(JWT_AUTHENTICATION, result.jwt);
  return result;
};

export const asyncLogout = async (): Promise<void> => {
  const jwt = localStorage.getItem(JWT_AUTHENTICATION);
  if (jwt !== TestAccount) {
    await axiosClient.post<LoginResponseBodyDto>('/api/logout');
  }
  localStorage.removeItem(JWT_AUTHENTICATION);
};
