import React, { useState } from "react";
import AddUserStyle from "./AddUserStyle";
import PageHeader from "../../components/PageHeader/PageHeader";
import Box from "../../components/Box/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function AddUser() {
  const [value, setValue] = useState(new Date("2022-07-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <AddUserStyle>
      <PageHeader title='Add User' />
      <form>
        <div className='row'>
          <div className='col-md-12'>
            <Box title='Basic Information'>
              <div className='row'>
                <div className='col-md-4 col-12'>
                  <div className='mb-4'>
                    <TextField
                      fullWidth
                      required
                      id='outlined-basic'
                      label='Name'
                      type='text'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div className='col-md-4 col-12'>
                  <div className='mb-4'>
                    <TextField
                      fullWidth
                      required
                      id='outlined-basic'
                      label='Jop'
                      type='text'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div className='col-md-4 col-12'>
                  <div className='mb-4'>
                    <TextField
                      fullWidth
                      required
                      id='outlined-basic'
                      label='Email'
                      type='email'
                      variant='outlined'
                    />
                  </div>
                </div>
                <div className='col-md-4 col-12'>
                  <div className='mb-4'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        fullWidth
                        label='BirthDay'
                        inputFormat='MM/dd/yyyy'
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </form>
    </AddUserStyle>
  );
}
