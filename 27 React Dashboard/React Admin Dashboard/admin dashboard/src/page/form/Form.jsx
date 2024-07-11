
// Inner page of [Form]  :
// A] Importings secton :  

  // 1- React main importings : 
  import React from "react";

  // 2-  MUI importings : 
  // @ts-ignore
  import Box from "@mui/material/Box";

  // @ts-ignore
  import TextField from "@mui/material/Textfield";
  import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";

  // 3-  Form  react hook  importings : 
  // The main imported hook from the [MUI] library to use the Form element and other  requried variables :     
  import { useForm } from "react-hook-form"  ;
//  -----------------------------------------


// B] General functions and variables  :
// 1-  Define a regular expression for validating [email]  pattern  :
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 2-  Define a regular expression for validating [phone number] pattern :
const phoneRegExp = /^(\+)?(\(?\d+\)?)(([\s-]+)?(\d+)){0,}$/g;

// 3-  The defined object of data to be used inside the Select element {MenuItem} of the Form input field      :       
const mydata = [
  { value: "Admin", label: "Admin" },
  { value: "Manager", label: "Manager" },
  { value: "User", label: "User" },
];
// -----------------------------

 
// *] The main functional component of [Form ]   : 
const Form = () => {


  // C]  Hooks defintions [before  the return ]    :  
  
  // 1- Defining/extracting  some states  from the imported hook [useForm]  :  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

   // 2- Define a [open] state to be used inside the  Form   :
  const [open, setOpen]  = React.useState(false) ;

  // 3-  Define a handling function of closing  :  
  const handleClose = ( event , reason ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false) ;
  } ;


  // 4- Define handling click function   : 
  const handleClick = () => {
    setOpen(true)      
  } 


  // 5-  Define the submit function to be used inside the button [in full project should return a real data via api ]    :  
  const onSubmit = () => {
    console.log("Done");
    handleClick();
  };

   
  // D] main return of the main function  of [Form]   :   
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
          
          {...register(
            "firstName", 
            {
              required: true,
              minLength: 3 
            }
          )}
          sx={{ flex: 1 }}
          label= "First Name"
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
          <MenuItem key={option.value} value={option.value} >
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
