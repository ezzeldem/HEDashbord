import React from "react";
import TextField from "@mui/material/TextField";

export default function SecondTab({
  aboutFiled,
  setAboutFiled,
  setFeedBack,
  feedBack,
  setFaceBook,
  faceBook,
  linkedIn,
  setLinkedIn,
  gitHub,
  setGitHub,
}) {
  return (
    <div className='row'>
      <div className='col-12 mb-4'>
        <TextField
          fullWidth
          id='aboutFiled'
          label='About'
          type='text'
          value={aboutFiled}
          onChange={(e) => setAboutFiled(e.target.value)}
        />
      </div>
      <div className='col-12 mb-4'>
        <TextField
          fullWidth
          id='feedback'
          label='Feed Back'
          type='text'
          value={feedBack}
          onChange={(e) => setFeedBack(e.target.value)}
        />
      </div>
      <div className='col-md-4 col-12 mb-4'>
        <TextField
          fullWidth
          id='faceBook'
          label='FaceBook'
          type='text'
          value={faceBook}
          onChange={(e) => setFaceBook(e.target.value)}
        />
      </div>
      <div className='col-md-4 col-12 mb-4'>
        <TextField
          fullWidth
          id='linkedIn'
          label='LinkedIn'
          type='text'
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
        />
      </div>
      <div className='col-md-4 col-12 mb-4'>
        <TextField
          fullWidth
          id='gitHub'
          label='GitHub'
          type='text'
          value={gitHub}
          onChange={(e) => setGitHub(e.target.value)}
        />
      </div>
    </div>
  );
}
