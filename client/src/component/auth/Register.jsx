import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/authSlice";
import { StyledForm } from './styledform';

const Register = () => {
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  console.log(auth);

  useEffect(()=>{
    if(auth._id){
      navigate('/cart')
    }
  },[auth._id,navigate])

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>
          {auth.registerStatus === "pending" ? "Submitting" : "Register"}
        </button>
        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
      </StyledForm>
    </>
  );
};

export default Register;
