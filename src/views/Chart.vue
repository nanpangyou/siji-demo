<template>
  <div class="chart">
    <div class="container">
      <div>
        <h3>水资源 <span>更多 ></span></h3>
        <a-tabs default-active-key="2" class="tabs">
          <a-tab-pane key="1" tab="水资源统计"> 水资源统计 </a-tab-pane>
          <a-tab-pane key="2" tab="水资源信息">
            <water-resource-panel></water-resource-panel>
          </a-tab-pane>
          <a-tab-pane key="3" tab="引水供水"> 引水供水 </a-tab-pane>
          <a-tab-pane key="4" tab="工程情况"> 工程情况 </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import WaterResourcePanel from "@/components/WaterResourcePanel";
export default {
  components: {
    WaterResourcePanel,
  },
};
</script>
<style lang="less" scoped>
.chart {
  width: 1200px;
  margin: 0 auto;
}
h3 {
  display: flex;
  margin: 32px;
  font-size: 22px;
  color: #333;
  justify-content: space-between;
  align-items: center;
  span {
    color: #2ba3fd;
    font-size: 14px;
    cursor: pointer;
  }
}
.tabs {
  margin: 0 16px;
}
</style>