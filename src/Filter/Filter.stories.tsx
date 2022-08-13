import * as React from "react";
import "./Filter.scss";
import Filter from "./Filter";
export default {
  title: "Filter",
};


export const Primary = () => {
  let checkboxDt = [
    {
      key: 1,
      value: "Low",
      isChecked: false,
    },
    {
      key: 2,
      value: "Medium",
      isChecked: false,
    },
    {
      key: 3,
      value: "High",
      isChecked: false,
    },
  ];

  let dataRadio = [
    {
      key: 1,
      value: "Last 24 hours",
    },
    {
      key: 2,
      value: "Last 72 hours",
    },
    {
      key: 3,
      value: "Last week",
    },
    {
      key: 4,
      value: "Last 6 months",
    },
  ];
  return <Filter checkboxData={checkboxDt} dataRadio={dataRadio}/>;
};
