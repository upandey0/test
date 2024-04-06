import React, { useState } from "react";
import {
  MdDashboard,
  MdPages,
  MdHomeRepairService,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Layout from "../components/layout/Layout";
import { uploadDocs } from "../dashboardRow";
import { useModalState } from "../hooks/useModel";
import UploadModel from "../model/UploadModel";
const UploadReports = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [uploadName, setUploadName] = useState([]);

  const { open, handleOpen, handleClose } = useModalState(false);
  return (
    <Layout>
      <div className="container-fluid m-0 p-0 g-0">
        <div className="row m-0 p-0 g-0">
          <div className="uploadCategory">
            <div className="category1" onClick={() => setActiveMenu(0)}>
              <span></span>
              <span>Invoices</span>
            </div>
            <div className="category1" onClick={() => setActiveMenu(1)}>
              <span></span>
              <span>Bank Statement</span>
            </div>
            <div className="category1" onClick={() => setActiveMenu(2)}>
              <span></span>
              <span>Other Docs</span>
            </div>
            <div className="category1" onClick={() => setActiveMenu(3)}>
              <span></span>
              <span>Reports</span>
            </div>
          </div>
        </div>
        <div className="row m-0 p-0 g-0 ">
          <div className="uploadedList row">
            <div className="col-md-7">
              <div className="row m-0 g-0 p-0">
                <div className="uploadedNameSection row">
                  <div className="row invoicesHeading">
                    <h4>{uploadDocs[activeMenu].category}</h4>
                  </div>
                  {uploadDocs[activeMenu].subCategory?.map((inv, i) => (
                    <div className="col-md-3 parentUploadDiv m-0 p-0 g-0">
                      <div
                        className="uploadCatNames"
                        onClick={() => {
                          setUploadName(inv?.listName);
                          handleOpen();
                        }}
                      >
                        <span style={{ fontSize: "1rem" }}>{inv?.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row m-0 g-0 p-0">
                <div className="uploadedNameSectionList"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadModel
        open={open}
        handleClose={handleClose}
        uploadName={uploadName}
      />
    </Layout>
  );
};

export default UploadReports;
