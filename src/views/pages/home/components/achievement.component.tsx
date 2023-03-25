import { Progress, Space } from 'antd';
import moment from 'moment';
import { AchievementResponseBodyDto } from '../../../../definitions';

export type AchievementStateType = {
  date: Date;
  data: AchievementResponseBodyDto;
};

export const AchievementComponent = ({ achievementData }: { achievementData: AchievementStateType }) => {
  return (
    <div className="achievement">
      {achievementData.data.imageUrl && (
        <img className="achievement-image" src={achievementData.data.imageUrl} alt="achievement" />
      )}
      <Space wrap>
        <Progress
          type="circle"
          percent={achievementData.data.percent}
          size={181}
          format={(percent) => (
            <div className="achievement-info">
              <span className="achievement-date">{moment(achievementData.date).format('MM/DD')}</span>
              <span className="achievement-percent">{percent}%</span>
            </div>
          )}
        />
      </Space>
    </div>
  );
};
