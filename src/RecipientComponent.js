import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import React, {useState} from "react";
import styles from "./RecipientComponent.module.css";

function RecipientComponent(recipient) {

    const [toggleRecipient, setToggleRecipient] =  useState(false);

    function handleToggleRecipient() {
        setToggleRecipient(!toggleRecipient)
    }
    return(
        <div className={styles["recipient-container"]}>
            <div className={styles["component-wrapper"]}>
                <span className="title-content">Ontvanger</span>
                <div className="content">{recipient.recipient.company_name}</div>
                {toggleRecipient ? (
                    <div className="toggle">
                        <p className="toggle-content-line4">{recipient.recipient.street + " " + recipient.recipient.housenumber}</p>
                        <p className="toggle-content-line5">{recipient.recipient.country + "-" + recipient.recipient.postal_code + " " + recipient.recipient.city}</p>
                    </div>) : (<></>) }
            </div>
            <div className={styles["icon-container"]}>
                <div className={styles["toggle-icon"]} onClick={handleToggleRecipient}>{toggleRecipient ? (<BsChevronUp/>) : (<BsChevronDown/>)}</div>
            </div>
        </div>
    )
}

export default RecipientComponent;