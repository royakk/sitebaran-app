import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Avatar,
  Grid,
} from "@mui/material";

const CardLogo = () => {
  const [image, setImage] = useState('/no-company-logo.jpg');
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Box sx={{ borderRadius: "10px",backgroundColor:'#fff' }}>
     
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          minHeight: "150px",
          backgroundColor: "#343a40",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      > <Avatar
      sx={{ position: "absolute",verticalAlign:'middle' , width: 66, height: 66,marginTop:'130px' }}
      src={image}
    ></Avatar>
        <Typography variant="h6">شرکت جدید</Typography>
        <Typography variant="h6"> لوگوی سازمان</Typography>
        
      </Stack>
      <Box padding={8} sx={{ display: "flex", justifyContent: "center" ,}}>
        <Button variant="contained" component="label" sx={{backgroundColor:'#00b0e4'}}  >
          انتخاب لوگو
          <input type="file" hidden onChange={onImageChange} />
        </Button>
      </Box>
    </Box>
  );
};

export default CardLogo;
