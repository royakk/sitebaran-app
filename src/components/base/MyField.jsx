import React ,{useState} from 'react'
import { useField } from '@formiz/core'
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
  
export const MyField = (props) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
  } = useField(props)
  const { label, type, required } = props
  const [isTouched, setIsTouched] = useState(false)
  const showError = !isValid && (isTouched || isSubmitted)

  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
    <TextField 
    required={required}
    type={type}
    filled-basic
    sx={{fontWeight: 500 }}
    label={label} 
    value={value ?? ''}
    onChange={e => setValue(e.target.value)}
    variant="standard"  
    onBlur={() => setIsTouched(true)}
    error={showError && errorMessage }
    helperText={showError && errorMessage }
     
    />
    </ThemeProvider>
    </CacheProvider>
  )
}