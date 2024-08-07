import React, { useRef, useState } from "react";

function Registration() {
  let [selectedImage, setSelectedImage] = useState("");
  let selectedImageStr;
  let fullName = useRef();
  let fathersName = useRef();
  let mothersName = useRef();
  let dob = useRef();
  let gender = useRef();
  let category = useRef();
  let address = useRef();
  let nationality = useRef();
  let email = useRef();
  let mobileNumber = useRef();

  return (
    <div>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" ref={fullName}></input>
        </div>
        <div>
          <label>Father's Name</label>
          <input type="text" ref={fathersName}></input>
        </div>
        <div>
          <label>Mother's Name</label>
          <input type="text" ref={mothersName}></input>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" ref={dob}></input>
        </div>
        <div>
          <label>Gender</label>
          <input ref={gender}></input>
        </div>
        <div>
          <label>Category</label>
          <input type="text" ref={category}></input>
        </div>
        <div>
          <label>Address</label>
          <textarea type="text" ref={address}></textarea>
        </div>
        <div>
          <label>Nationality</label>
          <input type="text" ref={nationality}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="email" ref={email}></input>
        </div>
        <div>
          <label>Mobile Number</label>
          <input type="number" ref={mobileNumber}></input>
        </div>
        <div>
          <label>Profile Pic</label>
          <input
            type="file"
            onChange={(eo) => {
              selectedImageStr = URL.createObjectURL(eo.target.files[0]);
            }}
          ></input>
          <img className="profile" src={selectedImage}></img>
          <button
            type="button"
            onClick={() => {
              setSelectedImage(selectedImageStr);
            }}
          >
            Preview
          </button>
        </div>
        <div>
          <button type="button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
