// inner page of [Contacts] :


// A] Importings : 

 
import { Box } from "@mui/material";
import { rows , columns } from "./data";

// @ts-ignore
import { DataGrid , GridToolbar } from '@mui/x-data-grid';
 
 

// B] Defined the main component   :  
const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        // This attribute represent the [Toolbar] above the main table of DataGrid  : 
        slots={{  
          toolbar: GridToolbar ,
        }} 
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Contacts;
