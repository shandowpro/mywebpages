// inner page of [Invoices] :

// import React from "react";
import {  Box } from "@mui/material";

// @ts-ignore
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { columns, rows } from "./data" ;

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        // This represent [CheckBoxSelection] column :  
        checkboxSelection
        
        // This represent [Toolbar] menu :
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Invoices;
