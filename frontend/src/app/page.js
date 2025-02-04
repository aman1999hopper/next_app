import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartComponent from "@/components/Chart";

export default function Home() {
  // Example chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Sales" content="$50,000" />
        <Card title="Total Users" content="1,200" />
        <Card title="New Orders" content="320" />
        <Card title="Revenue" content="$10,000" />

        {/* Chart Cards */}
        <Card title="Sales Chart" className="col-span-1 sm:col-span-2 lg:col-span-2">
          <ChartComponent data={chartData} options={chartOptions} />
        </Card>
        <Card title="Orders Chart" className="col-span-1 sm:col-span-2 lg:col-span-2">
          <div className="h-64 w-full flex items-center justify-center">
          <ChartComponent data={chartData} options={chartOptions} />
          </div>
        </Card>
      </div>
    </Layout>
  );
}
