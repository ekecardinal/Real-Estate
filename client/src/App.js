import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Property from './pages/Property'
import Header from './components/ui/header'
import theme from './components/ui/Theme'
import Register from './pages/Register'
import ErrorPage from './components/ui/error'

import {
  // Profile,
  // PropertySubmited,
  // SubmitProperty,
  HorizontalTabs,
} from './pages/dashboard'
import ProtectedRoute from './pages/ProtectedRoute'
import PropertyDetails from './pages/PropertyDetails'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute>
                <HorizontalTabs />
              </ProtectedRoute>
            }
          />
          {/* <Route path="profile" element={<Profile />} />
            <Route path="submit-property" element={<SubmitProperty />} />
            <Route path="property-submited" element={<PropertySubmited />} />
          </Route> */}
          <Route
            exact
            path="/property/:id"
            element={
              <ProtectedRoute>
                <PropertyDetails />
              </ProtectedRoute>
            }
          />

          <Route exact path="/sell" element={<Property />} />
          <Route exact path="/buy" component={() => <div>Buy Property</div>} />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<ErrorPage />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
