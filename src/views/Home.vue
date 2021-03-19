<template>
  <div class="home">
    <div class="notice">
      <notice></notice>
    </div>
    <div class="calander">
      <calander></calander>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Notice from "@/components/Notice.vue";
import Calander from "@/components/Calander.vue";
export default {
  name: "Home",
  components: {
    Notice,
    Calander,
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  .notice {
    height: 615px;
    width: 585px;
    border: 1px solid blue;
    margin-right: 15px;
  }
  .calander {
    height: 615px;
    width: 585px;
    border: 1px solid blue;
    margin-left: 15px;
  }
}
</style>