"use client";
import React from "react";
import SideNavbar from "@/Components/sideNav/SideNavbar";
import ProfileCard from "@/Components/ProfileCard/ProfileCard";
import { Table } from "@/Components/Table/Table";
import Calendar from "@/Components/calendar/Calendar";
import Profile from "@/Components/Profilepic/Profile";
import ChartCard from "@/components/charts/chart-card";
import { lineChartData,lineChartOptions } from "@/components/util/chart-data";

function Staff2() {
  return (
    <div className="h-[210vh] lg:h-[100vh] min-h-screen">
      <div className="h-[100vh] absolute z-[100]">
        <SideNavbar />
      </div>
      <div className="pl-24 md:pl-0 sm:pl-24 pt-4 flex flex-col">
        <section className="flex md:flex-wrap justify-evenly flex-col md:flex-row">
          <Profile />
          <ProfileCard />
          <ChartCard
          chartData={lineChartData}
          chartOptions={lineChartOptions}
          type={"line"}
          title={"line chart"}
           />
        </section>
        <section className="pt-2 flex flex-wrap justify-evenly overflow-x-hidden">
          <Table />
          <Calendar />
        </section>
        <section>
        </section>
      </div>
    </div>
  );
}

export default Staff2;
