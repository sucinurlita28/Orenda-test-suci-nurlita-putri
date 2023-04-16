import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCustomer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect (() => {
    getCustomersById();
  },);

  const updateCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/customer/${id}`, {
        name,
        phone,
        email,
        address,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomersById = async () => {
    const response = await axios.get(`http://localhost:5000/customer/${id}`);
    setName(response.data.name);
    setPhone(response.data.phone);
    setEmail(response.data.email);
    setAddress(response.data.address);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateCustomer}>
          <div className="field">
            <label className="label">Customer Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomer;