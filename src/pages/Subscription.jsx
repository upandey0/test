import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const Subscription = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <FormGroup className="m-3">
                <h6>HR</h6>
                <FormControlLabel
                  className=""
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name="checkedBox"
                      color="primary"
                    />
                  }
                  label="Employee Performance Dashboard"
                />
                 <FormControlLabel
                  className=""
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name="checkedBox"
                      color="primary"
                    />
                  }
                  label="Recruitment Dashboard"
                />
                 <FormControlLabel
                  className=""
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name="checkedBox"
                      color="primary"
                    />
                  }
                  label="Employee Engagement Dashboard"
                />
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup className="m-3">
                <h6>Admin</h6>
                <FormControlLabel
                  className=""
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name="checkedBox"
                      color="primary"
                    />
                  }
                  label="Analytics and Reporting"
                />
                 <FormControlLabel
                  className=""
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name="checkedBox"
                      color="primary"
                    />
                  }
                  label="User Management"
                />
                 <FormControlLabel
                  className=""
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      name="checkedBox"
                      color="primary"
                    />
                  }
                  label="Content Management"
                />
              </FormGroup>
            </div>
            <div className="col-4">
             
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Subscription;
