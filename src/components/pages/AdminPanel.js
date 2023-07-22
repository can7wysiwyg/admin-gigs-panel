import React from 'react';
import "../styles/admin.css"

function AdminPanel() {
  return (
    <div className="bg-light py-5 service-11">
      <div className="container">
        {/* Row */}
        <div className="row">
          {/* Column */}
          <div className="col-md-4 wrap-service11-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="p-4">
                <div className="icon-space">
                  <div  className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant" >T</div>
                </div>
                <a href='/tutors'  className="font-weight-medium" style={{textDecorationLine: "none", fontWeight: "bolder"}}>My Tutors</a>
                <p className="mt-3">section for viewing tutors</p>
              </div>
            </div>
          </div>
          {/* Column */}
          <div className="col-md-4 wrap-service11-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="p-4">
                <div className="icon-space">
                  <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">S</div>
                </div>
                <h6 className="font-weight-medium">Tutors Subjects</h6>
                <p className="mt-3">section for viewing tutor's subjects</p>
              </div>
            </div>
          </div>
          {/* Column */}
          <div className="col-md-4 wrap-service11-box">
            <div className="card card-shadow border-0 mb-4">
              <div className="p-4">
                <div className="icon-space">
                  <div className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">U</div>
                </div>
                <a href="/users" className="font-weight-medium">Users</a>
                <p className="mt-3">Section for viewing just registered users..</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AdminPanel
