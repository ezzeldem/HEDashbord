import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "../../components/Box/Box";
import { usersData } from "../../dummyData";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import PageHeader from "../../components/PageHeader/PageHeader";
import ButtonBox from "../../components/ButtonBox/ButtonBox";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const usersColumns = [
  {
    field: "letter",
    headerName: "letter",
    width: 100,
    renderCell: (prames) => {
      return (
        <Link to={`/user/${prames.row.id}`}>
          <Avatar sx={{ bgcolor: stringToColor(prames.row.name) }}>
            {prames.row.name
              .split(/\s/)
              .reduce((response, word) => (response += word.slice(0, 2)), "")}
          </Avatar>
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
      <PageHeader title='Users'>
        <ButtonBox path='/adduser'>
          Add User <AddOutlinedIcon />
        </ButtonBox>
      </PageHeader>
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
