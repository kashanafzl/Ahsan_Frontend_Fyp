import React from "react";
import "./MostPopular.css";

import books from "../../../Assets/Img/book.svg";
import blog1 from "../../../Assets/Img/b1.svg";
import blog2 from "../../../Assets/Img/b2.svg";
import blog3 from "../../../Assets/Img/b3.svg";

export default function MostPopular() {
  return (
    <div>
      <div className="mostpopulardiv">
        <div className="contenth1div">
          <h1>
            Most
            <br />
            Popular <br />
            Course
          </h1>

          <img src={books} alt="" />
        </div>

        <div className="blog1div">
          <img src={blog1} alt="" />
          <h1>Introduction to Artificial Intelligence (AI)</h1>
          <p>
            This course covers core AI conce pts, including deep learning, mac
            hine learning, This IBM AI Develo per Professional Certificate will 
            equip you with soug ht-after exp ertize in building{" "}
          </p>
        </div>
        <div className="blog1div">
          <img src={blog2} alt="" />
          <h1>Introduction to Artificial Intelligence (AI)</h1>
          <p>
            This course covers core AI conce pts, including deep learning, mac
            hine learning, This IBM AI Develo per Professional Certificate will 
            equip you with soug ht-after exp ertize in building{" "}
          </p>
        </div>
        <div className="blog1div">
          <img src={blog3} alt="" />
          <h1>Introduction to Artificial Intelligence (AI)</h1>
          <p>
            This course covers core AI conce pts, including deep learning, mac
            hine learning, This IBM AI Develo per Professional Certificate will 
            equip you with soug ht-after exp ertize in building{" "}
          </p>
        </div>













      </div>
    </div>
  );
}
