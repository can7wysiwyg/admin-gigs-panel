import React, { useContext, useEffect, useState } from 'react';
import "../styles/userprofile.css"
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import axios from 'axios';

const UserProfile = () => {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const token = state.token
   const[single, setSingle] = useState({})

   useEffect(() => {

    const getSingle = async () => {

        const res = await axios.get(`https://apigigs.onrender.com/admin/single_user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setSingle(res.data.user)
        
    }
    getSingle()


   }, [id, token])


  return (
    <div className="container d-flex justify-content-center skeleton">
      <div className="card mt-5 pb-3 kard">
        <div className="media">
          <img src={single.userImage} className="mr-3" height="80" alt="Profile" />
          <div className="media-body">
            <h5 className="mt-1 mb-0">{single.fullname}</h5>
            <span className="text-muted">{single.username}</span>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3">
          <div className="d-flex flex-row align-items-center">
            <i className="fas fa-phone"></i>
            <div className="d-flex flex-row align-items-start ml-3">
              <span>{single.phoneNumber}</span>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3 sample">
          <div className="d-flex flex-row align-items-center">
            <i className="fas fa-envelope"></i>
            <div className="d-flex flex-row align-items-start ml-3">
              <span>{single.email}</span>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3">
          <div className="d-flex flex-row align-items-center">
            <i className="fas fa-lock"></i>
            <div className="d-flex flex-row align-items-start ml-3">
              <span>{single.securityAnswer}</span>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>


        <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3">
          <div className="d-flex flex-row align-items-center">
            <i className="fas fa-book"></i>
            <div className="d-flex flex-row align-items-start ml-3">
              <a href={`/user_subjects/${single._id}`} style={{textDecoration: "none"}}>subjects</a>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>



        <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3">
          <div className="d-flex flex-row align-items-center">
            <i className="fas fa-certificate"></i>
            <div className="d-flex flex-row align-items-start ml-3">
              <a href={`/user_qualifications/${single._id}`} style={{textDecoration: "none"}}>qualifications</a>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>





        {/* Social Media Icons */}
        <div className="d-flex flex-row justify-content-center p-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon mr-3"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon mr-3"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
     );
};

export default UserProfile;


