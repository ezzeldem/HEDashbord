import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "../../components/Box/Box";
import { usersData } from "../../dummyData";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";

const usersColumns = [
  {
    field: "letter",
    headerName: "letter",
    width: 100,
    renderCell: (prames) => {
      return (
        <Link
          to={`/user/${prames.row.id}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#fff",
            backgroundColor: `#333`,
            borderRadius: "50%",
          }}
        >
          {prames.row.name
            .split(/\s/)
            .reduce((response, word) => (response += word.slice(0, 2)), "")}
        </Link>
      );
    },
  },
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "age",
    headerName: "Age",
    width: 90,
  },
  {
    field: "country",
    headerName: "Country",
    width: 110,
  },
  {
    field: "email",
    headerName: "Email",
    width: 260,
  },
  {
    field: "jop",
    headerName: "Jop",
    width: 140,
  },
  {
    field: "states",
    headerName: "Satets",
    width: 100,
    renderCell: (prames) => {
      return (
        <div
          className={`statesBox ${
            prames.row.states === "online" ? "online" : "ofline"
          } `}
        >
          {prames.row.states}
        </div>
      );
    },
  },
];

export default function Users() {
  return (
    <>
      <PageHeader title='Users' />
      <Box>
        <div style={{ height: 371, width: "100%" }}>
          <DataGrid
            rows={usersData}
            columns={usersColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Box>
    </>
  );
}
