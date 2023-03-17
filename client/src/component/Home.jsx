import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const { items, loading } = useSelector((state) => state.products);
 
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart =(data)=>{
    dispatch(addToCart(data))
    navigate("/cart");
  }

  console.log(items)
  return (
    <div className="home-container">
      {loading ? <p>Loading.....</p> : 
      <>
      <h2>New Arrivals</h2>
      <div className="products">
        {items.map((data)=>
            <div key={data.id} className="product">
                <h3>{data.name}</h3>
                <img src={data.image} alt={data.name}/>
                <div className="details">
                    <span>{data.desc}</span>
                    <span className="price">${data.price}</span>
                    </div>
                    <button onClick={()=> handleAddToCart(data)}>Add To Cart</button>
                </div>
        )}
      </div>
      </>
      }
    </div>
  );
};

export default Home;
