import moment from 'moment';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { GraphTimeEnum } from '../../../../definitions';
import { getEnumValues } from '../../../../utils';

export type BodyGraphType = { label: string; weight: number; fat: number }[];

type MyRecordBodyGraphComponentProps = {
  bodyGraphData: { list: BodyGraphType; type: GraphTimeEnum };
  // eslint-disable-next-line no-unused-vars
  onChangeType: (type: GraphTimeEnum) => void;
};

export const MyRecordBodyGraphComponent = ({ bodyGraphData, onChangeType }: MyRecordBodyGraphComponentProps) => {
  return (
    <div className="body-graph">
      <div className="graph-title">
        <div className="title">BODY RECORD</div>
        <div className="time">{moment().format('YYYY.MM.DD')}</div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={bodyGraphData.list}
          margin={{
            top: 54,
            right: 107,
            left: 61,
            bottom: 45,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" width={52} tickSize={3} />
          <YAxis max={100} hide domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" name="重さ" stroke="#FFCC21" />
          <Line type="monotone" dataKey="fat" name="肥満" stroke="#8FE9D0" />
        </LineChart>
      </ResponsiveContainer>
      <div className="graph-type">
        {getEnumValues(GraphTimeEnum).map((item) => (
          <div
            key={item}
            className={`graph-type-item ${item === bodyGraphData.type ? 'selected' : ''}`}
            onClick={() => onChangeType(item as GraphTimeEnum)}
          >
            {item === GraphTimeEnum.Day ? (
              <span>日</span>
            ) : item === GraphTimeEnum.Week ? (
              <span>週</span>
            ) : item === GraphTimeEnum.Month ? (
              <span>月</span>
            ) : (
              <span>年</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
