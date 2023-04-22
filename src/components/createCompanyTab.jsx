import * as React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Divider from "@mui/material/Divider";
import { Input } from "./base/input";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import EmailIcon from "@mui/icons-material/Email";
import ComputerIcon from "@mui/icons-material/Computer";
import InputMask from "react-input-mask";
import SaveIcon from "@mui/icons-material/Save";
export default function Tabb() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Formik
      initialValues={{
        title: "",
        companyName: "",
        sabt: "",
        discription: "",
        country: "",
        province: "",
        city: "",
        address: "",
        postalCode: "",
        tell: "",
        fax: "",
        email: "",
        site: "",
      }}
      validateOnBlur={false}
      validateOnMount={false}
      validationSchema={Yup.object({
        title: Yup.string().required("عنوان شرکت الزامی"),

        companyName: Yup.string().required("نام شرکت الزامی"),

        sabt: Yup.string().required("شماره ثبت الزامی"),
      })}
      onSubmit={async (values) => {
        console.log("Valueee", values);
        alert(JSON.stringify(values));
      }}
    >
      {(propsFormik) => (
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#FFF",
            padding: 5,
          }}
        >
          <Typography variant="h5">مشخصات شرکت/سازمان</Typography>
          <Grid container spacing={3}>
            <Grid item my={2} xs={12} sm={12} md={4} lg={4} xl={4}>
              <Input
                name="title"
                placeholder="عنوان(شرکت یا سازمان)"
                type="text"
                formik={propsFormik}
              />
            </Grid>
            <Grid item my={2} xs={12} sm={12} md={4} lg={4} xl={4}>
              <Input
                name="companyName"
                placeholder="نام شرکت,فروشگاه"
                type="text"
                formik={propsFormik}
              />
            </Grid>
            <Grid item my={2} xs={12} sm={12} md={4} lg={4} xl={4}>
              <Input
                name="sabt"
                placeholder="شماره ثبت"
                type="text"
                formik={propsFormik}
              />
            </Grid>
            <Grid item my={2} xs={12} sm={12} md={12}>
              <Input
                name="discription"
                placeholder="توضیحات"
                type="text"
                formik={propsFormik}
                multiline={true}
              />
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: "2rem" }} />
          <Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  centered
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label="اطلاعات آدرس"
                    icon={<HomeIcon />}
                    iconPosition="start"
                    value="1"
                  />
                  <Tab
                    label="اطلاعات تماس"
                    icon={<LocalPhoneIcon />}
                    iconPosition="start"
                    value="2"
                  />
                </TabList>
              </Box>

              <Stack mt={5}>
                <Form
                  style={{ width: "100%" }}
                  onSubmit={propsFormik.handleSubmit}
                >
                  <TabPanel value="1">
                    <Grid container spacing={2}>
                      <Grid item my={2} xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Input
                          name="country"
                          placeholder=" کشور"
                          type="text"
                          formik={propsFormik}
                        />
                      </Grid>
                      <Grid item my={2} xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Input
                          name="province"
                          placeholder="استان "
                          type="text"
                          formik={propsFormik}
                        />
                      </Grid>
                      <Grid item my={2} xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Input
                          name="city"
                          placeholder="شهر "
                          type="text"
                          formik={propsFormik}
                        />
                      </Grid>
                      <Grid item my={2} xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Input
                          name="address"
                          placeholder="آدرس"
                          type="text"
                          formik={propsFormik}
                        />
                      </Grid>
                      <Grid item my={2} xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Input
                          name="postalCode"
                          placeholder=" کدپستی"
                          type="text"
                          formik={propsFormik}
                        />
                      </Grid>
                    </Grid>
                  </TabPanel>

                  <TabPanel value="2">
                    <Grid container spacing={1}>
                      <Grid item my={2} xs={12} sm={12} md={6} lg={6}>
                        <Typography>شماره تلفن</Typography>
                        <LocalPhoneIcon />
                        <InputMask
                          mask="021-99999999"
                          disabled={false}
                          maskChar=" "
                          onChange={propsFormik.handleChange}
                          value={propsFormik.values.tell}
                        >
                          {() => (
                            <TextField
                              name="tell"
                              placeholder="021-99999999 مثال"
                              type="text"
                              variant="standard"
                              fullWidth
                            />
                          )}
                        </InputMask>
                      </Grid>
                      <Grid item my={2} xs={12} sm={12} md={6} lg={6}>
                        <Typography>شماره فکس</Typography>
                        <LocalPrintshopIcon />
                        <Input
                          name="fax"
                          placeholder="فکس"
                          type="text"
                          formik={propsFormik}
                        />
                      </Grid>
                      <Grid item my={2} xs={12} sm={12} md={6} lg={6}>
                        <Typography> آدرس ایمیل</Typography>
                        <EmailIcon />
                        <Input
                          name="email"
                          placeholder="example@example.com "
                          type="text"
                          formik={propsFormik}
                        />
                      </Grid>
                      <Grid item my={2} xs={12} sm={12} md={6} lg={6}>
                        <Typography>آدرس وبسایت</Typography>
                        <ComputerIcon />
                        <InputMask
                          mask="https://**********"
                          maskChar=" "
                          onChange={propsFormik.handleChange}
                          value={propsFormik.values.site}
                        >
                          {() => (
                            <TextField
                              name="site"
                              placeholder="https://example.com"
                              type="text"
                              variant="standard"
                              fullWidth
                            />
                          )}
                        </InputMask>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <Box
                    my={2}
                    p={3}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#343d45 " }}
                      type="submit"
                    >
                      <SaveIcon />
                      افزودن شرکت
                    </Button>
                  </Box>
                </Form>
              </Stack>
            </TabContext>
          </Box>
        </Box>
      )}
    </Formik>
  );
}
