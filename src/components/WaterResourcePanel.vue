<template>
  <div>
    <div class="total-info">
      <div class="total-info-block">
        <div class="title">全市供水量</div>
        <div class="amount">425.57万m<sup>3</sup></div>
      </div>
      <div class="total-info-block">
        <div class="title">东部工程引水量</div>
        <div class="amount">69</div>
      </div>
      <div class="total-info-block">
        <div class="title">东深工程引水量(深圳)</div>
        <div class="amount">92.22</div>
      </div>
      <div class="total-info-block">
        <div class="title">境外饮水量</div>
        <div class="amount">168.22</div>
      </div>
    </div>
    <div class="chart-info">
      <div>
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="分区供水量">
            <water-chart></water-chart>
          </a-tab-pane>
          <a-tab-pane key="2" tab="分区出水量">
            Content of Tab Pane 3
          </a-tab-pane>
          <a-date-picker slot="tabBarExtraContent" />
        </a-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import WaterChart from "./WaterChart";
export default {
  components: {
    WaterChart,
  },
};
</script>
<style lang="less" scoped>
.total-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  .total-info-block {
    height: 105px;
    width: 264px;
    background: #f6fcff;
    border: 1px solid #d8f0ff;
    border-radius: 2px;
    border-radius: 2px;
    .title {
      margin: 20px auto auto 24px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
    .amount {
      margin-top: 5px;
      margin-left: 24px;
      font-size: 30px;
      color: rgba(0, 0, 0, 0.85);
      line-height: 38px;
    }
  }
}
.chart-info {
  margin-top: 46px;
}
/deep/.ant-calendar-picker {
  width: 256px;
}
</style>