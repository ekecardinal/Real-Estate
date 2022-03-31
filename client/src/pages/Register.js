import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
  Link,
  Typography,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { ThemeProvider } from '@mui/material/styles'
import BasicAlert from '../components/Alert'
import { useAppContext } from '../context/appContext'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// const theme = createTheme()

export default function Login() {
  const navigate = useNavigate()
  const [value, setValue] = useState(initialState)

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext()

  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember })
  }

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = value
    if (!password || !email || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }
    if (isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
    // console.log(value)
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <ThemeProvider>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {value.isMember ? 'Login' : 'Register'}
          </Typography>
          {showAlert && <BasicAlert />}
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {!value.isMember && (
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    color="secondary"
                    value={value.name}
                    onChange={handleChange}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="secondary"
                  value={value.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="secondary"
                  value={value.paasword}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              disabled={isLoading}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Button type="button" onClick={toggleMember}>
                  <Typography
                    color="secondary"
                    textTransform="none"
                    variant="body2"
                  >
                    {value.isMember
                      ? 'Not a member yet? Register'
                      : 'Already a member? Login'}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}
