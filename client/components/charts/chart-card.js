"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from './dep'
import ChartLayout from "./chart-layout";

export default function ChartCard({ type, title, chartData, chartOptions }) {
  

  return (
    <Card className={`bg-clip-border shadow-none shadow-shadow-100 bg-navy-800 text-white  rounded-xl lmd:w-[30%] md:w-full sm:w-full mr-6`}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography
            variant="h6"
            className={`text-2xl pl-4  text-white`}
            color="blue-gray"
          >
            {title}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
      <ChartLayout
            type={type}
            chartData={chartData}
            chartOptions={chartOptions}
          />
      </CardBody>
    </Card>
  );
}
