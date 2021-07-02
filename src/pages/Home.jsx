import React from "react";
import Categories from "./../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategory, setSortBy } from "./../redux/action/filters";
import { fetchPizzass } from "./../redux/action/pizzas";
import { addPizzaToCart } from "./../redux/action/cart";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";

const categoryNames = [
  "Mясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sort = [
  { name: "популярности", type: "popular", order: 'desc' },
  { name: "по цене", type: "price", order: 'desc' },
  { name: "по алфавиту", type: "name", order: 'asc' },
];

const Home = () => {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);



  useEffect(() => {
      dispatch(fetchPizzass(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSort = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={(index) => onSelectCategory(index)}
          items={categoryNames}
          activeCategory={category}
        />

        <SortPopup 
        items={sort}
        onClickSort={(name) => onSelectSort(name)}
        activeSort={sortBy.type}
         />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => 
            <PizzaBlock onClickAddPizza={(obj) => handleAddPizzaToCart(obj)}
            key={obj.id}
            {...obj}
            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} />)
          : Array(12).fill(0).map((_,index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
