import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCabinet } from "../redux/cabinetSlice";

const Nav = ({ show, setShow }) => {
    const open = useSelector((state) => state.open);
    const dispatch = useDispatch();
    return (
        <nav>
            <button
                className={show ? "button--active" : ""}
                onClick={() => setShow(!show)}
            >
                Trending
            </button>
            <h1>Mixify</h1>
            <button
                className={open ? "button--active" : ""}
                onClick={() => dispatch(ToggleCabinet())}
            >
                <FontAwesomeIcon icon={faBars} />
                <p>Cabinet</p>
            </button>
        </nav>
    );
};

export default Nav;
