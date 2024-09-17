import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import TopRest from "./components/TopRest";
import OnlineDelivery from "./components/OnlineDelivery";
import BestPlacesToEat from "./components/BestPlacesToEat";
import BestCuisinesNearMe from "./components/BestCuisinesNearMe";
import ExploreEveryRestaurant from "./components/ExploreEveryRestaurant";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Category />
      <TopRest />
      <OnlineDelivery />
      <BestPlacesToEat />
      <BestCuisinesNearMe />
      <ExploreEveryRestaurant />
      <Footer/>
    </>
  );
};

export default App;
