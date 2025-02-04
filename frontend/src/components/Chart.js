import { Line } from "react-chartjs-2";

export default function ChartComponent({ data, options }) {
  return (
    <div className="w-full h-64">
      <Line data={data} options={options} />
    </div>
  );
}
