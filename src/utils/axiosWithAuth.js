import axios from 'axios';

const axiosWithAuth = () => {

    const token = localStorage.getItem("token");

    return (
        axios.create({
            headers: { authorization: token },
            baseURL: 'https://potluck3backend.herokuapp.com/api'
        })
    )
}

export default axiosWithAuth;