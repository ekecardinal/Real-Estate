import React, { useState } from 'react'
import { Box, CssBaseline, Container } from '@mui/material'
import data from '../data'
import List from '../components/ui/property/List'
import Footer from '../components/ui/footer'

function Property() {
  const [property] = useState(data)
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" justify="center">
        <h2> Total of {property.length} Properties</h2>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '& > :not(style)': {
              m: '2.5em',
              width: 300,
              height: 328,
            },
          }}
        >
          <List property={property} />
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Property
