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
import { initialState } from './appContext'

// import

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'error',
      alertText: 'Please provide all values!',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      propertyLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Created! Redirecting...',
    }
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,

      showAlert: true,
      alertType: 'error',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      propertyLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting...',
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,

      showAlert: true,
      alertType: 'error',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      propertyLocation: '',
      userLocation: '',
    }
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      propertyLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    }
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,

      showAlert: true,
      alertType: 'error',
      alertText: action.payload.msg,
    }
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }

  if (action.type === POST_PROPERTY_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === POST_PROPERTY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Property Posted',
    }
  }
  if (action.type === POST_PROPERTY_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'error',
      alertText: action.payload.msg,
    }
  }

  if (action.type === USER_PROPERTY_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === USER_PROPERTY_SUCCESS) {
    // console.log('Property: ', action.payload.property)
    return {
      ...state,
      isLoading: false,
      property: action.payload.property,
      totalProperty: action.payload.totalProperty,
      numOfPages: action.payload.numOfPages,
    }
  }

  throw new Error(`no such action:${action.type}`)
}
export default reducer
