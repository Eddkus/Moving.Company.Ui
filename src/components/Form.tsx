import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default function form() {
  const [order, setOrder] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    fromAddress: "",
    toAddress: "",
    currentDate: new Date(),
    orderNotes: "",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setOrder({ ...order, currentDate: e });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(order);
    let config = {
      headers: {
        accept: "text/plain",
      },
    };
    axios
      .post("https://localhost:7285/api/Orders", order, config)
      .then((response) => {
        setOrder({
          name: "",
          phoneNumber: "",
          email: "",
          fromAddress: "",
          toAddress: "",
          currentDate: new Date(),
          orderNotes: "",
        });
        console.log(response);
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          pattern="^([a-zA-z]+)\s([a-zA-Z]+)$"
          required
          value={order.name}
          onChange={handleChange}
        ></input>
      </div>

      <div className="form-grid">
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="98765432"
          pattern="^[0-9]{8}$"
          required
          onChange={handleChange}
          value={order.phoneNumber}
        ></input>
      </div>

      <div className="form-grid">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="test@example.com"
          onChange={handleChange}
          value={order.email}
        ></input>
      </div>

      <div className="form-grid">
        <label>To Address:</label>
        <input
          type="text"
          name="toAddress"
          placeholder="Streetington 41"
          required
          onChange={handleChange}
          value={order.toAddress}
        ></input>
      </div>

      <div className="form-grid">
        <label>From Address:</label>
        <input
          type="text"
          name="fromAddress"
          placeholder="Roadhampton 32"
          required
          onChange={handleChange}
          value={order.fromAddress}
        ></input>
      </div>

      <div className="services">
        <label>Moving:</label>
        <input type="checkbox"></input>

        <label>Packing:</label>
        <input type="checkbox"></input>

        <label>Cleaning:</label>
        <input type="checkbox"></input>
      </div>

      <div className="form-grid">
        <label>Date:</label>
        <DatePicker
          name="currentDate"
          selected={order.currentDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy hh:mm"
          onChange={handleDateChange}
        />
      </div>

      <div className="form-grid">
        <label>Order Notes:</label>
        <textarea
          placeholder="Extra info relevant to the order"
          name="orderNotes"
          onChange={handleChange}
          value={order.orderNotes}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
