import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { makeStyles, useTheme } from '@mui/styles'
import { useMediaQuery, useScrollTrigger, Box } from '@mui/material/'
import NavTabs from './NavTabs'
import NavMenuIcon from './NavMenuIcon'

function ElevationScroll(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '0em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0em',
    },
  },
  logo: {
    height: '3em',
    [theme.breakpoints.down('md')]: {
      height: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '1em',
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}))

export default function Header() {
  const classes = useStyles()
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const [value, setValue] = useState()

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/sell' && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === '/buy' && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === '/contact' && value !== 3) {
      setValue(3)
    } else {
      //setValue()
    }
  }, [value])

  return (
    <React.Fragment>
      <ElevationScroll>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <AppBar position="fixed" style={{ zIndex: theme.zIndex.modal + 1 }}>
            <Toolbar disableGutters={false}>
              <a href="/">
                <img
                  alt="company logo"
                  className={classes.logo}
                  src="../logo.png"
                />
              </a>
              {matches ? <NavMenuIcon /> : <NavTabs />}
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
