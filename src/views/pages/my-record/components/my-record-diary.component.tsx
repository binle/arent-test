import moment from 'moment';
import { DiaryDto } from '../../../../definitions';

export const MyRecordDiaryComponent = (props: { myDiaryData: DiaryDto[]; onGetMore: () => void }) => {
  return (
    <div className="diary">
      <div className="title"> MY DIARY</div>
      <div className="diary-list">
        {props.myDiaryData.map((item, index) => (
          <div key={index} className="item">
            <div className="title">
              <span>{moment(item.time).format('YYYY.MM.DD')}</span>
              <br />
              <span>{moment(item.time).format('HH.MM')}</span>
            </div>
            <div className="content">
              <span className="title">{item.title}</span>
              <span className="description">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary">
        <span onClick={props.onGetMore}>自分の日記をもっと見る</span>
      </button>
    </div>
  );
};
