import React, { useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineFileUpload, MdOutlineSort } from "react-icons/md";
import { Select } from "antd";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { themeContext } from "../context/mycontext";
import { dashboards, arrangedApps } from "../dashboardRow";
import {
  MdDashboard,
  MdPages,
  MdHomeRepairService,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import company from "../company.json";
console.log(company);
const Dashboard = () => {
  const navigate = useNavigate();
  const { theme, changeTheme } = useContext(themeContext);
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  return (
    <Layout>
      <div className="container-fluid p-0 g-0 m-0">
        <div className="row p-0 g-0 m-0 headingDashboard">
          <div className="dashboardheaderTop1 p-2">
            <div className=" dashboardFilterHead">
              <button
                className="btn btn-light"
                onClick={() => navigate("/upload")}
              >
                <span className="my-2">
                  <MdOutlineFileUpload fontSize={23} />
                </span>
                <span className="my-5"> Upload Files</span>
              </button>
            </div>
            <div className="widthsetForDashboard ">
              <button className="btn btn-light">
                <span className="my-2">
                  <MdOutlineSort fontSize={23} />
                </span>
                <span className="my-5"> Company</span>
              </button>
              <div className="companyList">
                {company?.companies.map((c, ci) => (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{c.name}</span>
                    <span>
                      <MdKeyboardArrowRight fontSize={25} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="CountryList">
                {company?.companies.map((c, ci) => (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{c.name}</span>
                    <span>
                      <MdKeyboardArrowRight fontSize={25} />
                    </span>
                  </div>
                ))}
              </div>

              {/* <div className="CityList">
                {company?.companies.map((c, ci) => (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{c.name}</span>
                    <span>
                      <MdKeyboardArrowRight fontSize={25} />
                    </span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          <div className="dashboardheaderTop2 p-2 d-flex justify-content-center align-items-center">
            <div className="dashboardUserName ">
              <h3>Welcome Vishal kumar</h3>
            </div>
          </div>
        </div>

        {dashboards?.map((d, index) => (
          <>
            <div className="row firstHeading mt-1 p-2">
              <h3 onClick={() => handleMenuClick(index)}>
                <span>{d.name}</span>
                <span>
                  {activeMenu === index ? (
                    <MdKeyboardArrowRight fontSize={35} />
                  ) : (
                    <MdKeyboardArrowDown fontSize={35} />
                  )}
                </span>
              </h3>
              <hr />
              <div
                className={`listReports ${
                  activeMenu === index ? "listReportsVisual" : ""
                }`}
              >
                <div>
                  {d?.reports?.map((re, i) => (
                    <span
                      onClick={() => navigate(`/dashboard/${d?.id}/sales/${i}`)}
                    >
                      {re}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="row p-2">
              <div className="parentService my-2">
                <Swiper
                  slidesPerView={index > 0 ? 4 : 3}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                >
                  {d?.reports.map((r, i) => (
                    <SwiperSlide
                      onClick={() => navigate(`/dashboard/${d?.id}/sales/${i}`)}
                    >
                      <div
                        className={`innerCard ${index > 0 && "innerCardSize"}`}
                      >
                        <img
                          src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/account-billing.png"
                          alt="1"
                        />
                        <p>{r}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </>
        ))}
        <div className="row firstHeading mt-1 p-2">
          <h3>App Pages</h3>
          <hr />
        </div>

        {arrangedApps?.map((a, i) => (
          <>
            <div className="row firstHeading mt-1 p-2">
              <h5>{a.category}</h5>
            </div>
            <div className="row p-2">
              {a?.apps?.map((r, i) => (
                <div className="col-md-3">
                  <div className="appsCard">
                    <img
                      src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-login-social.png"
                      alt="apps"
                    />
                    <p>{r?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
