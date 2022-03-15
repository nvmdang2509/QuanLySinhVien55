import React, { useState, useEffect } from "react";
import { Select, Input, Button } from "antd";
import BenchmarkForm from "../components/Forms/BenchmarkForm";
import NoteForm from "../components/Forms/NoteForm";
import PerformanceForm from "../components/Forms/PerformanceForm";
import moment from "moment";
import { history } from "../App";

const { Option } = Select;
const { TextArea } = Input;

const dataSever = [
  {
    investor_code: "NEUIND00001",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00002",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00003",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00004",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00005",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00006",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00007",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00008",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00001",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00001",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00001",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00001",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
  {
    investor_code: "NEUIND00001",
    injection_date: "12/12/2012",
    contact_status: true,
    contact_end_date: "12/12/2012",
    last_update: "12/12/2012",
    initial: 20833,
    current: 25291,
    profit: 4458,
    roi: 21.4,
    anulized_roi: 223.16,
  },
];

const EditPage = () => {
  const [investorId, setInvestorId] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [reportDateList, setReportDateList] = useState([]);
  const [isData, setIsData] = useState(false);

  const ReportDateOptions = dataSever.find(
    (item) => item.investor_code == investorId
  );

  useEffect(() => {
    if (investorId) {
      setReportDateList(
        dataSever.find((item) => item.investor_code == investorId)
      );
    } else {
      setReportDateList([]);
    }
  }, [investorId]);

  useEffect(() => {
    if (investorId && reportDate) {
      setIsData(true);
    }
  }, [reportDate]);

  console.log("investorId", investorId);
  console.log("reportDate", reportDate);
  console.log("isData", isData);

  return (
    <div className="container-fluid">
      <div className="edit-page">
        <div className="edit-page__selector m-5">
          <div className="row align-items-center">
            <span className="mr-3">Investor ID:</span>
            <Select
              style={{ width: 120 }}
              onChange={(value) => setInvestorId(value)}
            >
              {dataSever.map((item, index) => (
                <Option value={item.investor_code} key={index}>
                  {item.investor_code}
                </Option>
              ))}
            </Select>
          </div>
          <div className="row align-items-center mt-3">
            <span className="mr-3">Report Date:</span>
            <Select
              style={{ width: 120 }}
              onChange={(value) => setReportDate(value)}
            >
              {/* {reportDateList.map((item, index) => (
                <Option value={item.report_date} key={index}>
                  {moment.(item.report_date).format("DD/MM/YYYY")}
                </Option>
              ))} */}
              <Option value="newDate">New Date</Option>
            </Select>
          </div>
        </div>
        <div className="mt-5 mx-5">
          <PerformanceForm
            investorId={investorId}
            reportDate={reportDate}
            isData={isData}
          />
        </div>
        <div className="mt-5">
          <NoteForm
            investorId={investorId}
            reportDate={reportDate}
            isData={isData}
          />
        </div>
        <div className="mt-5 mx-5">
          <BenchmarkForm
            investorId={investorId}
            reportDate={reportDate}
            isData={isData}
          />
        </div>
        <div className="edit-page__btn-preview text-center py-5">
          {investorId && (
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "green" }}
              onClick={() => history.push(`/user-profile/${investorId}`)}
            >
              Preview
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditPage;
