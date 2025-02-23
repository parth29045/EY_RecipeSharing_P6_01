// import React from 'react'
import Card from "../components/Card";
const Fooditems = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        <Card
          image={"src/assets/img/bg.jpeg"}
          name={"Breakfast"}
        />
        <Card
          image={"src/assets/img/bg.jpeg"}
          name={"Lunch"}
        />
        <Card
          image={"src/assets/img/bg.jpeg"}
          name={"Dinner"}
        />
        <Card
          image={"src/assets/img/bg.jpeg"}
          name={"Desert"}
        />
        <Card
          image={"src/assets/img/bg.jpeg"}
          name={"Restuarant"}
        />
      </div>
    </div>
  );
};

export default Fooditems;
