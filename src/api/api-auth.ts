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

    // TODO: response에서 필요한 정보 뽑아내기 (data에서 보내준다고함)
    // 리팩토링 용이하게 수정하기
    // 로그인 된 유무 어떻게 구별? signin도 로그인 되었을 때, 로그아웃 되었을 때 분기 잘 치기
    // signin 리팩토링
    // 행동 정리 정돈하기
    // 에러 객체 타입?
    // api 함수 어떻게 폼 잡아놓을지 생각

    console.log('response 확인용 콘솔', response);
    if (status === 200) {
      saveItem('token', authorization);
    }
    return status;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
