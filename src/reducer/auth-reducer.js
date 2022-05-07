export const credentialsReducer = (credentials, {type, payload}) => {
    switch (type) {
        case "EMAIL":
            return {
                ...credentials,
                email: payload,
                isEmailValid: payload.includes("@") ? true : false
            }
  
        case "PASSWORD":
            return {
                ...credentials,
                password: payload
            }
  
        case "FIRST_NAME":
            return {
                ...credentials,
                userName: payload
            }
  
        case "LAST_NAME":
            return {
                ...credentials,
                userLastName: payload
            }
  
        case "EMAIL_CHECK":
            return {
                ...credentials,
                userEmail: payload
            }
  
        case "PASSWORD_CHECK":
            return {
                ...credentials,
                userPassword: payload
            }
  
        case "CONFIRM_PASS_CHECK":
            return {
                ...credentials,
                userConfirmPassword: payload
            }
  
        case "CLEAR_INPUT":
            return {
                ...credentials,
                userName: "",
                userConfirmPassword: "",
                userEmail: "",
                userPassword: "",
                userLastName: ""
            }
  
        case "CLEAR_LOGIN_CREDENTIALS":
            return {
                ...credentials,
                email: "",
                password: ""
            }
  
        default:
            return credentials
  
    }
  }