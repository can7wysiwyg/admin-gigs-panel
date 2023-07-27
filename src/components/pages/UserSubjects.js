import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import _ from "lodash"
import axios from "axios"
import { Modal, Button } from 'react-bootstrap';
import moment from "moment/moment";
import "../styles/usersubjects.css"



const pageSize = 8;


function UserSubjects() {

    const {id } = useParams()
   const state = useContext(GlobalState)
   const [users] = state.UsersApi.users;
   const [paginated, setPaginated] = useState();
   const [currentPage, setCurrentPage] = useState(1);
   const[results, setResults] = useState([])
   const [user, setUser] = useState({});

   useEffect(() => {

    const getPosts = async () => {
        const res = await axios.get(`https://apigigs.onrender.com/subject/show_users/${id}`);
  
        setResults(res.data.subjects);
        setPaginated(_(res.data.subjects).slice(0).take(pageSize).value());
        
      };
  
      getPosts();


   }, [id])


   useEffect(() => {
    if (id) {
      users?.forEach((person) => {
        if (person._id === id) setUser(person);
      });
    }
  }, [id, users]);


  const pageCount = results ? Math.ceil(results.length / pageSize) : 0;



  const pages = _.range(1, pageCount + 1);


  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo -1) * pageSize
    const paginate = _(results).slice(startIndex).take(pageSize).value()
    setPaginated(paginate)


  }


if(results.length === 0) {

    return(<div className="text-center">
    <h3>please wait as user subjects Load......</h3>
    <h4>or maybe user has no subjects...</h4>
    
    
    </div>)
}
   

    return(<>
        
    {
paginated?.map((post) => (

    <UserTuts key={post._id} post={post} user={user} />


))
    }

    
    <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page, index) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={index}
            >
            <p className="page-link" onClick={() => pagination(page)} > {page} </p>
            </li>
          ))}
        </ul>
      </nav>
          
    
    </>)
}


const UserTuts = ({user, post}) => {
    const {id } = useParams()
    const state = useContext(GlobalState)
    const token = state.token
    const[showModal, setShowModal] = useState(false)
    
const deleteSubject = async(event) => {
    event.preventDefault()

  const res =  await axios.delete(`https://apigigs.onrender.com/admin/delete_subject/${post._id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    alert(res.data.msg)

    window.location.href = `/user_subjects/${id}`


}
    return(<>
    <div className="row d-flex align-items-center justify-content-center">
  <div className="col-md-6">
    <div className="mycard">
      <div className="d-flex justify-content-between p-2 px-3">
        <div className="d-flex flex-row align-items-center">
          <img
            src={user.userImage}
            alt={user.fullname}
            width="50"
            className="rounded-circle"
          />
          <div className="d-flex flex-column ml-2">
            <a href={`/person_profile/${user._id}`} className="card-link" style={{textDecoration: "none"}}>
              <span className="font-weight-bold">{user.fullname}</span>
            </a>
            <small className="text-primary">{moment(post.updatedAt).format('LLLL')}</small>
          </div>
        </div>
      </div>

      <div className="p-2">
        <h4 className="text-justify">
          <Link to={`/post_single/${post._id}`} style={{textDecorationLine: "none"}}>
            {post.subjectName}
          </Link>
        </h4>
        <span className="text-justify">MK{post.subjectPrice}</span>
        <p className="text-justify" style={{fontSize: "18px"}}>
          {post.subjectCommentary}
        </p>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-row icons d-flex align-items-center">
            {/* Button trigger modal */}
            <Button variant="secondary" onClick={() => setShowModal(true)}>
              delete subject
            </Button>
          </div>
          <div className="d-flex flex-row muted-color">
            {/* Other content here */}
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>

  {/* Modal */}
  <Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Are You Sure?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Modal content goes here */}
      <Button variant="danger" onClick={deleteSubject}>delete</Button>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShowModal(false)}>
        Close
      </Button>
        </Modal.Footer>
  </Modal>
</div>

     
 
    
    </>)
}


export default UserSubjects