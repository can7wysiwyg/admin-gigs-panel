import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Table, Button, Modal, OverlayTrigger, Tooltip, Form, Container, Row, Col } from 'react-bootstrap';
import { GlobalState } from '../../GlobalState';




function Users() {
const[tutors, setTutors] = useState([])



useEffect(() => {

    const getTutors = async() => {
        const res = await axios.get("/auth/users")
        setTutors(res.data)
    }

    getTutors()


}, [])


if(tutors.length === 0) {
    return(<>
    <h1 className='text-center'>tutors are loading man...</h1>
    </>)
}

    return(<>
    
    <h1 style={{textAlign: "center", marginBottom: "2rem"}} >Users</h1>
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
              <td> <a href={`/user_profile/${tutor._id}`}> {tutor.fullname}</a></td>
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
        const state = useContext(GlobalState)
        const token = state.token
        const [showModal, setShowModal] = useState(false);
        const[role, setRole] = useState("")
  
    const handleModalClose = () => {
      setShowModal(false);
    };
  
    const handleEdit = () => {
      
      setShowModal(false);
    };
  
    const handleChange = (event) => {
      setRole(event.target.value)
    }


    const handleSubmit = async(event) => {
      event.preventDefault()

     const res =  await axios.put(`/admin/update_user/${tutor._id}`, {role}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
     })

     alert(res.data.msg)

      window.location.href = "/users"

    }
  
  
  
    const handleDelete = async() => {

      const res = await axios.delete(`/admin/delete_user/${tutor._id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
  
  alert(res.data.msg)
  
  window.location.href = "/tutors"
    
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
          <p>Edit the user's status:</p>
          <Container>
          <Row className="justify-content-md-center">
              <Col xs={12} md={6}>


          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Control
                      type="number"
                      name="role"
                      value={role}
                      onChange={handleChange}
                      placeholder="update user role"
                      min="0" max="1"
                      required
                    />
                  </Form.Group>
                  <Button variant="danger" type="submit">
                    Submit
                  </Button>

              </Form>
              </Col>
            </Row>
              </Container>
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