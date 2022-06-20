import * as React from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import './Tab.css'

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const username = localStorage.getItem('user');
  const navigation = useNavigate();
  const logOut = () => {
    localStorage.clear();
    // history.push("/login");
    navigation('/login');
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue)
      navigate('/Create')
    else {
      navigate('/all')
    }

  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} className='tab' onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Blogs" href="/all" />
        <LinkTab label="New Blog" href="/Create" />
        <ul>
          {username && (
            <li>
              Hi! {username.toString()}
            </li>
          )}
          {username && (
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          )}
        </ul>
      </Tabs>

    </Box>

  );
}
