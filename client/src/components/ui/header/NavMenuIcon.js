import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  IconButton,
  List,
  SwipeableDrawer,
  ListItem,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from '@mui/styles'
import { useAppContext } from '../../../context/appContext'

const useStyles = makeStyles((theme) => ({
  drawIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0.50em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0em',
    },
  },
}))

function NavMenuIcon() {
  const classes = useStyles()
  const { user, logoutUser } = useAppContext()
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/sell"
          >
            <ListItemText disableTypography>Sell / Lease</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/buy"
          >
            <ListItemText disableTypography>Buy / Rent</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/contact"
          >
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
          {!user ? (
            <ListItem
              onClick={() => setOpenDrawer(false)}
              divider
              button
              component={Link}
              to="/register"
            >
              <ListItemText disableTypography>Login</ListItemText>
            </ListItem>
          ) : (
            <>
              <ListItem
                onClick={() => setOpenDrawer(false)}
                divider
                button
                component={Link}
                to="/dashboard"
              >
                <ListItemText disableTypography>Dashboard</ListItemText>
              </ListItem>
              <ListItem onClick={logoutUser} divider button>
                <ListItemText disableTypography>Logout</ListItemText>
              </ListItem>
            </>
          )}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawIconContainer}
        style={{ marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default NavMenuIcon
