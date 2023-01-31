import RegisterPage from "./registerPage";
import { useEffect, useState } from "react";
import Axios from "axios";

import { FaRegTrashAlt } from "react-icons/fa";
import { BiHighlight } from "react-icons/bi";

function App() {
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/studentInfo")
      .then((res) => setStudentInfo(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id, e) => {
    console.log(id);
    Axios.delete(`http://localhost:8000/studentInfo/${id}`)
      .then((res) => setStudentInfo(res.data))
      .catch((error) => console.log(error));
    window.location.reload();
  };

  const handleEdit = () => {
    console.log("edit click");
  };
  return (
    <>
      <div className="container">
        <RegisterPage />
        <br />
        <h1>student infos</h1>
        {studentInfo.map((data) => {
          console.log("this is fromstudent info", studentInfo);
          const { _id, name, email, phone, address } = data;
          return (
            <div className="row">
              <div
                className="card shadow p-3 mb-5 rounded col-md-2"
                style={{ width: "20rem" }}
              >
                <p>{_id}</p>
                <div className="card-body">
                  <h5 className="card-title">Name: {name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Email: {email}
                  </h6>
                  <p className="card-text">Phone: {phone}</p>
                  <p className="card-text">Address: {address}</p>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(data._id, e)}
                  >
                    <FaRegTrashAlt /> DELETE
                  </button>
                  <br />
                  <br />
                  <button
                    onClick={handleEdit}
                    type="button"
                    className="btn btn-primary"
                    ata-bs-toggle="modal" data-bs-target="#exampleModal"
                  >
                    EDIT
                    <BiHighlight />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
