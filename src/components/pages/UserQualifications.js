import { useContext, useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import { GlobalState } from "../../GlobalState"

import axios from "axios"
import { Modal, Button, Card } from 'react-bootstrap';

function UserQualifications() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const [users] = state.UsersApi.users;
   const [user, setUser] = useState({});
   const [userQualifications, setUserQualifications] = useState([]);

   useEffect(() => {
    if(id) {
        users?.forEach((person) => {
            if(person._id === id) setUser(person)
        })
    }

}, [id, users])

useEffect(() => {

    const getQualis = async() => {
        const res = await axios.get(`https://apigigs.onrender.com/qualification/show_all/${id}`)

        setUserQualifications(res.data.owner);

    }

    getQualis()

}, [id])

if(userQualifications.length === 0) {
    return(<>
    <h1 className="text-center">{user.fullname} has no qualifications</h1>
    
    </>)
}






    return(<>
    <h4 style={{textAlign: "center", fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "2rem"}}>these are qualifications of <span style={{color: "red"}}> {user.fullname} </span> </h4>

{
    userQualifications?.map((userQualification, index) => (
        <div key={index}>
        <DisplayToAdmin userQualification={userQualification} />
        </div>
    ))
}
    
    
    </>)
}


const DisplayToAdmin = ({userQualification}) => {
    const{id} = useParams()
    const state = useContext(GlobalState)
    const token = state.token
    const[showModal, setShowModal] = useState(false)

    
const deleteQualification = async(event) => {

    event.preventDefault()

  const res =  await axios.delete(`https://apigigs.onrender.com/admin/delete_qualification/${userQualification._id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    alert(res.data.msg)

    window.location.href = `/user_qualifications/${id}`



}
    

    return(<div style={{marginBottom: "2rem"}}>
    <div className="col-md-6 mx-auto text-center">
      <Card>
        <Card.Img
          src={userQualification.qualificationImage}
          style={{ width: "100%", height: "100%" }}
          variant="top"
        />
        <Card.Body>
          <Card.Title as="div">
            qualification name: {userQualification.qualification}
          </Card.Title>
          <Card.Text as="p">my Specialty: {userQualification.tutorSpecialty1}</Card.Text>
          <Card.Text as="p"> {userQualification.tutorSpecialty2}</Card.Text>
          <Card.Text as="p"> {userQualification.tutorSpecialty3}</Card.Text>
            <Card.Link href={`/user_profile/${id}`} className="d-block p-2">
            back to profile{" "}
          </Card.Link>

          <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-row icons d-flex align-items-center">
            {/* Button trigger modal */}
            <Button variant="secondary" onClick={() => setShowModal(true)}>
              delete qualification
            </Button>
          </div>
          </div>

        </Card.Body>
      </Card>
    </div>
    
    {/* Modal */}
  <Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Are You Sure?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Modal content goes here */}
      <Button variant="danger" onClick={deleteQualification}>delete</Button>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShowModal(false)}>
        Close
      </Button>
        </Modal.Footer>
  </Modal>
    
    
    </div>)
}





export default UserQualifications