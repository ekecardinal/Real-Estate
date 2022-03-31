import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions, Paper } from '@mui/material'

function PropertyList({ id, src, title, offer, state, country, price }) {
  return (
    <Link to={`/property/${id}`} style={{ textDecoration: 'none' }}>
      <Paper elevation={8}>
        <Card sx={{ maxWidth: 300, maxHeight: 350 }}>
          <CardActionArea>
            <CardMedia component="img" height="200" image={src} alt={title} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {state}, {country}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button size="small" color="secondary">
              {price}
            </Button>
            <Paper elevation={0}>
              <Typography
                gutterBottom
                variant="body"
                component="div"
                color="secondary"
              >
                {offer}
              </Typography>
            </Paper>
          </CardActions>
        </Card>
      </Paper>
    </Link>
  )
}

export default PropertyList
