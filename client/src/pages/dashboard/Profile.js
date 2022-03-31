import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { TextField, Grid, CssBaseline, Button, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useAppContext } from '../../context/appContext'
import BasicAlert from '../../components/Alert'

export default function MultilineTextFields() {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !location || !lastName) {
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })
  }

  return (
    <ThemeProvider>
      <Container maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1>Profile</h1>
          {showAlert && <BasicAlert />}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  text="text"
                  defaultValue={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="location"
                  type="text"
                  name="location"
                  defaultValue={location}
                  onChange={(e) => setLocation(e.target.value)}
                  color="secondary"
                />
              </Grid>
            </Grid>
            <Grid justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
                disabled={isLoading}
              >
                {isLoading ? 'Please wait' : 'Save Changes'}
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
