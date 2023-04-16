import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const CustomerList = () => {
    const [customer, setCustomer] = useState([]);
  
    useEffect(() => {
      getCustomers();
    }, []);

const getCustomers = async () =>{
    const response = await axios.get("http://localhost:5000/customer");
    setCustomer(response.data);
}
const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/customer/${id}`);
      getCustomers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="column mt-5 is-left">
        <h1>Customer Page</h1>
   <div className="column mt-5 is-centered">
    <div className="colum is-half">

        <Link to={`add`} className="button is-success">
        + Add New Customer
        </Link>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {customer.map((customer, index) =>(
                <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>
                    <Link
                    to={`edit/${customer.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteCustomer(customer.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
                </tr>
               ))}
               
            </tbody>
        </table>
    </div>
   </div>
   </div>
  )
}

export default CustomerList