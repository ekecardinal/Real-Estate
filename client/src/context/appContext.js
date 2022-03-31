import React, { useReducer, useContext } from 'react'

import reducer from './reducer'
import axios from 'axios'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  POST_PROPERTY_BEGIN,
  POST_PROPERTY_SUCCESS,
  POST_PROPERTY_ERROR,
  USER_PROPERTY_BEGIN,
  USER_PROPERTY_SUCCESS,
} from './action'

const user = localStorage.getItem('user')
const token = localStorage.getItem('token')
const userLocation = localStorage.getItem('location')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  isEditing: false,
  editPropertyId: '',
  category: 'Flat',
  request: 'Sell',
  price: '',
  phone: '',
  description: '',
  propertyLocation: userLocation || '',
  property: [],
  totalProperty: 0,
  numOfPages: 1,
  page: 1,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
  })

  //request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser()
        console.log('AUTH ERROR')
      }
      return Promise.reject(error)
    }
  )

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
  }

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser)
      // console.log(response)
      const { user, token, location } = response.data
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      // console.log(error.response)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const { data } = await axios.post('/api/v1/auth/login', currentUser)

      const { user, token, location } = data
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }

  const updateUser = async (currentUser) => {
    console.log(currentUser)
    dispatch({ type: UPDATE_USER_BEGIN })
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser)

      const { user, location, token } = data

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      })
      addUserToLocalStorage({ user, location, token })
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        })
      }
    }
    clearAlert()
  }

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  const postProperty = async () => {
    dispatch({ type: POST_PROPERTY_BEGIN })
    try {
      const {
        category,
        request,
        price,
        propertyLocation,
        phone,
        description,
        // image,
      } = state
      await authFetch.post('/property', {
        category,
        request,
        price,
        propertyLocation,
        phone,
        description,
        // image,
      })
      dispatch({ type: POST_PROPERTY_SUCCESS })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: POST_PROPERTY_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const getUserProperty = async () => {
    let url = `/property/user`
    dispatch({ type: USER_PROPERTY_BEGIN })
    try {
      const { data } = await authFetch(url)
      const { property, totalProperty, numOfPages } = data
      console.log(data)
      dispatch({
        type: USER_PROPERTY_SUCCESS,
        payload: {
          property,
          totalProperty,
          numOfPages,
        },
      })
    } catch (error) {
      console.log(error.response)
      // logoutUser()
    }
    // clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
        handleChange,
        postProperty,
        getUserProperty,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}
export { AppProvider, initialState, useAppContext }
