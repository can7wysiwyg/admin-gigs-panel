import axios from "axios";
import { useEffect, useState } from "react";


function SubjectsApi() {
    const[results, setResults] = useState([])


    useEffect(() => {


        const getSubjects = async() => {

            const res = await axios.get("https://apigigs.onrender.com/subject/show_all")
            setResults(res.data.subject)
        }


        getSubjects()



    }, [])

    return{
        results: [results, setResults]
    }

}

export default SubjectsApi