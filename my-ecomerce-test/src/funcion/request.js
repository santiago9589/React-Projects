import { failLogin, startLogin } from "../context/action"
import axios from "axios"

export const request = ({ email, password },dispatch) => {
    axios.post("https://reqres.in/api/register", {
        email: email,
        password: password
    }).then((res) => {
        dispatch(startLogin(res.data))
    }).catch((err) => {
        dispatch(failLogin(err.message))
    })
}
