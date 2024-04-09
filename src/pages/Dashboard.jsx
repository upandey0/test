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
  const [companyIndex, setCompanyIndex] = useState(0);
  const [countryIndex, setCountryIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [companyShow, setCompanyShow] = useState(false);
  const handleMenuMouseOver = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  // const handleMouseOut=(index)=>{
  //   setActiveMenu(null)
  // }
  const handleCompanyIndex = (ci) => {
    setCompanyIndex(ci);
  };
  const handleCountryIndex = (ci) => {
    setCountryIndex(ci);
  };

  const handleCityIndex = (ci) => {
    setCityIndex(ci);
  };
  return (
    <Layout>
      <div className="container-fluid p-0 g-0 m-0">
        <div className="row p-0 g-0 m-0 headingDashboard">
          <div className="dashboardheaderTop1 p-2">
            <div className="widthsetForDashboard ">
              <button
                className="btn btn-light"
                onMouseOver={() => setCompanyShow(!companyShow)}
              >
                <span className="my-2">
                  <MdOutlineSort fontSize={23} />
                </span>
                <span className="my-5"> Company</span>
              </button>
              <div className={`companyList ${companyShow && "companyShowIng"}`}>
                {company?.companies.map((c, ci) => (
                  <div
                    className={`d-flex  justify-content-between align-items-center ${
                      ci === companyIndex && "bg-primary text-light"
                    }`}
                    onClick={() => handleCompanyIndex(ci)}
                  >
                    <span>{c.name}</span>
                    <span>
                      <MdKeyboardArrowRight fontSize={25} />
                    </span>
                  </div>
                ))}
              </div>

              <div className={`CountryList ${companyShow && "companyShowIng"}`}>
                {company?.companies[companyIndex]?.countries?.map((c, ci) => (
                  <div
                    className={`d-flex  justify-content-between align-items-center ${
                      ci === countryIndex && "bg-primary text-light"
                    }`}
                    onClick={() => handleCountryIndex(ci)}
                  >
                    <span>{c?.name}</span>
                    <span>
                      <MdKeyboardArrowRight fontSize={25} />
                    </span>
                  </div>
                ))}
              </div>

              <div className={`CityList ${companyShow && "companyShowIng"}`}>
                {company?.companies[companyIndex]?.countries?.[
                  countryIndex
                ]?.cities?.map((c, ci) => (
                  <div
                    className={`d-flex  justify-content-between align-items-center ${
                      ci === cityIndex && "bg-primary text-light"
                    }`}
                    onClick={() => handleCityIndex(ci)}
                  >
                    <span>{c.name}</span>
                    <span>
                      <MdKeyboardArrowRight fontSize={25} />
                    </span>
                  </div>
                ))}
              </div>

              <div className={`OfficeList ${companyShow && "companyShowIng"}`}>
                {company?.companies[companyIndex]?.countries?.[
                  countryIndex
                ]?.cities[cityIndex].offices?.map((c, ci) => (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{c.name}</span>
                    <span>
                      <MdKeyboardArrowRight fontSize={25} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
          </div>
          <div className="dashboardheaderTop2 p-2 d-flex justify-content-center align-items-center">
            <div className="dashboardUserName ">
              <h3>Welcome</h3>
              <br />
              <p>Vishal kumar</p>
            </div>
          </div>
        </div>

        {dashboards?.map((d, index) => (
          <>
            <div className="row firstHeading mt-1 p-2">
              <button  className="border-0" onMouseOver={() => handleMenuMouseOver(index)} >
                <span>{d.name}</span>
                {/* <span >
                  {activeMenu === index ? (
                    <MdKeyboardArrowRight fontSize={35} />
                  ) : (
                    <MdKeyboardArrowDown fontSize={35} />
                  )}
                </span> */}
              </button>
              <hr />
              <div
              //  onMouseOut={()=>handleMouseOut()}
                className={`listReports ${
                  activeMenu === index ? "listReportsVisual" : ""
                }`}
              >
                <div>
                  {d?.reports?.map((re, i) => (
                    <span className="fs-6"
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
                  spaceBetween={20}
                  // freeMode={true}
                  centeredSlides={false}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                >
                  {d?.reports.map((r, i) => (
                    <SwiperSlide
                     key={i}
                      onClick={() => navigate(`/dashboard/${d?.id}/sales/${i}`)}
                      style={{
                        width: '25%', // Set the slide width
                      }}
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
