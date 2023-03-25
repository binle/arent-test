import { message } from 'antd';
import { TestAccount } from '../../../constants';
import { asyncLogin, processLoading } from '../../../processes';

const AuthPage = () => {
  const onLogin = async () => {
    processLoading(asyncLogin(TestAccount, TestAccount))
      .then(() => {
        window.location.href = '/';
      })
      .catch((error) => {
        message.open({
          type: 'error',
          content: error.response.data.error || error.message,
        });
      });
  };
  return (
    <div className="auth-page">
      <button onClick={onLogin} className="btn-primary">
        Press to login / ログイン
      </button>
    </div>
  );
};

export default AuthPage;
