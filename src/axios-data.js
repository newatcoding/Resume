import axios from 'axios0';

const instance = axios.create({
    baseURL:'https://react-resume-dc2c2-default-rtdb.firebaseio.com/'
});

export default instance;