<template>
  <div>
    <a-popover placement="right">
      <template slot="content">
        <p class="time">2020/01/01 21:23</p>
        <p class="detail">数据治理和平台项目交换沟通</p>
        <p class="sub">xxxx楼会议室</p>
        <h4>成员</h4>
        <ul>
          <li v-for="member in members.slice(0, 3)" :key="member.id">
            <span class="member">
              <img :src="member.picUrl" alt="头像" />
            </span>
          </li>
          <span v-if="members.length > 3" class="member member-number">
            +{{ members.length }}
          </span>
        </ul>
      </template>
      <template slot="title">
        <div class="popup-title">
          <span>会议</span>
        </div>
      </template>
      <div :status="item.type">{{ item.content }}</div>
    </a-popover>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      members: [
        {
          id: 1,
          picUrl:
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3392663359,4194879068&fm=26&gp=0.jpg",
        },
        {
          id: 2,
          picUrl:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3649178992,1821853682&fm=26&gp=0.jpg",
        },
        {
          id: 3,
          picUrl:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1441836571,2166773131&fm=26&gp=0.jpg",
        },
        {
          id: 4,
          picUrl:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1441836571,2166773131&fm=26&gp=0.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.popup-title {
  min-height: 36px;
  display: flex;
  align-items: center;
}
.time,
.detail {
  color: #333;
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
}
.sub {
  color: #aaa;
  font-size: 12px;
}
ul,
li {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
}
.member {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}
.member-number {
  background: #2ba3fd;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
}
</style>