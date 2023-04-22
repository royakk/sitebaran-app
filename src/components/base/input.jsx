import React ,{useState} from 'react'
import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
export const Input = (props) => {
 
  const { label, name, formik, multiline, placeholder, required, type} = props;

  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
    <TextField 
    fullWidth
    required={required}
    type={type}
    label={label}
    placeholder={placeholder}
    variant="standard"
    error={
        formik && formik.touched[name] && Boolean(formik.errors[name])
    }
    helperText={
        formik && formik.touched[name] && formik.errors[name]
    }
    {...formik.getFieldProps({ name })}

     multiline={multiline}
    />
    </ThemeProvider>
    </CacheProvider>
  )
}