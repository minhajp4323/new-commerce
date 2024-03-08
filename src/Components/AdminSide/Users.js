import React, { useContext } from "react";
// import Img1 from "./user.jpg";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import SideBar from "./SideBar";
import { Data } from "../../Main";

const Users = () => {
  const { userData } = useContext(Data);
  // const initialValue = 0;

  return (
    <div>
      {userData?.length <= 0 ? <h1>No User Found</h1> : <h1>User Details</h1>}
      <div className="d-flex">
        <div>
          <SideBar />
        </div>

        <div className="w-100">
          <div className="table-responsive">
            <MDBTable responsive="sm" striped bordered>
              <MDBTableHead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Username</th>
                  <th scope="col">E-Mail</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {userData.map((item) => (
                  <tr key={item.userId}>
                    <td>
                      <div className="d-flex align-items-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼</div>
                    </td>
                    <td>{item.userName}</td>
                    <td>{item.emailId}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
