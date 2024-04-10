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
// import { themeContext } from "../context/mycontext";
import { dashboards, arrangedApps, appsPages } from "../dashboardRow";
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleSubMenuClick = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };
  // const { theme } = useContext(themeContext);

  return (
    <div
      className={`sidebar 
       
    `}
    >
      <ul className="px-2">
        <li onClick={() => handleMenuClick(2)}>
          <div className="menuItemNested">
            <div className="menuItemChild">
              <span>
                <MdDashboard className="dash-icon" />
              </span>
              <Link to="#" className="dash-icon" disabled>
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
                <MdPages  className="dash-icon"/>
              </span>
              <Link to="#" className="dash-icon">Services</Link>
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
            {arrangedApps?.map((a, i) => (
              <li>
                <Link to="#">{a.category}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="menuItemNested" onClick={() => handleMenuClick(1)}>
            <div className="menuItemChild">
              <span>
                <MdHomeRepairService className="dash-icon"/>
              </span>
              <Link to="#" className="dash-icon">App Pages</Link>
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
            {appsPages?.map((a, i) => (
              <li onClick={() => handleSubMenuClick(i)} className="m-0 p-0 g-0">
                <div className="SubmenuItemNested">
                  <div className="SubmenuItemChild">
                    <Link to="#">{a?.category}</Link>
                  </div>
                  <div className="dropDownIcon" style={{marginLeft:"1rem"}}>
                    <span >
                      {activeSubMenu === i ? (
                        <MdKeyboardArrowRight  fontSize={20} />
                      ) : (
                        <MdKeyboardArrowDown  fontSize={20} />
                      )}
                    </span>
                  </div>
                </div>

                <ul className={activeSubMenu === i ? "activeSub" : ""}>
                  {a?.apps?.map((b, index) => (
                    <li>
                      <Link to="#">{b.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="menuItemChild">
            <span>
              <GiSellCard className="dash-icon"/>
            </span>
            <Link to="/upload" className="dash-icon">Uploads</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
