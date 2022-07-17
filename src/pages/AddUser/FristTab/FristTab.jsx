import React, { useState } from "react";
import { Box as MatrileBox, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Avatar from "@mui/material/Avatar";
import FristTabStyle from "./FristTabStyle";

export default function FristTab({
  countries,
  langList,
  skillsList,
  userName,
  email,
  webSite,
  setName,
  setWebSite,
  setBirthDay,
  setEmail,
  setCountry,
  setSkills,
  setLang,
  country,
  jop,
  setJop,
  setSatrtDate,
}) {
  const [birthDayValue, setbirthDayValue] = useState(
    new Date("2022-07-18T21:11:54")
  );

  const handleDateChange = (newbirthDayValue) => {
    setbirthDayValue(newbirthDayValue);
    setBirthDay(newbirthDayValue);
  };
  const [startValeu, setStartDateValeu] = useState(
    new Date("2022-07-18T21:11:54")
  );

  const handleStartDateChange = (startDateValue) => {
    setStartDateValeu(startDateValue);
    setSatrtDate(startDateValue);
  };

  const [imgfile, uploadimg] = useState([]);
  const imgFilehandler = (e) => {
    uploadimg((imgfile) => [URL.createObjectURL(e.target.files[0])]);
  };

  return (
    <FristTabStyle>
      <div className='row '>
        <div className='col-md-12'>
          <div className='row align-items-end'>
            <div className='col-lg-6 col-md-12'>
              <div className='imgBox'>
                <Avatar
                  alt='Remy Sharp'
                  src={imgfile[0]}
                  sx={{ width: 150, height: 150 }}
                />
                <Button
                  variant='contained'
                  component='label'
                  className='mt-2 mb-4'
                >
                  Upload
                  <input
                    hidden
                    accept='image/*'
                    type='file'
                    onChange={imgFilehandler}
                  />
                </Button>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <TextField
                required
                fullWidth
                id='outlined-basic'
                label='Name'
                type='text'
                variant='outlined'
                value={userName}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                className='mt-4 mb-4'
                fullWidth
                id='outlined-basic'
                label='Jop'
                type='text'
                variant='outlined'
                value={jop}
                onChange={(e) => setJop(e.target.value)}
              />

              <div className='mb-4 dateBoxForm'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label='Start'
                    inputFormat='MM/dd/yyyy'
                    value={startValeu}
                    onChange={handleStartDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12 mb-4'>
          <TextField
            required
            fullWidth
            id='outlined-basic'
            label='Email'
            type='email'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='col-lg-4 col-md-6 col-12 mb-4'>
          <div className=' dateBoxForm'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label='BirthDay'
                inputFormat='MM/dd/yyyy'
                value={birthDayValue}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12 mb-4'>
          <Autocomplete
            id='country-select-demo'
            sx={{ width: "100%" }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            inputValue={country}
            onInputChange={(event, newInputValue) => setCountry(newInputValue)}
            renderOption={(props, option) => (
              <MatrileBox
                component='li'
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading='lazy'
                  width='20'
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=''
                />
                {option.label} ({option.code}) +{option.phone}
              </MatrileBox>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Choose a country'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </div>
        <div className='col-lg-4 col-md-6 col-12 mb-4'>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Web Site'
            type='text'
            value={webSite}
            onChange={(e) => setWebSite(e.target.value)}
            variant='outlined'
          />
        </div>
        <div className='col-lg-4 col-md-6 col-12 mb-4'>
          <Autocomplete
            multiple
            limitTags={2}
            id='langInput'
            onChange={(event, value) => setLang(value)}
            options={langList}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label='language'
                placeholder='Set Language'
              />
            )}
          />
        </div>
        <div className='col-lg-4 col-md-6 col-12 mb-4'>
          <Autocomplete
            multiple
            limitTags={2}
            id='skills'
            onChange={(event, value) => setSkills(value)}
            options={skillsList}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label='Skills' placeholder='skills List' />
            )}
          />
        </div>
      </div>
    </FristTabStyle>
  );
}
