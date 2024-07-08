
// inner page of [Form]  :

  
import React from "react";

// @ts-ignore
import Box from "@mui/material/Box";

// @ts-ignore
import TextField from "@mui/material/Textfield";

import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";

// @ts-ignore
// The main imported hook from the [MUI] library to use the Form element and other  requried variables :     
import { useForm } from "react-hook-form"  ;
 

// Define a regular expression for validating email  pattern  :
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Define a regular expression for validating phone number  pattern :
const phoneRegExp = /^(\+)?(\(?\d+\)?)(([\s-]+)?(\d+)){0,}$/g;

// The defined object of data to be used inside the select element {MenuItem} of the Form input field      :       
const mydata = [
  { value: "Admin", label: "Admin" },
  { value: "Manager", label: "Manager" },
  { value: "User", label: "User" },
];

//  The main functional component of [Form ]   : 
const Form = () => {

  //  Defining some  statuses from the imported [useForm]  :  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

   //  Define a state to be used inside the  Form   :
  const [open, setOpen]  = React.useState(false) ;

  // Define a hanling function of closing  :  
  const handleClose = ( event , reason ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false) ;
  } ;


  // Define handling click function   : 
  const handleClick = () => {
    setOpen(true)      
  } 


  //  Define the submit function to be used inside the button [in full project should return a real data via api ]    :  
  const onSubmit = () => {
    console.log("Done");
    handleClick();
  };

   
  return (
    
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      
      
      <Stack direction={"row"} sx={{ gap: 2 }}>
        
  
        <TextField
          helperText={
            Boolean(errors.firstName)
              ? "This Field is Required & min characters  = 3  "
              : null
          }
          error={Boolean(errors.firstName)}
          {...register("firstName", {
             required: true, minLength: 3 
            }
          )}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />

      
        <TextField
          helperText={
            Boolean(errors.lastName)
              ? "This Field is Required & min characters  = 3  "
              : null
          }
          error={Boolean(errors.lastName)}
          {...register("lastName", {
             required: true,
             minLength: 3 
            }
          )}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
   
      </Stack>

        
      <TextField
        helperText={
          Boolean(errors.email) ? "Please insert a valid email address " : null
        }
        error={Boolean(errors.email)}
        {...register("email", {
           required: true, 
           pattern: regEmail 
          }
        )}
        label="Email"
 
        variant="filled"
      />

 
      <TextField
        helperText={
          Boolean(errors.ContactNumber)
            ? "Please insert a valid Phone number = 11 digits "
            : null
        }
        error={Boolean(errors.ContactNumber)}
        {...register("ContactNumber", {
          required: true,
          minLength: 11,
          maxLength: 11,
          pattern: phoneRegExp,
        })}
        label="Contact Number"
        variant="filled"
      />

 
      <TextField label="Address 1" variant="filled" />

  
      <TextField label="Address 2" variant="filled" />

   
      <TextField
        id="outlined-select-currency"
        variant="filled"
        select
        label="Role"
        defaultValue="User"
        helperText="Please Choose your Role "
      >
        {mydata.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

 
      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{ textTransform: "capitalize" }}
          type="submit"
          variant="contained"
        >
          Create new user
        </Button>

 
        <Snackbar 
           open={open}
           autoHideDuration={3000}
           onClose={handleClose}
           anchorOrigin = {{ vertical: "top" ,  horizontal: "right" }}
          >
          <Alert 
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            The account created successful !
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
