import * as React from 'react'
import Box from '@mui/material/Box'
import {
  TextField,
  Grid,
  CssBaseline,
  Button,
  Container,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { useAppContext } from '../../context/appContext'
import BasicAlert from '../../components/Alert'

export default function PostProperty() {
  const {
    isLoading,
    showAlert,
    displayAlert,
    isEditing,
    category,
    request,
    price,
    phone,
    description,
    propertyLocation,
    handleChange,
    // image,
    postProperty,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !category ||
      !request ||
      !price ||
      !propertyLocation ||
      !phone ||
      !description
      // !image
    ) {
      displayAlert()
      return
    }
    if (isEditing) {
      return
    }
    postProperty()
    // console.log('create job')
  }

  const handlePropertyInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <ThemeProvider>
      <Container maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1>Post Property</h1>

          {/* Alert */}
          {showAlert && <BasicAlert />}

          <Box
            component="form"
            encType="multipart/form-data"
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              {/* Category */}
              <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="category"
                  defaultValue={category}
                  onChange={handlePropertyInput}
                  fullWidth
                  color="secondary"
                >
                  <MenuItem value="Store">Store</MenuItem>
                  <MenuItem value="Office">Office</MenuItem>
                  <MenuItem value="Under Developed Land">
                    Under developed land
                  </MenuItem>
                  <MenuItem value="Hostel Apartment">Hostel Apartment</MenuItem>
                  <MenuItem value="Serviced Apartment">
                    Serviced Apartment
                  </MenuItem>
                  <MenuItem value="Flat">Flat</MenuItem>
                  <MenuItem value="Bungalow">Bungalow</MenuItem>
                </Select>
              </Grid>

              {/* Request */}
              <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-label">Request</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="request"
                  onChange={handlePropertyInput}
                  defaultValue={request}
                  fullWidth
                  color="secondary"
                >
                  <MenuItem value="Sell">Sell</MenuItem>
                  <MenuItem value="Lease">Lease</MenuItem>
                  <MenuItem value="Rent">Rent</MenuItem>
                </Select>
              </Grid>

              {/* Price */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="price"
                  type="text"
                  name="price"
                  defaultValue={price}
                  onChange={handlePropertyInput}
                  color="secondary"
                />
              </Grid>

              {/* Location */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="location"
                  type="text"
                  name="propertyLocation"
                  defaultValue={propertyLocation}
                  onChange={handlePropertyInput}
                  color="secondary"
                />
              </Grid>

              {/* Phone No. */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone No."
                  type="phone"
                  name="phone"
                  defaultValue={phone}
                  onChange={handlePropertyInput}
                  color="secondary"
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  onChange={handlePropertyInput}
                  type="text"
                  name="description"
                  defaultValue={description}
                  color="secondary"
                />
              </Grid>

              {/* Input Image */}
              <Grid item>
                Upload Property Image // <input type="file" name="image" />
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              color="secondary"
              disabled={isLoading}
            >
              Post Property
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
