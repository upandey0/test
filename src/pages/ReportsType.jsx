import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import { MdOutlineFileUpload, MdOutlineSort } from "react-icons/md";
import { Select } from "antd";

import { useNavigate, useParams } from "react-router-dom";
import { themeContext } from "../context/mycontext";
import { dashboards, appsName } from "../dashboardRow";

const ReportsType = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { theme, changeTheme } = useContext(themeContext);

  const data = dashboards.filter((d, i) => d?.id === Number(id));
  console.log(id, data);
  return (
    <Layout>
      <div className="container-fluid p-0 g-0 m-0">
        <div className="row p-0 g-0 m-0 headingDashboard">
          <div className="dashboardUserName ">
            <h3>Welcome Vishal kumar</h3>
          </div>
        </div>

        {
          <div className="row p-2">
            {data[0]?.reports.map((r, i) => (
              <div
                className="col-md-3"
                onClick={() => navigate(`/dashboard/${id}/sales/${i}`)}
              >
                <div className="appsCard">
                  <img
                    src="https://assets.startbootstrap.com/img/screenshots-product-pages/sb-admin-pro/pages/auth-login-social.png"
                    alt="apps"
                  />
                  <p>{r}</p>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </Layout>
  );
};

export default ReportsType;
