import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
    return (
        <div className={styles.PageNotFound}>
            Page Not Found 404
            <Link to={"/"}>Go To Home Page</Link>
        </div>
    )
}

export default PageNotFound;