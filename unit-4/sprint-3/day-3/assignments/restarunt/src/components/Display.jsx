import React from "react";
import { data } from './data'
import "./dispay.css"
export const Stocks = () => {

  const handleClick = (data, key) => {
    data.map((data, key) => {
      if (data.key === key) {
        data.key = key
      }
      return data;
    })

  }
  return (
    <>
      <form >
        <select name="cars" id="star">
          <option value="4">4 Star</option>
          <option value="3">3 star </option>
          <option value="2">2 Star</option>
          <option value="1">1 Star </option>
        </select>
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>


      <form >
        <select name="cars" id="pay">
          <option value="card">Card</option>
          <option value="cash">cash </option>
        </select>
        <button type="submit">Submit</button>
      </form>



      <form >
        <select name="cars" id="HtL">
          <option value="1">High to Low</option>
          <option value="-1">Low to High </option>
        </select>
        <button type="submit">Submit</button>
      </form>


      <div className="dis">
        {data.map((data, key) => {
          return (
            <div className="div" key={key}>
                  <div>
                    <img src={data.img} alt="img" />
                  </div>
                  <div className="flo">
                    <p className="bg">  {data.rating}☆</p>
                    <p>{data.total_votes}-votes</p>
                    <p>{data.reviews}- reviews</p>
                  </div>
              <h3>{data.name}    </h3>
              <p>Cost for One - ₹{data.cost_for_one}</p>
              <p>{data.categories}</p>
              <p>Payment Method:{data.payment_method}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};