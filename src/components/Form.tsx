import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import SubmitButton from "./SubmitButton";

export default function form() {
  const [order, setOrder] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    fromAddress: "",
    toAddress: "",
    movingService: false,
    packingService: false,
    cleaningService: false,
    currentDate: new Date(),
    orderNotes: "",
  });

  const handleChange = (e: any) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e: any) => {
    setOrder({ ...order, currentDate: e });
  };

  const hangleCheckboxChange = (e: any) => {
    setOrder({ ...order, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://localhost:7285/api/Orders", order)
      .then((response) => {
        setOrder({
          name: "",
          phoneNumber: "",
          email: "",
          fromAddress: "",
          toAddress: "",
          movingService: false,
          packingService: false,
          cleaningService: false,
          currentDate: new Date(),
          orderNotes: "",
        });
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

      <div className="services-label">
        <label>Services:</label>
        <div className="services">
          <label>Moving:</label>
          <input
            type="checkbox"
            name="movingService"
            onChange={hangleCheckboxChange}
          ></input>

          <label>Packing:</label>
          <input
            type="checkbox"
            name="packingService"
            onChange={hangleCheckboxChange}
          ></input>

          <label>Cleaning:</label>
          <input
            type="checkbox"
            name="cleaningService"
            onChange={hangleCheckboxChange}
          ></input>
        </div>
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
          dateFormat="MMMM d, yyyy HH:mm"
          onChange={handleDateChange}
        />
      </div>

      <div className="form-grid">
        <label>Order Notes:</label>
        <textarea
          maxLength={75}
          placeholder="Extra info relevant to the order"
          name="orderNotes"
          onChange={handleChange}
          value={order.orderNotes}
        ></textarea>
      </div>

      <SubmitButton></SubmitButton>
    </form>
  );
}
