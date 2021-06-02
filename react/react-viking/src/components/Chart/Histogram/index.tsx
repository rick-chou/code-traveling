import React from 'react';
import { Chart, Geom, Annotation, Tooltip } from 'bizcharts';

interface IProps {
  height: number,
  data: Array<any>
}

const Histogram = ({ data, height }: any) => {

  const scale = {
    avgScore: {
      alias: '平均分',
      nice: true,
    },
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <Chart
        height={height}
        width={116 * data.length}
        data={data}
        scale={scale}
        interactions={['active-region']}
        padding={[30, 30, 30, 50]}
      >
        <Tooltip shared />
        <Geom
          type="interval"
          size={'40'}
          position="schoolName*avgScore"
          style={{
            fill: '#1EC7C1',
            fillOpacity: 1,
          }}
        />
        <Annotation.Line
          start={['min', data[0].avgScore]}
          end={['max', data[0].avgScore]}
          style={{
            lineDash: [4, 4],
            stroke: '#FFA826',
            lineWidth: 2,
          }}
        />
      </Chart>
    </div>
  )
};

export default Histogram;