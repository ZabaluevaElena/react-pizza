import React from "react";
import './index.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart";





function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items : state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
