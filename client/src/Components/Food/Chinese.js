import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { DeleteItem } from '../../actions/admin';
import { GetAllSelectedItems } from '../../actions/food';
import { AddToCart } from '../../actions/cart';
import Spinner from '../Spinner/Spinner';
import NavBar from '../Navbar/Navbar';
const Chinese = ({
  GetAllSelectedItems,
  AddToCart,
  DeleteItem,
  match,
  food: { food },
  auth: { user },
}) => {
  useEffect(() => {
    GetAllSelectedItems(match.params.food);
  }, [GetAllSelectedItems, match.params.food]);

  const history = useHistory();
  var foodname;
  food.map((item) => {
    foodname = item.foodItem;
  });
  return (
    <div className="food_div">
      {food ? (
        <div>
          <nav className="chinese_nav">
            <div className="food_title" key={foodname}>
              <div className="food_h1">
                <h1>{foodname}</h1>
              </div>
              <div className="navbar">
                <NavBar />
              </div>
            </div>
          </nav>
          <div className="menu">
            <div className="food_menu">
              {food.length > 0 ? (
                food.map((item) => (
                  <div className="food_item" key={item._id}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <h3>₹ {item.price}</h3>

                    {user ? (
                      user.name === 'admin' ? (
                        <div className="admin_control_buttons">
                          <button
                            onClick={() => {
                              DeleteItem(item._id);
                              history.push('/');
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button onClick={() => AddToCart(item)}>
                            Add to cart
                          </button>
                        </div>
                      )
                    ) : (
                      ''
                    )}
                  </div>
                ))
              ) : (
                <h1>No Items Available</h1>
              )}
            </div>
          </div>
          <footer> </footer>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  food: state.food,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  GetAllSelectedItems,
  AddToCart,
  DeleteItem,
})(Chinese);
