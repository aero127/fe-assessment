import React, {useState} from 'react';
import moment from "moment";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styles from './PackageComponent.module.css';


function PackageComponent(pack) {
    const [togglePackages, setTogglePackages] =  useState(false);
    const [packageStatus, setPackageStatus] = useState(pack.pack.status);

    function handleTogglePackages() {
        setTogglePackages(!togglePackages)
    }

    function renderStatus() {
        if(packageStatus === "sort" || packageStatus === "scanned") {
            return("Gesorteerd")
        } else if (packageStatus === "package_created") {
            return("Verzonden")
        } else if (packageStatus === "shipment_delivered") {
            return("Bezorgd")
        } else if (packageStatus === "in_transit") {
            return("Onderweg")
        } else if (packageStatus === "available_at_pickup_point") {
            return("Op afhaalpunt")
        } else {
            return ("Status onbekend")
        }
    }

    function deliveryStatus() {
        if (packageStatus === "sort"|| packageStatus === "scanned") {
            if (pack.pack.delivery.window_start !== null) {
                return ("Verwachte bezorgmoment: " + moment(pack.pack.delivery.date).format("LL") + " tussen " + pack.pack.delivery.window_start + " en " + pack.pack.delivery.window_end + " uur")
            } else {
                return ("Verwachte bezorgmoment: " + moment(pack.pack.delivery.date).format("LL"))
            }
        } else if (packageStatus === "package_created") {
            return ("Verwachte bezorgmoment: " + moment(pack.pack.delivery.date).format("LL"))
        } else if (packageStatus === "shipment_delivered") {
            return ("Bezorgd: " + moment(pack.pack.delivery.date).format("LL"))
        } else if (packageStatus === "in_transit") {
            return ("Verwachte bezorgmoment: " + moment(pack.pack.delivery.date).format("LL") + " tussen " + pack.pack.delivery.window_start + " en " + pack.pack.delivery.window_end + " uur")
        } else if (packageStatus === "available_at_pickup_point") {
            return ("Beschikbaar voor afhaal: " + moment(pack.pack.delivery.date).format("LL"))
        }
    }

    return (
        <div className={styles["packages-map-container"]}>
            <div className={styles["component-wrapper"]}>
                <span className={styles["title-content"]}>Status</span>
                <div>Pakket {pack.index +1} van {pack.packages.length}: <span className="package-status">{renderStatus(packageStatus)}</span></div>
                <span className={styles["second-line"]}>{deliveryStatus(packageStatus)}</span>
            </div>
            <div className={styles["icon-container"]}>
                <div className={styles["toggle-icon"]} onClick={handleTogglePackages}>{togglePackages ? (<BsChevronUp/>) : (<BsChevronDown/>)}</div>
            </div>
            {togglePackages ? (
                <div className={styles["package-trace"]}>
                    <button onClick={pack.pack.delivery.tracking_url}><a href={pack.pack.delivery.tracking_url} target="_blank" rel="noreferrer">Pakket volgen</a></button>
                </div>
            ) : (<></>) }
        </div>
    );
}

export default PackageComponent;