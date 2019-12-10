import axios from 'axios'

const server = axios.create({
  timeout: 5000
})

export default server;
