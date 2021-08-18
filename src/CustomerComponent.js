import React, {useState} from 'react';
import styles from "./CustomerComponent.module.css";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";

function CustomerComponent(customer) {

    const [toggleCustomer, setToggleCustomer] =  useState(false);

    function handleToggle() {
        setToggleCustomer(!toggleCustomer)
    }

    return (
        <div className={styles["customer-container"]}>
            <div className={styles["component-wrapper"]}>
                <span className="title-content">Afzender</span>
                    <div className="content">{customer.customer.company_name}</div>
                        {toggleCustomer ? (
                            <div className="toggle">
                                <p className="toggle-content-line2">{customer.customer.street + " " + customer.customer.housenumber}</p>
                                <p className="toggle-content-line3">{customer.customer.country + "-" + customer.customer.postal_code + " " + customer.customer.city}</p>
                            </div>) : (<></>) }
            </div>
            <div className={styles["icon-container"]}>
                <div className={styles["toggle-icon"]} onClick={handleToggle}>{toggleCustomer ? (<BsChevronUp/>) : (<BsChevronDown/>)}</div>
            </div>
        </div>
    );
}

export default CustomerComponent;