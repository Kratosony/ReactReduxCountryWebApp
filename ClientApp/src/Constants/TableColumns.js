import React from "react";

export const columns = [
  {
    field: "flag",
    render: (rowData) => (
      <img src={rowData.flag} alt={rowData.flag} style={{ width: 40 }} />
    ),
    filtering: false,
  },
  { title: "Name", field: "name" },
  { title: "Capital", field: "capital", filtering: false },
  { title: "Region", field: "region", filtering: false },
  { title: "Demonym", field: "demonym", filtering: false },
  {
    title: "Population",
    field: "population",
    type: "numeric",
    filtering: false,
  },
  { title: "Area", field: "area", type: "numeric", filtering: false },
];
