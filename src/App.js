import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import reference from "./icons/reference.svg"
import status from "./icons/status.svg"
import truck from "./icons/truck.svg"
import sender from "./icons/sender.svg"
import recipienticon from "./icons/recipient.svg"
import Component from "./Component";
import PackageComponent from "./PackageComponent";
import ProductComponent from "./ProductComponent";
import CustomerComponent from "./CustomerComponent";
import RecipientComponent from "./RecipientComponent";

function App() {
  const [packages, setPackages] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [recipient, setRecipient] = useState([]);
  const [total, setTotal] = useState([]);
  const [meta, setMeta] = useState([]);


    async function fetchData() {
      try {
        const response = await axios.get(
            "https://infallible-tesla-bada39.netlify.app/2021023023.json"
        );
        setTotal(response.data);
        setMeta(response.data.meta);
        setCustomer(response.data.customer);
        setPackages(response.data.packages);
        setOrder(response.data.order);
        setProducts(response.data.products);
        setRecipient(response.data.recipient);
      } catch (e) {
        console.error(e);
      }
    }

    useEffect(()=> {
      fetchData()
    },[])



  return (
    <div className="main-page-container">
      <div className="logo-container"><img src={meta.logo} alt="logo"/></div>
      <Component
          icon={reference}
          title="Referentie"
          name={order.reference}
      />
        <div className="packages-main-container">
            <div className="component-wrapper">
                <span className="image-container"><img src={status}/></span>
            {packages?
                <div className="content-container">
                    {packages.map((pack, index) => {
                        return(<PackageComponent pack={pack} index={index} packages={packages}/>);
                    })}
                </div>
                :
                <h1>loading...</h1>
            }
            </div>
        </div>
        <Component
            icon={truck}
            title="Bezorgdienst"
            name="DHL - Standaard"
        />

        <div className="customer-main-container">
            <span className="image-container"><img src={sender}/></span>
            <div className="container-wrapper">
                <div className="content-container">
                    <CustomerComponent customer={customer}/>
                </div>
            </div>
        </div>

        <div className="recipient-main-container">
            <span className="image-container"><img src={recipienticon}/></span>
            <div className="container-wrapper">
                <div className="content-container">
                    <RecipientComponent recipient={recipient}/>
                </div>
            </div>
        </div>

        <div className="products-main-container">
            <h1>Inhoud van de bestelling</h1>
            <div className="product-content-container">
                {products.map((product,index) => {
                    return(<div className="products-map-container">
                            <ProductComponent product={product} index={index} products={products}/>
                        <p className="title-content">Artikel {index +1} van {products.length}</p>
                        <p className="second-line">{product.product_amount} x {product.product_title} </p>
                    </div>)
                })}
            </div>
        </div>

    </div>
  );
}

export default App;
