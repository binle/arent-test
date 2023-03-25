import { message } from 'antd';
import { ReactNode } from 'react';

import meanImage from './../../../../styles/images/mean.png';
import snackImage from './../../../../styles/images/snack.png';

const HexagonButtonComponent = ({ children, onClick }: { children?: ReactNode; onClick: React.MouseEventHandler }) => {
  return (
    <div className="hexagon-button" onClick={onClick}>
      {children}
    </div>
  );
};

export const MealInputComponent = () => {
  const inputComingSoon = () => {
    message.open({ type: 'info', content: '機能はすぐに来ています！' });
  };
  return (
    <div className="meal-input">
      <HexagonButtonComponent onClick={inputComingSoon}>
        <img src={meanImage} alt="Morning" />
        <span>Morning</span>
      </HexagonButtonComponent>
      <HexagonButtonComponent onClick={inputComingSoon}>
        <img src={meanImage} alt="Lunch" />
        <span>Lunch</span>
      </HexagonButtonComponent>
      <HexagonButtonComponent onClick={inputComingSoon}>
        <img src={meanImage} alt="Dinner" />
        <span>Dinner</span>
      </HexagonButtonComponent>
      <HexagonButtonComponent onClick={inputComingSoon}>
        <img src={snackImage} alt="Snack" />
        <span>Snack</span>
      </HexagonButtonComponent>
    </div>
  );
};
