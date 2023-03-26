import { message } from 'antd';

export const RecommendComponent = () => {
  const inputComingSoon = () => {
    message.open({ type: 'info', content: '機能はすぐに来ています！' });
  };
  return (
    <div className="recommend">
      <div className="recommend-item" onClick={inputComingSoon}>
        <div className="item-title">RECOMMENDED COLUMN</div>
        <div className="line" />
        <div className="item-message">オススメ</div>
      </div>
      <div className="recommend-item" onClick={inputComingSoon}>
        <div className="item-title">RECOMMENDED DIET</div>
        <div className="line" />
        <div className="item-message">オススメ</div>
      </div>
      <div className="recommend-item" onClick={inputComingSoon}>
        <div className="item-title">RECOMMENDED BEAUTY</div>
        <div className="line" />
        <div className="item-message">オススメ</div>
      </div>
      <div className="recommend-item" onClick={inputComingSoon}>
        <div className="item-title">RECOMMENDED HEALTH</div>
        <div className="line" />
        <div className="item-message">オススメ</div>
      </div>
    </div>
  );
};
