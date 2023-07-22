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

        const res = await axios.get(`/admin/single_user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setSingle(res.data.user)
        
    }
    getSingle()


   }, [id, token])

console.log(single);
  return (
    <div className="container d-flex justify-content-center skeleton">
      <div className="card mt-5 pb-3 kard">
        <div className="media">
          <img src={single.userImage} className="mr-3" height="80" alt="Profile" />
          <div className="media-body">
            <h5 className="mt-1 mb-0">{single.fullname}</h5>
            <span className="text-muted">{single.email}</span>
            
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3">
          <div className="d-flex flex-row align-items-center">
            <i className="fas fa-suitcase"></i>
            <div className="d-flex flex-row align-items-start ml-3">
              <span>Upcoming trips</span>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3 sample">
          <div className="d-flex flex-row align-items-center">
            <i className="fas fa-bell preview"></i>
            <div className="d-flex flex-row align-items-start ml-3">
              <span>Notification settings</span>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <i className="fas fa-angle-right preview"></i>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3">
          <div className="d-flex flex-row align-items-center">
            <i className="fas fa-money-bill-wave-alt"></i>
            <div className="d-flex flex-row align-items-start ml-3">
              <span>Payment history</span>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;


