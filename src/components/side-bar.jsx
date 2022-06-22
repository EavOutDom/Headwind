import React, { useEffect, useState } from "react";
import { FaMotorcycle, FaWalking } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { RiMotorbikeLine } from "react-icons/ri";
import { IoAirplane } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const item = [
    {
        path: "/",
        text: "Motorcycle",
        icon: <FaMotorcycle size={"30px"} />,
        exact: true,
    },
    {
        path: "/walking",
        text: "Walking",
        icon: <FaWalking size={"30px"} />,
        exact: false,
    },
    {
        path: "/car",
        text: "Car",
        icon: <AiFillCar size={"30px"} />,
        exact: false,
    },
    {
        path: "/bike",
        text: "Bike",
        icon: <RiMotorbikeLine size={"30px"} />,
        exact: false,
    },
    {
        path: "/airplane",
        text: "Airplane",
        icon: <IoAirplane size={"30px"} />,
        exact: false,
    },
];
function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

function SideBar() {

    const [value, setValue] = useStickyState(0, 'value');
    return (
        <div
            className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col 
                    bg-gray-800 text-white shadow-lg"
        >
            {item.map(({ path, text, icon, exact }, index) => (
                
                <NavLink
                    key={index}
                    to={path}
                    exact={exact}
                    onClick={() => setValue(index)}
                >
                    <SideBarIcon icon={icon} text={text} inactive={`${value === index || 'side-icon'}`} className={`${value === index && 'active'}`}/>
                </NavLink>
            ))}
        </div>
    );
}

const SideBarIcon = ({ icon, text, className, inactive }) => (
    <div className={ `${inactive} ${className} group`}>
    {icon}
        {/* <div className={className}>{icon}</div>
        <span className="side-tool-tip group-hover:scale-105">{text}</span> */}
    </div>
);
export default SideBar;
