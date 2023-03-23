import { useState } from "react";
import FormInput from "../components/FormInput";
import Navbar from "../components/Navbar";
import "./../App.css";

export default function OrderPage() {
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    fromAddress: "",
    toAddress: "",
    services: "",
    date: "",
    orderNotes: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "John Doe",
      label: "Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "98765432",
      label: "Phone Number",
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "John.Doe@example.com",
      label: "E-mail",
    },
    {
      id: 4,
      name: "fromAddress",
      type: "text",
      placeholder: "Streetington 452",
      label: "From Address",
    },
    {
      id: 5,
      name: "toAddress",
      type: "text",
      placeholder: "Roadhampton 69",
      label: "To Address",
    },
    {
      id: 6,
      name: "services",
      type: "text",
      placeholder: "Moving / Packing / Cleaning",
      label: "Services",
    },
    {
      id: 7,
      name: "orderNotes",
      type: "text",
      placeholder: "Any extra information related to the order",
      label: "Order Notes",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="form">
        <h1>Register an order:</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <label>Date:&emsp;</label>
          <input type="date" min="2023-03-23" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
