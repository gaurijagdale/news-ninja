import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import PropTypes from 'prop-types'

export class Nav extends Component {

  render() {
    return (
      <div className=' py-5'>
        <Box component="nav" aria-label="My site"
          sx={{
            flexGrow: 1,

          }}>
          <List role="menubar" orientation="horizontal"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component={Link}
                to="/"
                aria-label="Home"
              >
                <Home />
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton role="menuitem" component={Link}
                to="/buisness">
                Buisness
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton role="menuitem" component={Link}
                to="/entertainment">
                Entertainment
              </ListItemButton>
              <ListDivider />
            </ListItem>
            <ListItem role="none">
              <ListItemButton role="menuitem" component={Link}
                to="/general">
                General
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton role="menuitem" component={Link}
                to="/health">
                Health
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton role="menuitem" component={Link}
                to="/science">
                Science
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton role="menuitem" component={Link}
                to="/sports">
                Sports
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton role="menuitem" component={Link}
                to="/technology">
                Technology
              </ListItemButton>
            </ListItem>
            {/* <ListDivider />
            <ListItem role="none">
              <ListItemButton role="menuitem" component="a" href="#horizontal-list">
                About
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </div>
    )
  }
}

export default Nav
