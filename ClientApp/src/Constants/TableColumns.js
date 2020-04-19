import React from "react";

export const columns = [
  {
    field: "flag",
    render: (rowData) => (
      <img src={rowData.flag} alt={rowData.flag} style={{ width: 40 }} />
    ),
  },
  { title: "Name", field: "name" },
  { title: "Capital", field: "capital" },
  { title: "Region", field: "region" },
  { title: "Demonym", field: "demonym" },
  { title: "Population", field: "population", type: "numeric" },
  { title: "Area", field: "area", type: "numeric" },
];
