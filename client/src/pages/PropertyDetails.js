import React from 'react'
import { useParams } from 'react-router-dom'
import CardMedia from '@mui/material/CardMedia'
import { Box, Paper, Container, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

import datas from '../data.js'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'secondary',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function PropertyDetails() {
  const { id } = useParams()
  const viewProperty = datas.filter((data) => data.id == id)
  const property = Object.assign({}, ...viewProperty)
  console.log(property)

  return (
    <div>
      <Container maxWidth="lg" justify="center">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '& > :not(style)': {
              mt: '2.5em',
            },
          }}
        >
          <CardMedia
            component="img"
            height="500"
            image={`/${property.src}`}
            alt={property.title}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '& > :not(style)': {
              mt: '2.5em',
              mb: '2.5em',
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4} md={2}>
              <Item>
                <h2>{property.offer}</h2>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <h2>{property.title}</h2>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <h2>
                  {property.state}, {property.country}
                </h2>
              </Item>
            </Grid>
            <Grid item xs={6} md={2}>
              <Item>
                <h2>{property.price}</h2>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default PropertyDetails
