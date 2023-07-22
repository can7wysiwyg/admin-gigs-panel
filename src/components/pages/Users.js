import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';




function Users() {
const[tutors, setTutors] = useState([])



useEffect(() => {

    const getTutors = async() => {
        const res = await axios.get("/auth/users")
        setTutors(res.data)
    }

    getTutors()


}, [])
console.log(tutors);

if(tutors.length === 0) {
    return(<>
    <h1 className='text-center'>tutors are loading man...</h1>
    </>)
}

    return(<>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tutors.map((tutor) => (
      tutor.role === 0 ?      <tr key={tutor._id}>
              <td>
                <img src={tutor.userImage} alt={tutor.fullname} style={{ width: '50px' }} />
              </td>
              <td>{tutor.fullname}</td>
              <td>
                {tutor.email}
              </td>
              <td>
                <Buttons tutor={tutor} />
              </td>
            </tr> : ""
          ))}
        </tbody>
      </Table>

    
    
    
    </>)
}

const Buttons = ({tutor}) => {
    
        const [showModal, setShowModal] = useState(false);
  
    const handleModalClose = () => {
      setShowModal(false);
    };
  
    const handleEdit = () => {
      
      setShowModal(false);
    };
  
  
  
  const handleDelete = async() => {
    
  }
  
  
  
    const deleteButtonTooltip = <Tooltip id="delete-tooltip">Delete</Tooltip>;
  
  
    return(<>
  
  
  <Button variant="primary" size="md" className="mr-2 mb-2 mb-md-0" onClick={() => setShowModal(true)}>
    Edit
  </Button>
  
  <OverlayTrigger placement="top" overlay={deleteButtonTooltip}>
    <Button variant="danger" size="md" onClick={handleDelete}>
      Delete
    </Button>
  </OverlayTrigger>
  
  
        {/* Modal */}
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Manage User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>Edit the user's info:</p>
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
  
  
    
    </>)
  }
  



export default Users