import React from 'react';
import { Box,Button,Grid,Stack, Container, Typography  } from '@mui/material';
import IconBreadcrumbs from '@/components/base/breadCrump';
import CardLogo from '@/components/cardLogo';
import Tabb from '@/components/createCompanyTab';

const CreatCompanyPage = () => {
    return (
        <Box  sx={{display: 'flex', flexDirection: 'column',backgroundColor:'#f1f2f7'}}>
                <Container maxWidth="xl">
                    <Grid sx={{ mt: 2, mb: {xs: 1, md: 2}  }}>
                        <Typography sx={{fontSize:23,fontWeight:600,color:'#777'}}>ایجاد شرکت جدید</Typography>
                        <IconBreadcrumbs />
                    </Grid>
                    
                    <Grid container my={2} spacing={3}>
                        <Grid item xs={12} md={3} lg={3}>
                          <CardLogo/>
                        </Grid>
                        <Grid item xs={12} md={8} lg={8}>
                            <Tabb/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
}

export default CreatCompanyPage;
