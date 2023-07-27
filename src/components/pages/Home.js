import { useContext } from "react"
import { GlobalState } from "../../GlobalState"

function Home() {
   
  const state =  useContext(GlobalState)
  const[results] = state.SubjectsApi.results

  console.log(results);





    return(<>

    
    
    </>)
}

export default Home