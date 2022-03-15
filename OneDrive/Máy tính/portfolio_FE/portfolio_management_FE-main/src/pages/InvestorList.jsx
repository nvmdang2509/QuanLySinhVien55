import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import moment from "moment";
import React from "react";
import { history } from "../App";
import numberWithCommas from "../utils/numberWithCommas";

const { Column, ColumnGroup } = Table;

const InvestorList = () => {
  //   const data = [
  //     {
  //       key: "1",
  //       firstName: "John",
  //       lastName: "Brown",
  //       age: 32,
  //       address: "New York No. 1 Lake Park",
  //       tags: ["nice", "developer"],
  //       investor_code: "NEUIND00001",
  //     },
  //     {
  //       key: "2",
  //       firstName: "Jim",
  //       lastName: "Green",
  //       age: 42,
  //       address: "London No. 1 Lake Park",
  //       tags: ["loser"],
  //       investor_code: "NEUIND00001",
  //     },
  //     {
  //       key: "3",
  //       firstName: "Joe",
  //       lastName: "Black",
  //       age: 32,
  //       address: "Sidney No. 1 Lake Park",
  //       tags: ["cool", "teacher"],
  //       investor_code: "NEUIND00001",
  //     },
  //   ];

  const data = [
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

  return (
    <div className="investor-list p-3">
      <h2
        className="text-center"
        style={{
          fontSize: "3rem",
          textTransform: "uppercase",
          fontWeight: "bold",
          color: "green",
        }}
      >
        Investor List
      </h2>
      <Table
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              history.push(`/user-profile/${record.investor_code}`);
            }, // double click row
          };
        }}
      >
        <ColumnGroup>
          {/* <Column title="No." dataIndex="" key="id" /> */}
          <Column
            title="Investor Code"
            dataIndex="investor_code"
            key="investor_code"
          />
          <Column
            title="Investor date"
            dataIndex="injection_date"
            key="injection_date"
          />
        </ColumnGroup>
        <ColumnGroup title="Status">
          <Column
            title="Contact Status"
            dataIndex="contact_status"
            key="contact_status"
            render={(text, item) => <p>{item ? "Open" : "End"}</p>}
          />
          <Column
            title="Contact End data"
            dataIndex="contact_end_date"
            key="contact_end_date"
            render={(text, item) => <p>{moment(item).format("DD/MM/YYYY")}</p>}
          />
          <Column
            title="Last update"
            dataIndex="last_update"
            key="last_update"
            render={(text, item) => <p>{moment(item).format("DD/MM/YYYY")}</p>}
          />
        </ColumnGroup>
        <ColumnGroup title="Fund (USD)">
          <Column
            title="Initial"
            dataIndex="initial"
            key="initial"
            render={(text, item) => <p>{`${numberWithCommas(text)}`}</p>}
          />
          <Column
            title="Current"
            dataIndex="current"
            key="current"
            render={(text, item) => <p>{`${numberWithCommas(text)} `}</p>}
          />
          <Column
            title="Profit"
            dataIndex="profit"
            key="profit"
            render={(text, item) => <p>{`${numberWithCommas(text)} `}</p>}
          />
        </ColumnGroup>
        <ColumnGroup title="Performance">
          <Column
            title="ROI"
            dataIndex="roi"
            key="roi"
            render={(text, item) => <p>{`${numberWithCommas(text)} %`}</p>}
          />
          <Column
            title="Anualized ROI"
            dataIndex="anulized_roi"
            key="anulized_roi"
            render={(text, item) => <p>{`${numberWithCommas(text)} %`}</p>}
          />
        </ColumnGroup>
      </Table>
      <div className="investor-list__btn text-center p-5">
        <Button
          type="primary"
          size="large"
          onClick={() => history.push("/admin/edit-page")}
        >
          Update Performance
        </Button>
      </div>
    </div>
  );
};

export default InvestorList;
