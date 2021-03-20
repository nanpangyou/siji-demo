<template>
  <div class="chart">
    <div class="bar-chart" ref="bar" style="height: 500px">bar-chart</div>
    <div class="rank">
      <div class="rank-title">排名</div>
      <ul>
        <li v-for="item in rankList" :key="item.id">
          <span>{{ item.rank }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.mount }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myChart: null,
      rankList: [
        { id: 1, rank: 1, name: "xxx", mount: 123.4 },
        { id: 2, rank: 2, name: "xxx", mount: 123.4 },
        { id: 3, rank: 3, name: "xxx", mount: 123.4 },
        { id: 4, rank: 4, name: "xxx", mount: 123.4 },
        { id: 5, rank: 5, name: "xxx", mount: 123.4 },
        { id: 6, rank: 6, name: "xxx", mount: 123.4 },
        { id: 7, rank: 7, name: "xxx", mount: 123.4 },
        { id: 8, rank: 8, name: "xxx", mount: 123.4 },
        { id: 9, rank: 9, name: "xxx", mount: 123.4 },
        { id: 10, rank: 10, name: "xxx", mount: 123.4 },
        { id: 11, rank: 11, name: "xxx", mount: 123.4 },
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.bar);
      this.myChart.setOption({
        title: {
          text: "水量",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: { type: "dashed" },
          },
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 30,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#27C9F4", // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: "#1677D0", // 0% 处的颜色
                },
              ]),
            },
          },
          {
            type: "pictorialBar",
            symbolSize: [30, 10],
            symbolOffset: [0, -5],
            symbolPosition: "end",
            z: 12,
            color: "#27C9F4",
            data: [120, 200, 150, 80, 70, 110, 130],
          },
        ],
      });
    },
  },
};
</script>
<style lang="less" scoped>
.chart {
  display: flex;
  .bar-chart {
    width: 70%;
  }
  .rank {
    width: 30%;
    .rank-title {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
    }
    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    ul {
      padding-top: 20px;
    }
    li {
      display: flex;
      height: 35px;
      align-items: center;
      justify-content: center;
      span {
        margin: 0 30px;
        &:nth-child(1) {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          background: #f0f2f5;
          border-radius: 50%;
          font-weight: bold;
        }
        &:nth-child(2) {
          flex-grow: 1;
        }
      }
      &:nth-child(-n + 3) {
        span {
          &:nth-child(1) {
            background: #27a5f9;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>