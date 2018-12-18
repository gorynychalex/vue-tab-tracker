import api from '@/services/api'

export default {
  regiter (credentials) {
    return api().post('register', credentials)
  }
}

// Example:
// AuthenticationService.register({
//  email: 'test@test.com',
//  password: '123456'
// })
//
