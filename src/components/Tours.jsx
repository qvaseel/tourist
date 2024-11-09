import React, { useState } from "react";
import { tours } from "../data/toursData";
import "../style/page.css"

const Tours = () => {
  const [tourList, setTourList] = useState(tours);

  return (
    <div className="container">
      <h2 className="h2">Список доступных туров</h2>
      <div className="list">
        {tourList.map((tour) => (
          <div className="item" key={tour.tourId}>
            <div className="item_list">
                <p className="item_head">
                    Тур #{tour.tourId}
                </p>
                <p className="item_text">
                    Страна: {tour.country}
                </p>
                <p className="item_text">
                    Отель "{tour.hotel}"
                </p>
                <p className="item_text">
                    Дата начала: {tour.startDate}
                </p>
                <p className="item_text">
                    Дата окончания: {tour.endDate}
                </p>
                <p className="item_text">
                    Количество свободных мест: {tour.availableSeats}
                </p>
                <p className="item_text">
                    Стоимость: {tour.price} рублей
                </p>
            </div>
            <img src={tour.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
