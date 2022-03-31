import { createTheme } from '@mui/material/styles'

export default createTheme({
  palette: {
    common: {
      tomato: '#ff6347',
    },
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#ff6347',
    },
    background: {
      paper: '#fff',
      default: '#fff',
      blue: '#00BFFF',
    },
  },
  typography: {
    tab: {
      textTransform: 'none',
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: '1rem',
      fontColor: 'white',
    },
  },
})
