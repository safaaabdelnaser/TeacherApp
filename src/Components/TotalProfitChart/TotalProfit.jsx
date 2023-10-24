import { PieChart, Pie, Cell, Legend } from "recharts";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataProfit } from "../../Features/StatusProfit";

const COLORS = [
  "#AB5F22",
  "#0994AB",
  "#371AAB",
  "#AB9800",
  "#1246AC",
  "#6CAEDE",
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TotalProfit = () => {
  const Profits = useSelector((state) => state.profits);
  console.log(Profits.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataProfit());
  }, [dispatch]);
  return (
    <div className="w-full mr-20">
      {Profits.data.loading && <div>Loading.....</div>}
      {!Profits.data.loading && Profits.error ? (
        <div>Error: {Profits.data.error}</div>
      ) : null}
      {!Profits.loading && Profits.data.length ? (
        <PieChart width={400} height={200}>
          <Pie
            data={Profits.data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {Profits.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="left"
            iconType="circle"
            iconSize={8}
            boxWidth={5}
            wrapperStyle={{}}
          />
        </PieChart>
      ) : null}
    </div>
  );
};

export default TotalProfit;
