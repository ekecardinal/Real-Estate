import React, { useState } from 'react'
import { Box, CssBaseline, Container } from '@mui/material'
import data from '../data'
import Footer from '../components/ui/footer'

import PropertyList from '../components/PropertyList'

function Home() {
  const [property] = useState(data)

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" justify="center">
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
          {/* <List property={property} /> */}
          {property.map((properties) => {
            return <PropertyList key={property.id} {...properties} />
          })}
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Home
