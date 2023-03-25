import { message } from 'antd';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { ApplicationContext } from '../../../data';
import { GraphTimeEnum, MealHistoryDto } from '../../../definitions';
import {
  asyncGetAchievementByDate,
  asyncGetBodyFatGraph,
  asyncGetMealHistory,
  processLoading,
} from '../../../processes';
import { ScrollTopComponent } from '../../common-components';
import { AchievementComponent, AchievementStateType } from './components/achievement.component';
import { BodyGraphComponent, BodyGraphType } from './components/body-graph.component';
import { MealHistoryComponent } from './components/meal-history.component';
import { MealInputComponent } from './components/meal-input.component';

const newDate = new Date();
const HomePage = () => {
  const { contextData } = useContext(ApplicationContext);
  const accountInfo = contextData.userData?.accountInfo;

  const getAchievementDate = async () => {
    const achievementFromDate = new Date();
    achievementFromDate.setHours(0);
    achievementFromDate.setMinutes(0);
    achievementFromDate.setSeconds(0);
    achievementFromDate.setMilliseconds(0);
    const achievementToDate = new Date();
    achievementToDate.setHours(23);
    achievementToDate.setMinutes(59);
    achievementToDate.setSeconds(59);
    achievementToDate.setMilliseconds(999);
    return {
      date: achievementFromDate,
      data: await asyncGetAchievementByDate(achievementFromDate, achievementToDate),
    };
  };

  const getBodyFatGraph = async () => {
    const achievementFromDate = new Date();
    achievementFromDate.setMonth(achievementFromDate.getMonth() - 12);
    achievementFromDate.setHours(0);
    achievementFromDate.setMinutes(0);
    achievementFromDate.setSeconds(0);
    achievementFromDate.setMilliseconds(0);
    const achievementToDate = new Date();
    achievementToDate.setHours(23);
    achievementToDate.setMinutes(59);
    achievementToDate.setSeconds(59);
    achievementToDate.setMilliseconds(999);
    const result = await asyncGetBodyFatGraph(achievementFromDate, achievementToDate, GraphTimeEnum.Month);
    const list: BodyGraphType = [];
    for (const item of result.list.sort((a, b) => a.index - b.index)) {
      const monthTime = moment();
      monthTime.month(monthTime.month() - item.index);
      list.unshift({
        weight: item.weight,
        fat: item.fat,
        label: `${monthTime.month()}月`,
      });
    }
    return list;
  };

  const getMealHistory = async () => {
    return (await asyncGetMealHistory(newDate, mealHistoryData.length)).list;
  };

  const [achievementData, setAchievementData] = useState<AchievementStateType>({
    date: new Date(),
    data: { imageUrl: '', percent: 0 },
  });

  const [bodyGraphData, setBodyGraphData] = useState<BodyGraphType>([]);
  const [mealHistoryData, setMealHistoryData] = useState<MealHistoryDto[]>([]);

  useEffect(() => {
    processLoading(Promise.all([getAchievementDate(), getBodyFatGraph(), getMealHistory()]))
      .then(([_achievementData, _bodyGraphData, _mealHistoryData]) => {
        setAchievementData(_achievementData);
        setBodyGraphData(_bodyGraphData);
        setMealHistoryData(mealHistoryData.concat(_mealHistoryData));
      })
      .catch((error) => {
        message.open({ type: 'error', content: error.message });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!accountInfo?.id) {
    return <></>;
  }

  const onGetMoreMealHistory = async () => {
    processLoading(getMealHistory())
      .then((_mealHistoryData) => {
        if (_mealHistoryData.length === 0) {
          message.open({ type: 'info', content: 'すべてのデータが表示されます！' });
        }
        setMealHistoryData(mealHistoryData.concat(_mealHistoryData));
      })
      .catch((error) => {
        message.open({ type: 'error', content: error.message });
      });
  };

  return (
    <div className="home-page">
      <div className="home-overview">
        <AchievementComponent achievementData={achievementData} />
        <BodyGraphComponent bodyGraphData={bodyGraphData} />
      </div>
      <div className="home-meal">
        <MealInputComponent />
        <MealHistoryComponent mealHistoryData={mealHistoryData} onGetMoreMealHistory={onGetMoreMealHistory} />
      </div>
      <ScrollTopComponent />
    </div>
  );
};

export default HomePage;
