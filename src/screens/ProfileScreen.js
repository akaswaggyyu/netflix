import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import db, { auth } from "../firebase";
import PlansComponent from "../components/PlansComponent";
import { collection, getDocs, query, addDoc } from "firebase/firestore";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [products, setProducts] = useState([]);

  function loadCheckout(e) {
    const p = query(collection(db, "customers", user.uid));
    console.log(p);
    console.log(e.target);
  }

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      let newProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        active: doc.data().active,
      }));
      setProducts(newProducts);
    }
    fetchData();
    console.log(products);
  }, []);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className="profileScreen__icon"
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="user-icon"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: Premium)</h3>
              <p>Renewal date: 04/03/2023</p>
              {products.map((product) => (
                <PlansComponent
                  key={product.id}
                  type={product.name}
                  res={product.description}
                  isCurrent={product.active}
                  loadCheckout={loadCheckout}
                />
              ))}
              <button
                className="profileScreen__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
