import React, { useState } from "react";
import { excursions } from "../data/excursionsData";
import "../style/page.css"

const Excursions = () => {
  const [excursionList, setExcursionList] = useState(excursions);

  return (
    <div className="container">
      <h2 className="h2">Экскурсии</h2>
      <div className="list">
        {excursionList.map((excursion) => (
          <div className="item" key={excursion.excursionId}>
            <div className="item_list">
                <p className="item_head">
                    Место: {excursion.location}
                </p>
                <p className="item_text">
                    Страна: {excursion.country}
                </p>
                <p className="item_text">
                    Стоимость за человека: {excursion.price}
                </p>
            </div>
            <img src={excursion.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Excursions;
