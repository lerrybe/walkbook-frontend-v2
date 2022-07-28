import axios from 'axios';
import { SigninRequest } from '~/types/auth';
import { saveItem } from '~/utils/storage';

// 성공 시 status(number) 리턴, 실패 시 에러메시지 리턴
export const signIn = async ({ username, password }: SigninRequest) => {
  try {
    const response = await axios.post(
      '/api/v1/user/login',
      { username: username, password: password },
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const {
      headers: { authorization },
      status,
    } = response;

    if (status === 200) saveItem('token', authorization);
    return status;
  } catch (e: any) {
    interface IError {
      response: {
        data: {
          code?: number;
          errors: {
            message?: string;
          };
        };
        status?: number;
      };
    }

    const getErrorMessage = (e: IError) => {
      return e.response.data.errors.message;
    };

    return getErrorMessage(e);
  }
};
