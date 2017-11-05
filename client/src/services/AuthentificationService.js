import api from '@/services/api'

export default {
  regiter (credentials) {
    return api().post('register', credentials)
  }
}
