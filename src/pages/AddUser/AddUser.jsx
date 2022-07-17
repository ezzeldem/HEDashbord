import React, { useState } from "react";
import AddUserStyle from "./AddUserStyle";
import PageHeader from "../../components/PageHeader/PageHeader";
import Box from "../../components/Box/Box";
import Button from "@mui/material/Button";
import { countries, langList, skillsList } from "../../ ../../dummyData";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FristTab from "./FristTab/FristTab";
// tabs
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SecondTab from "./SecondTab";
// redux
import { useDispatch } from "react-redux";
// alert

import Snackbar from "@mui/material/Snackbar";

export default function AddUser() {
  const [tabeVlaue, setTabeVlaue] = useState("fristTab");
  const handleTabeValue = (event, newtabeVlaue) => {
    setTabeVlaue(newtabeVlaue);
  };

  // useDispatch
  const dispatch = useDispatch();

  // input state
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jop, setJop] = useState("");
  const [birthDayField, setBirthDay] = useState("");
  const [startDate, setSatrtDate] = useState("");
  const [webSite, setWebSite] = useState("");
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState([]);
  const [lang, setLang] = useState([]);
  const [aboutFiled, setAboutFiled] = useState("");
  const [feedBack, setFeedBack] = useState("");
  const [faceBook, setFaceBook] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");

  // alert
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // add user function
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserData = {
      id: Math.random(),
      name: userName,
      country: country,
      email: email,
      age: birthDayField,
      jop: jop,
      states: "online",
      feedBack: feedBack,
      lang: lang,
      skills: skills,
      about: aboutFiled,
      socialMedia: [
        {
          faceBook: faceBook,
          linkedin: linkedIn,
          gitHup: gitHub,
        },
      ],
      detailsList: [
        {
          webSite: webSite,
          start: startDate,
        },
      ],
    };

    // dispatch(insertUser(newUserData));

    setName("");
    setEmail("");
    setBirthDay("");
    setSatrtDate("");
    setJop("");
    setWebSite("");
    setCountry("");
    setSkills([]);
    setLang([]);
    setFeedBack("");
    setAboutFiled("");
    setFaceBook("");
    setLinkedIn("");
    setGitHub("");
  };

  return (
    <AddUserStyle>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='You add new User'
      />
      <PageHeader title='Add User' />
      <Box title='Basic Information'>
        <form onSubmit={handleAddUser}>
          <TabContext value={tabeVlaue}>
            <div className='row'>
              <div className='col-md-12'>
                <TabList
                  onChange={handleTabeValue}
                  aria-label='lab API tabs example'
                >
                  <Tab label='information' value='fristTab' />
                  <Tab label='More Details' value='secondTab' />
                </TabList>
              </div>
            </div>
            <TabPanel value='fristTab'>
              <FristTab
                countries={countries}
                langList={langList}
                skillsList={skillsList}
                userName={userName}
                email={email}
                birthDayField={birthDayField}
                country={country}
                skills={skills}
                lang={lang}
                webSite={webSite}
                jop={jop}
                setName={setName}
                setEmail={setEmail}
                setBirthDay={setBirthDay}
                setWebSite={setWebSite}
                setCountry={setCountry}
                setSkills={setSkills}
                setLang={setLang}
                setJop={setJop}
                setSatrtDate={setSatrtDate}
              />
            </TabPanel>
            <TabPanel value='secondTab'>
              <SecondTab
                aboutFiled={aboutFiled}
                feedBack={feedBack}
                setFeedBack={setFeedBack}
                setAboutFiled={setAboutFiled}
                gitHub={gitHub}
                setGitHub={setGitHub}
                setFaceBook={setFaceBook}
                faceBook={faceBook}
                linkedIn={linkedIn}
                setLinkedIn={setLinkedIn}
              />
            </TabPanel>
          </TabContext>
          <div className='row'>
            <div className='col-md-12'>
              <Button
                variant='contained'
                type='submit'
                endIcon={<AddOutlinedIcon />}
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      </Box>
    </AddUserStyle>
  );
}
