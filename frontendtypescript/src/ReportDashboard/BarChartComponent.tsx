import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 4500 },
  { name: "Feb", value: 4200 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 3400 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
  { name: "Jul", value: 4300 },
  { name: "Aug", value: 4500 },
  { name: "Sep", value: 3500 },
  { name: "Oct", value: 4000 },
  { name: "Nov", value: 2800 },
  { name: "Dec", value: 2000 },
];

const BarChartComponent = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full md:w-1/2 flex-1">
      <h2 className="text-lg mb-4">Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Bar dataKey="value" fill="#ffffff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
