import React from 'react';
import { LineChart } from 'react-chartkick'
import 'chart.js'

const Chart = (posts) => {
  const data = posts.hits.map(p => ([p.objectID + ' ', p.points]));

  return (
    <div className="chart-container">
      <LineChart data={data} curve={false} min={null} xmin={10} ytitle="Votes" xtitle="ID" />
    </div>
  );
}

export default Chart;