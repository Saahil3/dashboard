import React from "react";

import Chart1 from './chartscard/chart1';
import Card from './chartscard/forecast';


const Section = () => {
  return (
    <div className="mb-8">
      <h2 className="mt-16 mb-12 text-3xl font-inter font-medium text-[#212636]">
        Insights
      </h2>
      <div className="grid grid-cols-3 gap-6">
       <div>
       <Chart1 data={Chart1} />
       </div>
       
        <div className=" flex justify-end">
        <Card />
        </div>
        
        
      </div>
    </div>
  );
};

export default Section;