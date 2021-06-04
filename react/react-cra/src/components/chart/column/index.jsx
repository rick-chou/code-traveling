import React from 'react';
import { Chart, Geom, Tooltip, Annotation, Axis } from 'bizcharts';
import PropTypes from 'prop-types';
import styles from './index.scss';

const ReportChart = (props) => {
  const { height, data, type } = props;
  let position = null;
  // 坐标轴配置
  let label = null;
  // 辅助线配置
  let line = null;
  let scale = null;
  let padding = null;
  if (type === 'school') {
    position = 'schoolName*avgScore';
    label = {
      // 横坐标超过八个字显示...
      formatter: (text) => {
        let schoolName = text;
        if (schoolName.length > 8) {
          schoolName = schoolName.substring(0, 8) + '...';
        }
        return schoolName;
      },
    };
    line = data[0].avgScore;
    scale = {
      avgScore: {
        nice: true,
      },
    };
    padding = [30, 30, 30, 50];
  } else {
    position = 'schoolName*classAvgScore';
    label = {
      offset: 30,
      autoRotate: false,
      formatter: (text, item, index) => {
        let className = data[index].className;
        let schoolName = text;
        if (className.length > 8) {
          className = className.substring(0, 8) + '...';
        }
        if (schoolName.length > 8) {
          schoolName = schoolName.substring(0, 8) + '...';
        }
        return className + '\n\n' + schoolName;
      },
    };
    line = data[0].classAvgScore;
    scale = {
      classAvgScore: {
        nice: true,
      },
    };
    padding = [30, 30, 60, 50];
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <Chart
        height={height}
        width={116 * data.length}
        data={data}
        scale={scale}
        interactions={['active-region']}
        padding={padding}
      >
        <Tooltip shared domStyles={styles.toolTip}>
          {(title, items) => {
            let className = null;
            let schoolName = null;
            let avgScore = null;
            if (type === 'school') {
              schoolName = items[0].data.schoolName;
              avgScore = items[0].data.avgScore;
            } else {
              className = items[0].data.className;
              avgScore = items[0].data.classAvgScore;
              schoolName = items[0].data.schoolName;
            }
            return (
              <>
                <div className={styles.title}>
                  {type === 'school' ? schoolName : className}
                </div>
                <div className={styles.subTitle}>
                  {type === 'school' ? null : schoolName}
                </div>
                <div>
                  <span className={styles.dot}></span>
                  <span className={styles.info}>
                    平均分：<span>{avgScore}</span>
                  </span>
                </div>
              </>
            );
          }}
        </Tooltip>
        <Geom
          type="interval"
          size={40}
          position={position}
          style={{
            fill: '#1EC7C1',
            fillOpacity: 1,
          }}
        />
        <Axis name="schoolName" label={label} />
        <Annotation.Line
          start={['min', line]}
          end={['max', line]}
          style={{
            lineDash: [4, 4],
            stroke: '#FFA826',
            lineWidth: 2,
          }}
        />
        <Annotation.DataMarker
          position={[0, line]}
          direction="downward"
          point={{
            style: {
              fill: '#FFA826',
              stroke: '#FFA826',
              lineWidth: 3,
            },
          }}
        />
      </Chart>
    </div>
  );
};

ReportChart.propTypes = {
  height: PropTypes.number,
  data: PropTypes.array,
  type: PropTypes.string,
};

export default ReportChart;
