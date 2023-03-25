import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export type BodyGraphType = { label: string; weight: number; fat: number }[];

export const BodyGraphComponent = ({ bodyGraphData }: { bodyGraphData: BodyGraphType }) => {
  return (
    <div className="body-fat-graph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={bodyGraphData}
          margin={{
            top: 12,
            right: 107,
            left: 61,
            bottom: 19,
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
    </div>
  );
};
