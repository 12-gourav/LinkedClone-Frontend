import React from "react";
import img from "../assets/logo.png";
import { Link } from "react-router-dom";
import img1 from "../assets/a.png";
import img2 from "../assets/yug.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Post from "../Components/Post";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Activity = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="profile">
      <div className="containers">
        <div className="top">
          <div className="left">
            <img src={img} alt="img" />
            <h2>Startshorts</h2>
          </div>
          <div className="right">
            <Link to="/" className="box active">
              <span className="icon">
                <i className="bx bx-home"></i>
              </span>
              <span className="title">Home</span>
            </Link>
            <Link className="box">
              <span className="icon">
                <i className="bx bx-user-plus"></i>
              </span>
              <span className="title">Connections</span>
            </Link>
            <Link className="box">
              <span className="icon">
                <i className="bx bxs-buildings"></i>
              </span>
              <span className="title">Jobs</span>
            </Link>
            <Link className="box">
              <span className="icon">
                <i className="bx bx-news"></i>
              </span>
              <span className="title">News</span>
            </Link>
            <Link className="box">
              <span className="icon">
                <i className="bx bx-message-rounded-dots"></i>
              </span>
              <span className="title">Messages</span>
            </Link>
            <Link className="box">
              <span className="icon">
                <i className="bx bx-bell"></i>
              </span>
              <span className="title">Notifications</span>
            </Link>
          </div>
        </div>
        <div className="wrap" style={{ minHeight: "600px" }}>
          <div className="left">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="All Activity" {...a11yProps(0)} />
                  <Tab label="Your Posts" {...a11yProps(1)} />
                  <Tab label="Saverd Posts" {...a11yProps(2)} />
                  <Tab label="Company" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="posts">
                  <Post />
                  <Post />
                  <Post />
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </div>
          <div className="right">fsdfsdfsd</div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
