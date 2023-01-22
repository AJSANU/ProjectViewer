import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';




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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example" 
        textColor="secondary"
        indicatorColor="secondary"
        centered
        >
        <a
          href="https://github.com/AJSANU"
          target="_blank"
          color='pink'
        >
            <Tab icon={<GithubIcon />} label="Github" {...a11yProps(0)}/>
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-jha-2135b1184/"
          target="_blank"
          color='pink'
        >
             <Tab icon={<LinkedinIcon />} label="LinkedIn" {...a11yProps(1)} />
        </a>
        <a
          href="https://www.instagram.com/ajfrontend/"
          target="_blank"
          color='pink'
        >
            <Tab icon={<InstagramIcon />} label="Instagram" {...a11yProps(2)} />
        </a>
        <a
          href="https://t.me/s/placemenaprep?before=279"
          target="_blank"
          color='pink'
        >
             <Tab icon={<TelegramIcon />} label="Instagram" {...a11yProps(3)} />
        </a>
        <a
          href="https://www.youtube.com/@placementstuffscs-it6515/featured"
          target="_blank"
          color='pink'
        >
          <Tab icon={<YouTubeIcon />} label="You Tube" {...a11yProps(3)} />
        </a>
        </Tabs>
      </Box>
    </Box>
  );
}