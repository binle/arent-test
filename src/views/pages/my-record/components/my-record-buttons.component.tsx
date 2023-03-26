import { message } from 'antd';

import buttonImage1 from './../../../../styles/images/MyRecommend-1.jpg';
import buttonImage2 from './../../../../styles/images/MyRecommend-2.jpg';
import buttonImage3 from './../../../../styles/images/MyRecommend-3.jpg';

export const MyRecordButtonsComponent = () => {
  const inputComingSoon = () => {
    message.open({ type: 'info', content: '機能はすぐに来ています！' });
  };

  return (
    <div className="moved-button-area">
      <div className="button-item" onClick={inputComingSoon}>
        <img src={buttonImage1} alt="Body Record" />
        <div className="button-item-content">
          <span className="title">BODY RECORD</span>
          <span className="message">自分のカラダの記録</span>
        </div>
      </div>
      <div className="button-item" onClick={inputComingSoon}>
        <img src={buttonImage2} alt="Body Record" />
        <div className="button-item-content">
          <span className="title">MY EXERCISE</span>
          <span className="message">自分の運動の記録</span>
        </div>
      </div>
      <div className="button-item" onClick={inputComingSoon}>
        <img src={buttonImage3} alt="Body Record" />
        <div className="button-item-content">
          <span className="title">MY DIARY</span>
          <span className="message">自分の日記</span>
        </div>
      </div>
    </div>
  );
};
