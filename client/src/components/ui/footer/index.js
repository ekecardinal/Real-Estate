import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Grid, Hidden } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  footer: {
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    zIndex: 1302,
    position: 'relative',
    marginTop: '2em',
  },
  footerLogo: {
    width: '10em',
    [theme.breakpoints.down('md')]: {
      width: '8em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '5em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '1em',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  icon: {
    height: '2em',
    width: '2em',
    margin: '0.5em',
    [theme.breakpoints.down('xs')]: {
      height: '1em',
      width: '1em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item style={{ margin: '3em' }}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: '3em' }}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/sell" className={classes.link}>
                Sell / Lease
              </Grid>
              <Grid item component={Link} to="/buy" className={classes.link}>
                Buy / Rent
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: '3em' }}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/login" className={classes.link}>
                Login
              </Grid>
              <Grid
                item
                component={Link}
                to="/register"
                className={classes.link}
              >
                Register
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ margin: '3em' }}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/conact" className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src="./logo2.png"
        alt="realestate.com logo"
        className={classes.footerLogo}
      />
      <Grid
        container
        justifyContent="flex-end"
        // spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="./instagram.svg"
            alt="instagram icon"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="./facebook.svg"
            alt="instagram icon"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="./twitter.svg"
            alt="instagram icon"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  )
}
