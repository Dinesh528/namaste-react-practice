import React from 'react'
import { Box,Typography,TextField } from '@mui/material'
import UserContext from "../../context/userContext";
import { useContext } from 'react';

function ContextInputUser() {
    const {loggedInUser,setUserInfo} = useContext(UserContext);

  return (
    <div>
        <Box sx={{marginLeft:"1rem"}}>
          <Typography>User Name: </Typography>
          <TextField
            type="text"
            label="User Name"
            value={loggedInUser}
            onChange={(e)=>setUserInfo(e.target.value)}
            />

        </Box>
    </div>
  )
}

export default ContextInputUser