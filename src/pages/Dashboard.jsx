import React, { useContext } from "react";
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
import { dashboards, appsName } from "../dashboardRow";

const Dashboard = () => {
  const navigate = useNavigate();
  const { theme, changeTheme } = useContext(themeContext);

  return (
    <Layout>
      <div className="container-fluid p-0 g-0 m-0">
        <div className="row p-0 g-0 m-0 headingDashboard">
          <div className="dashboardheaderTop1 p-2">
            <div className=" dashboardFilterHead">
              <button className="btn btn-light">
                <span className="my-2">
                  <MdOutlineFileUpload fontSize={23} />
                </span>
                <span className="my-5"> Upload Files</span>
              </button>
            </div>
            <div className="widthsetForDashboard ">
              {/* <div className="dashboardFilterHeadFilters ">
                <div className="filterImplementByCompany">
                  <Select
                    showSearch
                    style={{
                      width: 200,
                    }}
                    placeholder="Company"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: "1",
                        label: "Not Identified",
                      },
                      {
                        value: "2",
                        label: "Closed",
                      },
                      {
                        value: "3",
                        label: "Communicated",
                      },
                      {
                        value: "4",
                        label: "Identified",
                      },
                      {
                        value: "5",
                        label: "Resolved",
                      },
                      {
                        value: "6",
                        label: "Cancelled",
                      },
                    ]}
                  />
                </div>

                <div className="filterImplementByCompany">
                  <Select
                    showSearch
                    style={{
                      width: 200,
                    }}
                    placeholder="Country"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: "1",
                        label: "Not Identified",
                      },
                      {
                        value: "2",
                        label: "Closed",
                      },
                      {
                        value: "3",
                        label: "Communicated",
                      },
                      {
                        value: "4",
                        label: "Identified",
                      },
                      {
                        value: "5",
                        label: "Resolved",
                      },
                      {
                        value: "6",
                        label: "Cancelled",
                      },
                    ]}
                  />
                </div>

                <div className="filterImplementByCompany">
                  <Select
                    showSearch
                    style={{
                      width: 200,
                    }}
                    placeholder="City"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: "1",
                        label: "Not Identified",
                      },
                      {
                        value: "2",
                        label: "Closed",
                      },
                      {
                        value: "3",
                        label: "Communicated",
                      },
                      {
                        value: "4",
                        label: "Identified",
                      },
                      {
                        value: "5",
                        label: "Resolved",
                      },
                      {
                        value: "6",
                        label: "Cancelled",
                      },
                    ]}
                  />
                </div>
                <div className="filterImplementByCompany">
                  <Select
                    showSearch
                    style={{
                      width: 200,
                    }}
                    placeholder="Office"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: "1",
                        label: "Not Identified",
                      },
                      {
                        value: "2",
                        label: "Closed",
                      },
                      {
                        value: "3",
                        label: "Communicated",
                      },
                      {
                        value: "4",
                        label: "Identified",
                      },
                      {
                        value: "5",
                        label: "Resolved",
                      },
                      {
                        value: "6",
                        label: "Cancelled",
                      },
                    ]}
                  />
                </div>
                <div className="filterImplementByCompany">
                  <button className="btn btn-light">Submit</button>
                </div>
                <div className="filterImplementByCompany">
                  <button className="btn btn-dark">Clear</button>
                </div>
              </div> */}
              <button className="btn btn-light">
                <span className="my-2">
                  <MdOutlineSort fontSize={23} />
                </span>
                <span className="my-5"> Company</span>
              </button>
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
              <h3>{d.name}</h3>
              <hr />
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

        {
          <div className="row p-2">
            {appsName?.map((r, i) => (
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
        }
      </div>
    </Layout>
  );
};

export default Dashboard;
