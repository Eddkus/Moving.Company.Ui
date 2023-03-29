import React from "react";

export default function form() {
  return (
    <form>
      <div className="form-grid">
        <label>Name:</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          pattern="^(\w\w+)\s(\w+)$"
          required
        ></input>
      </div>

      <div className="form-grid">
        <label>Phone Number:</label>
        <input
          type="text"
          placeholder="98765432"
          pattern="^[0-9]{8}$"
          required
        ></input>
      </div>

      <div className="form-grid">
        <label>Email:</label>
        <input
          type="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="test@example.com"
        ></input>
      </div>

      <div className="form-grid">
        <label>To Address:</label>
        <input type="text" placeholder="Streetington 41" required></input>
      </div>

      <div className="form-grid">
        <label>From Address:</label>
        <input type="text" placeholder="Roadhampton 32" required></input>
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
        <input type="date" min="2023-03-29" required></input>
      </div>

      <div className="form-grid">
        <label>Order Notes:</label>
        <textarea placeholder="Extra info relevant to the order"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
