import React from "react";
import "./AppCard.scss";
import Counter from "../Counter/Counter";

const AppCard = (props) => {
  const cardsJSX = props.cardsArr.map((card) => (
    <div className="app__card">
      <div className="card__header" key={card.id}>
        <h2 className="card__name">{card.name}</h2>
        <h3 className="card__role">{card.role}</h3>
      </div>
      <div className="card__counter">
        <p>Counter</p>
        <Counter />
      </div>
    </div>
  ));
  return <>{cardsJSX}</>;
};

export default AppCard;
