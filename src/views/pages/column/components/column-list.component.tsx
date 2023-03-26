import { message } from 'antd';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { ColumnDataDto } from '../../../../definitions';

export const ColumnListComponent = (props: { columnData: ColumnDataDto[]; onGetMoreColumnData: () => void }) => {
  const inputComingSoon = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    message.open({ type: 'info', content: '機能はすぐに来ています！' });
  };

  return (
    <div className="column-list">
      <div className="list">
        {props.columnData.map((item) => {
          const text = `${moment(item.time).format('YYYY.MM.DD    HH:MM')}`;
          return (
            <div className="item" key={text}>
              <img className="image" src={item.imageUrl} alt={text} />
              <div className="content">
                <span>{text}</span>
              </div>
              <div className="footer">
                <div className="title">{item.title}</div>
                <div className="tag">
                  {item.tags.map((it) => (
                    <NavLink key={it} className="tag-item" to={`/tag/${it}`} onClick={inputComingSoon}>
                      #{it}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-primary">
        <span onClick={props.onGetMoreColumnData}>記録をもっと見る</span>
      </button>
    </div>
  );
};
