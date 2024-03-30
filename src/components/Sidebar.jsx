import React, { useState } from "react";
import {
  MdDashboard,
  MdPages,
  MdHomeRepairService,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { GiSellCard } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../context/mycontext";
import { dashboards } from "../dashboardRow";
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  const { theme, changeTheme } = useContext(themeContext);

  return (
    <div
      className={`sidebar 
       ${theme === "dark" ? "dark-theme" : ".light-theme"}
    `}
    >
      <ul className="px-2">
        <li onClick={() => handleMenuClick(2)}>
          <div className="menuItemNested">
            <div className="menuItemChild">
              <span>
                <MdDashboard />
              </span>
              <Link to="#" disabled>
                Dashboard
              </Link>
            </div>
            <div className="dropDownIcon">
              <span>
                {activeMenu === 2 ? (
                  <MdKeyboardArrowRight />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            </div>
          </div>

          <ul className={activeMenu === 2 ? "active" : ""}>
            <li>
              <Link to="/">All</Link>
            </li>
            {dashboards?.map((d, i) => (
              <li>
                <Link to={`/dashboard/${d?.id}`}>{d?.name}</Link>
              </li>
            ))}
          </ul>
        </li>

        <li onClick={() => handleMenuClick(0)}>
          <div className="menuItemNested">
            <div className="menuItemChild">
              <span>
                <MdPages />
              </span>
              <Link to="#">Pages</Link>
            </div>
            <div className="dropDownIcon">
              <span>
                {activeMenu === 0 ? (
                  <MdKeyboardArrowRight />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            </div>
          </div>

          <ul className={activeMenu === 0 ? "active" : ""}>
            <li>
              <Link to="#">Product 1</Link>
            </li>
            <li>
              <Link to="#">Product 2</Link>
            </li>
            <li>
              <Link to="#">Product 3</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => handleMenuClick(1)}>
          <div className="menuItemNested">
            <div className="menuItemChild">
              <span>
                <MdHomeRepairService />
              </span>
              <Link to="#">Services</Link>
            </div>
            <div className="dropDownIcon">
              <span>
                {activeMenu === 1 ? (
                  <MdKeyboardArrowRight />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            </div>
          </div>

          <ul className={activeMenu === 1 ? "active" : ""}>
            <li>
              <Link to="#">Service 1</Link>
            </li>
            <li>
              <Link to="#">Service 2</Link>
            </li>
            <li>
              <Link to="#">Service 3</Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="menuItem">
            <span>
              <GiSellCard />
            </span>
            <Link to="/sales">Sell</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
