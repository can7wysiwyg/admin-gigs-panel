import { useEffect, useState } from "react"
import axios from "axios"



function AdminApi() {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsadmin] = useState(false)
    const [highProfile, setHighProfile] = useState('')

    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))

    useEffect(() => {

        if(token) {
         
            const getUser = async() => {
                const res = await axios.get(`https://apigigs.onrender.com/admin/user`, {
                    headers: {Authorization: `Bearer ${token}`}
                })
                setIsLogged(true)

                res.data.admin === 1 ? setIsadmin(true) : setIsadmin(false)
                setHighProfile(res.data._id)

            


            }

            getUser()

        }


    }, [token, highProfile])


    return{
        isLogged: [isLogged, setIsLogged],
        highProfile: [highProfile, setHighProfile],
        isAdmin: [isAdmin, setIsadmin]
        
    }


    
}


export default AdminApi