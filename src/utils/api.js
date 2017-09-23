import 'isomorphic-fetch'
import Frisbee from 'frisbee'

const api = new Frisbee({
  baseURI: 'https://reqres.in/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default api
