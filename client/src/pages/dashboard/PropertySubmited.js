import React from 'react'
import { Box, CssBaseline, Container } from '@mui/material'
import { useAppContext } from '../../context/appContext'
import Footer from '../../components/ui/footer'
import CircularProgress from '@mui/material/CircularProgress'
import PropertyList from '../../components/PropertyList'

function PropertySubmited() {
  const { property, isLoading, page, totalProperty } = useAppContext()
  console.log(property)

  // useEffect(() => {
  //   getUserProperty()
  //   console.log()
  // }, [])

  if (isLoading) {
    return (
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
        <CircularProgress color="secondary" />
      </Box>
    )
  }

  if ((property.length = 0)) {
    return (
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
        <h2>No Property Submitted...</h2>
      </Box>
    )
  }

  return (
    <div>
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
            <h3>{totalProperty} Property Submited</h3>
            <div>
              {property.map((proper) => {
                return <PropertyList key={proper._id} {...proper} />
              })}
            </div>
          </Box>
          {page}
        </Container>
        <Footer />
      </>
    </div>
  )
}

export default PropertySubmited
