import moment from 'moment';
import { MealHistoryDto } from '../../../../definitions';

export const MealHistoryComponent = ({
  mealHistoryData,
  onGetMoreMealHistory,
}: {
  mealHistoryData: MealHistoryDto[];
  onGetMoreMealHistory: () => void;
}) => {
  return (
    <div className="meal-history">
      <div className="list">
        {mealHistoryData.map((item) => {
          const text = `${moment(item.date).format('MM.DD')}.${item.type}`;
          return (
            <div className="item" key={text}>
              <img className="image" src={item.imageUrl} alt={text} />
              <div className="content">
                <span>{text}</span>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-primary">
        <span onClick={onGetMoreMealHistory}>記録をもっと見る</span>
      </button>
    </div>
  );
};
