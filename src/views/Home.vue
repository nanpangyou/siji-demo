<template>
  <div class="home">
    <div class="notice">
      <notice></notice>
    </div>
    <div class="calander">
      <calendar></calendar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Notice from "@/components/Notice.vue";
import Calendar from "@/components/Calendar.vue";
export default {
  name: "Home",
  components: {
    Notice,
    Calendar,
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
    margin-right: 15px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 8px #888888;
  }
  .calander {
    height: 615px;
    width: 585px;
    margin-left: 15px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 8px #888888;
  }
}
</style>