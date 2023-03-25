import { Drawer, message } from 'antd';
import { useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ROUTING } from '../../constants';
import { asyncLogout, processLoading } from '../../processes';
import { ApplicationContext } from './../../data';
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons';

import challengeIcon from './../../styles/images/icons/challenge-icon.png';
import closeIcon from './../../styles/images/icons/close-icon.png';
import menuIcon from './../../styles/images/icons/menu-icon.png';
import myRecordIcon from './../../styles/images/icons/my-record-icon.png';
import noticeIcon from './../../styles/images/icons/notice-icon.png';
import logo from './../../styles/images/logo.png';

const LayoutComponent = () => {
  const { contextData } = useContext(ApplicationContext);
  const accountInfo = contextData.userData?.accountInfo;
  const notifications = contextData.userData?.notifications || [];

  const [menuState, setMenuState] = useState(false);

  const onLogout = () => {
    setMenuState(false);
    processLoading(asyncLogout())
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
    <div className="application">
      <div className="application-header">
        <div className="header-content">
          <NavLink to={ROUTING.home}>
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="header-content-right">
            {accountInfo?.id && (
              <NavLink to={ROUTING.myRecord} className="menu-icon">
                <img src={myRecordIcon} alt="my record" />
                <span>自分の記録</span>
              </NavLink>
            )}
            <NavLink to={ROUTING.challenge} className="menu-icon">
              <img src={challengeIcon} alt="challenge" />
              <span>チャレンジ</span>
            </NavLink>
            {accountInfo?.id && (
              <NavLink to={ROUTING.myNotification} className="menu-icon notice">
                <img src={noticeIcon} alt="notice" />
                <span>お知らせ</span>
                <span className="badge-count">
                  <span>{notifications.length}</span>
                </span>
              </NavLink>
            )}
            <div className="menu" onClick={() => setMenuState(true)}>
              <img src={menuIcon} alt="menu" />
            </div>
            <Drawer
              className="app-menu-drawer"
              title={null}
              placement="right"
              closeIcon={null}
              closable={false}
              width={280}
              onClose={() => setMenuState(false)}
              open={menuState}
            >
              <div className="app-menu-drawer-content">
                <div className="close-menu" onClick={() => setMenuState(false)}>
                  <img src={closeIcon} alt="close" />
                </div>
                {accountInfo?.id && (
                  <NavLink onClick={() => setMenuState(false)} to={ROUTING.myRecord}>
                    <span>自分の記録</span>
                  </NavLink>
                )}
                <NavLink onClick={() => setMenuState(false)} to={ROUTING.weightChart}>
                  <span>体重グラフ</span>
                </NavLink>
                <NavLink onClick={() => setMenuState(false)} to={ROUTING.theGoal}>
                  <span>目標</span>
                </NavLink>
                <NavLink onClick={() => setMenuState(false)} to={ROUTING.selectedCourse}>
                  <span>選択中のコース</span>
                </NavLink>
                <NavLink onClick={() => setMenuState(false)} to={ROUTING.column}>
                  <span>コラム一覧</span>
                </NavLink>
                {accountInfo?.id && (
                  <NavLink onClick={() => setMenuState(false)} to={ROUTING.mySetting}>
                    <span>設定</span>
                  </NavLink>
                )}

                {accountInfo?.id && (
                  <div className="auth" onClick={onLogout}>
                    <span>ログアウト</span>
                    <LogoutOutlined />
                  </div>
                )}
                {!accountInfo?.id && (
                  <NavLink className="auth" onClick={() => setMenuState(false)} to={ROUTING.auth}>
                    <span>ログイン</span>
                    <LoginOutlined />
                  </NavLink>
                )}
              </div>
            </Drawer>
          </div>
        </div>
      </div>
      <div className="application-content">
        <Outlet />
      </div>

      <div className="application-footer">
        <div className="footer-content">
          <NavLink to="/">会員登録</NavLink>
          <NavLink to="/">運営会社</NavLink>
          <NavLink to="/">利用規約</NavLink>
          <NavLink to="/">特定商取引法に基づく表記</NavLink>
          <NavLink to="/">お問い合わせ</NavLink>
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
