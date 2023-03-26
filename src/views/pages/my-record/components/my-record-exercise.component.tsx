import moment from 'moment';
import { ExerciseDto } from '../../../../definitions';

export const MyRecordExerciseComponent = (props: { date: Date; list: ExerciseDto[] }) => {
  console.log(props);
  return (
    <div className="exercise">
      <div className="exercise-title">
        <div className="title">MY EXERCISE</div>
        <div className="time">{moment(props.date).format('YYYY.MM.DD')}</div>
      </div>
      <div className="exercise-list">
        {props.list.map((item, index) => (
          <div key={index} className="item">
            <div className="item-left">
              <span>●</span>
            </div>
            <div className="item-center">
              <span className="item-title">{item.title}</span>
              <span className="item-calories">
                {item.calories > 1000 ? `${Math.floor(item.calories / 1000)}kcal` : `${item.calories}cal`}
              </span>
            </div>
            <div className="item-right">
              <span>{item.timeInMinutes} min</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
