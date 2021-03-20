<template>
  <div>
    <a-calendar :header-render="headerRender">
      <ul slot="dateCellRender" slot-scope="value" class="events">
        <li
          v-for="item in getListData(value)"
          :key="item.content"
          :class="item.type"
          class="arrange-item"
        >
          <arrange-item :item="item"></arrange-item>
        </li>
      </ul>
    </a-calendar>
  </div>
</template>
<script>
import ArrangeItem from "./ArrangeItem";
export default {
  components: {
    ArrangeItem,
  },
  methods: {
    getListData(value) {
      let listData;
      switch (value.date()) {
        case 15:
          listData = [{ type: "normal", content: "会议 9AM", id: "1" }];
          break;
        default:
      }
      return listData || [];
    },
    headerRender({ value }) {
      const start = 0;
      const end = 12;
      const monthOptions = [];

      const current = value.clone();
      const localeData = value.localeData();
      const months = [];
      for (let i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.monthsShort(current));
      }

      for (let index = start; index < end; index++) {
        monthOptions.push(
          <a-select-option class="month-item" key={`${index}`}>
            {months[index]}
          </a-select-option>
        );
      }
      const month = value.month();

      const year = value.year();
      const options = [];
      for (let i = year - 10; i < year + 10; i += 1) {
        options.push(
          <a-select-option key={i} value={i} class="year-item">
            {i}
          </a-select-option>
        );
      }
      return (
        <div>
          <div class="cust-calendar-header">
            <span class="cust-calendar-title">日程安排</span>
            <a-row>
              <a-col>
                <a-select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  class="my-year-select"
                  onChange={(newYear) => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                  value={String(year)}
                >
                  {options}
                </a-select>
                <a-select
                  style="margin-left: 10px"
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={String(month)}
                  onChange={(selectedMonth) => {
                    const newValue = value.clone();
                    newValue.month(parseInt(selectedMonth, 10));
                    onChange(newValue);
                  }}
                >
                  {monthOptions}
                </a-select>
              </a-col>
            </a-row>
          </div>
        </div>
      );
    },
  },
};
</script>
<style lang="less" scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
.arrange-item {
  font-size: 12px;
  padding-left: 10px;
  border-left: 2px solid rgba(27, 185, 52, 0.6);
  &.normal {
    background: rgba(27, 185, 52, 0.2);
  }
}
.cust-calendar-header {
  background: #2ba3fd;
  display: flex;
  padding: 30px;
}
.cust-calendar-title {
  margin-right: 40%;
  color: #fff;
  font-size: 22px;
}
/deep/.ant-fullcalendar-fullscreen .ant-fullcalendar-column-header {
  text-align: left;
}
/deep/ .ant-fullcalendar-cell .ant-fullcalendar-date {
  height: 80px;
  overflow: hidden;
}
/deep/.ant-fullcalendar td {
  padding: 0;
}
/deep/ .ant-fullcalendar-calendar-body {
  padding: 0;
  .ant-fullcalendar-table {
    thead > tr {
      background: rgba(152, 154, 156, 0.2);
      color: rgb(152, 154, 156);
      height: 42px;
    }
    .ant-fullcalendar-date {
      margin: 0;
      padding: 0;
      border: 1px solid #eee;
    }
  }
}
/deep/.ant-fullcalendar-fullscreen .ant-fullcalendar-value {
  text-align: left;
}
/deep/.ant-fullcalendar-fullscreen .ant-fullcalendar-content {
  overflow-y: hidden;
}
/deep/.ant-select {
  width: 92px;
}
/deep/.ant-select-sm .ant-select-selection--single {
  height: 34px;
  background: #2ba3fd;
  color: #fff;
  font-weight: bold;
}
/deep/.ant-select-sm .ant-select-selection {
  &:hover {
    border-color: #fff;
  }
}
/deep/.ant-select-sm .ant-select-selection__rendered {
  line-height: 34px;
}
/deep/.ant-select-arrow .ant-select-arrow-icon svg {
  fill: #fff;
}
</style>