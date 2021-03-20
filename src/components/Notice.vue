<template>
  <div>
    <div class="notice-header">
      <div><span></span><span>待办事项3项</span></div>
      <div><span></span><span>今日新增3项</span></div>
    </div>
    <div class="notice-body">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1">
          <template slot="tab">
            <div class="title-panle">
              <div class="title-pic">
                <span class="pic pic1">
                  <span class="number">2</span>
                </span>
              </div>
              <h2>公文办理</h2>
            </div>
          </template>
          <ul>
            <li v-for="item in news" :key="item.id">
              <span :class="item.type">·</span>
              <span class="info">{{ item.info }}</span
              ><span class="time">{{ item.time }}</span>
            </li>
          </ul>
          <div class="more">查看更多</div>
        </a-tab-pane>
        <a-tab-pane key="2">
          <template slot="tab">
            <div class="title-panle">
              <div class="title-pic">
                <span class="pic pic2">
                  <span class="number">1</span>
                </span>
              </div>
              <h2>公文交换</h2>
            </div>
          </template>

          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3">
          <template slot="tab">
            <div class="title-panle">
              <div class="title-pic">
                <span class="pic pic3">
                  <span class="number">3</span>
                </span>
              </div>
              <h2>政务交换</h2>
            </div>
          </template>

          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        {
          type: "normal",
          id: 1,
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse, dignissimos vero similique labore eius error facere laborum, dolorem commodi minima iste magni quisquam. Sint, consectetur. Doloremque, harum exercitationem? Unde!",
          time: "2020/02/02",
        },
        {
          type: "warn",
          id: 2,
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse, dignissimos vero similique labore eius error facere laborum, dolorem commodi minima iste magni quisquam. Sint, consectetur. Doloremque, harum exercitationem? Unde!",
          time: "2020/02/02",
        },
        {
          type: "error",
          id: 3,
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse, dignissimos vero similique labore eius error facere laborum, dolorem commodi minima iste magni quisquam. Sint, consectetur. Doloremque, harum exercitationem? Unde!",
          time: "2020/02/02",
        },
        {
          type: "error",
          id: 4,
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse, dignissimos vero similique labore eius error facere laborum, dolorem commodi minima iste magni quisquam. Sint, consectetur. Doloremque, harum exercitationem? Unde!",
          time: "2020/02/02",
        },
        {
          type: "error",
          id: 5,
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse, dignissimos vero similique labore eius error facere laborum, dolorem commodi minima iste magni quisquam. Sint, consectetur. Doloremque, harum exercitationem? Unde!",
          time: "2020/02/02",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.notice-header {
  height: 94px;
  width: 585px;
  background: #27a5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 22px;
  > div {
    display: flex;
    &:nth-child(1) {
      margin-right: 75px;
      > span {
        &:nth-child(1) {
          width: 24px;
          height: 24px;
          content: "";
          display: inline-block;
          background: url("../assets/ic-待办事项.png");
          margin-right: 16px;
        }
      }
    }
    &:nth-child(2) {
      margin-left: 75px;
      > span {
        &:nth-child(1) {
          width: 24px;
          height: 24px;
          content: "";
          display: inline-block;
          background: url("../assets/ic-今日新增.png");
          margin-right: 16px;
        }
      }
    }
  }
}

.title-panle {
  height: 140px;
  width: 140px;
  .title-pic {
    height: 112px;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    .number {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: absolute;
      top: -10px;
      right: -10px;
      background: url(../assets/ic-提醒圈.png);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .pic {
      position: relative;
    }
    .pic1 {
      height: 72px;
      width: 72px;
      display: block;
      background: url(../assets/ic-公文办理-默认.png);
    }
    .pic2 {
      height: 72px;
      width: 72px;
      display: block;
      background: url(../assets/ic-公文交换-默认.png);
    }
    .pic3 {
      height: 72px;
      width: 72px;
      display: block;
      background: url(../assets/ic-政务安排-默认.png);
    }
  }
}
/deep/.ant-tabs-nav .ant-tabs-tab {
  padding: 40px 16px;
  .title-panle {
    h2 {
      width: 100%;
      margin-top: 15px;
      text-align: center;
    }
  }
  &:nth-child(1) {
    margin-left: 2px;
  }
}
/deep/.ant-tabs-tab-active {
  .title-pic {
    height: 112px;
    width: 140px;
    background: url(../assets/ic-公文办理-选中背景.png);
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      height: 22px;
      width: 22px;
      display: block;
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      background: url(../assets/箭头-选中.png);
      background-color: #fff;
      background-size: cover;
      z-index: 2;
    }
    &::before {
      height: 2px;
      width: 22px;
      display: block;
      content: "";
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      z-index: 4;
    }
    .pic1 {
      height: 72px;
      width: 72px;
      display: block;
      background: url(../assets/ic-公文办理-选中.png);
    }
    .pic2 {
      height: 72px;
      width: 72px;
      display: block;
      background: url(../assets/ic-公文交换-选中.png);
    }
    .pic3 {
      height: 72px;
      width: 72px;
      display: block;
      background: url(../assets/ic-政务安排-选中.png);
    }
  }
  .title-panle {
    h2 {
      color: #27a5f9;
    }
  }
}
/deep/.ant-tabs-bar {
  border-bottom: 1px solid #27a5f9;
}
/deep/.ant-tabs-ink-bar {
  background: transparent;
  width: 0px !important;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  padding: 25px 20px;
  .normal {
    transform: scale(3);
    color: green;
  }
  .warn {
    transform: scale(3);
    color: yellow;
  }
  .error {
    transform: scale(3);
    color: red;
  }
  .info {
    width: 434px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    flex-grow: 1;
    margin-right: 30px;
    margin-left: 30px;
  }
  .time {
    color: #aaa;
  }
}
.more {
  text-align: center;
  color: #1890ff;
  cursor: pointer;
}
</style>