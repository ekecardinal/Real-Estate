import React, { useState, useEffect } from 'react'

import { Tabs, Tab, Button, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@mui/styles'
import PersonIcon from '@mui/icons-material/Person'
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
  tabContainer: {
    marginLeft: 'auto',
  },
  tabCentered: {
    margin: 'auto',
    '&:hover': {},
  },
  tab: {
    ...theme.typography.tab,
    textTransform: 'none',
  },
  button: {
    borderRadius: '50px',
    ...theme.typography.estimate,
  },
}))

function NavTabs() {
  const classes = useStyles()
  const theme = useTheme()

  const [value, setValue] = useState()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const { user, logoutUser } = useAppContext()

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/sell' && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === '/buy' && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === '/contact' && value !== 3) {
      setValue(3)
    }
  }, [value])

  return (
    <>
      <Tabs
        className={classes.tabCentered}
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="Home" className={classes.tab} component={Link} to="/" />
        <Tab
          className={classes.tab}
          label="Sell | Lease"
          component={Link}
          to="/sell"
        />
        <Tab
          className={classes.tab}
          label="Buy / Rent"
          component={Link}
          to="/buy"
        />
        <Tab
          className={classes.tab}
          label="Contact Us"
          component={Link}
          to="/contact"
        />
      </Tabs>
      <div className={classes.tabContainer}>
        <Button
          aria-owns={anchorEl ? 'account-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          variant="contained"
          color="secondary"
          onClick={(event) => handleClick(event)}
          className={classes.button}
          startIcon={<PersonIcon />}
        >
          {!user ? 'Account' : user?.name}
        </Button>
      </div>
      <Menu
        style={{ zIndex: theme.zIndex.modal + 1 }}
        id="account-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
      >
        {!user ? (
          <MenuItem onClick={handleClose} component={Link} to="/register">
            Login / Register
          </MenuItem>
        ) : (
          <>
            <MenuItem onClick={handleClose} component={Link} to="/dashboard">
              Dashboard
            </MenuItem>
            <MenuItem onClick={logoutUser}>Logout</MenuItem>
          </>
        )}
      </Menu>
    </>
  )
}

export default NavTabs
