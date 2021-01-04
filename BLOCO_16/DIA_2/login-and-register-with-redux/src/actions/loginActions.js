export const addClient = (client) => {
    return {
        type: 'ADD_CLIENT',
        client,
    }
}

export const login = (boolean) => {
    return ({
      type: 'LOGIN',
      loggedIn: boolean
    })
  }
