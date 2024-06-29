
// inner page of  Team  :

import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme, Box, Typography } from "@mui/material";
// import { red, teal, blue } from "@mui/material/colors";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {

  // Define the useTheme Hook:
  const theme = useTheme();

  /* Define the columns public  array of object varialbe -> to assign :
        - The number of columns in the table -> number of the elements in the array      
        - Each column default Name  in the table ->  'field'  property value of each object -> Required & must equal the property name in value in each object the rows  
        - Each column Custom Name  in the table ->  'headerName'  property of each object  
        - Each column width in the table ->  'width' property of each object  
    */
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: "50",
      flex: 0.4,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      width: "100px",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "5px",
              textAlign: "center",
              display: "flex",
              m: "0 auto",
              mt: "7px",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;
