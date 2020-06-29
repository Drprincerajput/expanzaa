import React from "react";
import { MdSend } from "react-icons/md";
const Form = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            id="charge"
            name="charge"
            className="form-control"
            placeholder="e.g. Bills"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="form-control"
            placeholder="e.g. 1000"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Edit" : "submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default Form;
