import { message } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { DiaryDto, ExerciseDto, GraphTimeEnum } from '../../../definitions';
import { asyncGetBodyFatGraph, asyncGetMyDiary, asyncGetMyExercise, processLoading } from '../../../processes';
import { ScrollTopComponent } from '../../common-components';

import { BodyGraphType, MyRecordBodyGraphComponent } from './components/my-record-body-graph.component';
import { MyRecordButtonsComponent } from './components/my-record-buttons.component';
import { MyRecordDiaryComponent } from './components/my-record-diary.component';
import { MyRecordExerciseComponent } from './components/my-record-exercise.component';

type ExerciseStateType = {
  date: Date;
  list: ExerciseDto[];
};

const newDate = new Date();

const MyRecordPage = () => {
  const getBodyFatGraph = async (type: GraphTimeEnum) => {
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
    const result = await asyncGetBodyFatGraph(achievementFromDate, achievementToDate, type);
    const list: BodyGraphType = [];
    for (const item of result.list.sort((a, b) => a.index - b.index)) {
      const itemTime = moment();
      let label;
      switch (type) {
        case GraphTimeEnum.Day: {
          itemTime.date(itemTime.date() - item.index);
          label = `${itemTime.date()}${'日'}`;
          break;
        }
        case GraphTimeEnum.Week: {
          itemTime.weeks(itemTime.weeks() - item.index);
          label = `${itemTime.weeks()}${'週'}`;
          break;
        }
        case GraphTimeEnum.Year: {
          itemTime.year(itemTime.year() - item.index);
          label = `${itemTime.year()}${'年'}`;
          break;
        }
        default: {
          itemTime.month(itemTime.month() - item.index);
          label = `${itemTime.month() || 12}${'月'}`;
        }
      }

      list.unshift({
        weight: item.weight,
        fat: item.fat,
        label,
      });
    }
    return list;
  };

  const getMyExercise = async (offset?: number) => {
    const from = new Date();
    from.setHours(0);
    from.setMinutes(0);
    from.setSeconds(0);
    from.setMilliseconds(0);
    const to = new Date();
    to.setHours(23);
    to.setMinutes(59);
    to.setSeconds(59);
    to.setMilliseconds(999);
    return {
      date: from,
      list: (await asyncGetMyExercise(from, to, offset)).list,
    };
  };

  const getMyDiary = async () => {
    return (await asyncGetMyDiary(newDate, myDiaryData.length)).list;
  };

  const [myDiaryData, setMyDiaryData] = useState<DiaryDto[]>([]);

  const [exerciseData, setExerciseData] = useState<ExerciseStateType>({
    date: new Date(),
    list: [],
  });

  const [bodyGraphData, setBodyGraphData] = useState<{ list: BodyGraphType; type: GraphTimeEnum }>({
    list: [],
    type: GraphTimeEnum.Month,
  });

  useEffect(() => {
    processLoading(Promise.all([getBodyFatGraph(bodyGraphData.type), getMyExercise(), getMyDiary()]))
      .then(([_bodyGraphDataList, exerciseData, _myDiary]) => {
        setBodyGraphData({ list: _bodyGraphDataList, type: bodyGraphData.type });
        setExerciseData(exerciseData);
        setMyDiaryData(_myDiary);
      })
      .catch((error) => {
        message.open({ type: 'error', content: error.message });
      });
  }, []);

  const onChangeType = (type: GraphTimeEnum) => {
    processLoading(getBodyFatGraph(type))
      .then((_bodyGraphDataList) => {
        setBodyGraphData({ list: _bodyGraphDataList, type });
      })
      .catch((error) => {
        message.open({ type: 'error', content: error.message });
      });
  };

  const onGetMoreDiary = async () => {
    processLoading(getMyDiary())
      .then((_diaryData) => {
        if (_diaryData.length === 0) {
          message.open({ type: 'info', content: 'すべてのデータが表示されます！' });
        }
        setMyDiaryData(myDiaryData.concat(_diaryData));
      })
      .catch((error) => {
        message.open({ type: 'error', content: error.message });
      });
  };

  return (
    <div className="my-record-page">
      <MyRecordButtonsComponent />
      <MyRecordBodyGraphComponent bodyGraphData={bodyGraphData} onChangeType={onChangeType} />
      <MyRecordExerciseComponent {...exerciseData} />
      <MyRecordDiaryComponent myDiaryData={myDiaryData} onGetMore={onGetMoreDiary} />
      <ScrollTopComponent />
    </div>
  );
};

export default MyRecordPage;
