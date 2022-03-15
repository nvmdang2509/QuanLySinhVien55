import { Button, Input, Select } from "antd";
import React, { useState, useEffect } from "react";

const { TextArea } = Input;

const dataServe = "hinh nhu co ai do treo cay me";

const NoteForm = (props) => {
  const { isData, reportDate, investorId } = props;
  const [dataShow, setDataShow] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setDataShow(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isData && reportDate == "newDate") {
      console.log("update Note newDate");
    } else if (isData && reportDate != "newDate") {
      console.log("update Note reprot date");
    }
  };

  useEffect(() => {
    if (isData && reportDate == "newDate") {
      // console.log("update benchmark reprot date");
      setDataShow(dataServe);
    }
  }, [isData]);
  console.log("as", dataShow);

  return (
    <form
      className="edit-page__note-form mt-3 mx-5"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className="row" style={{ alignItems: "top", flexWrap: "nowrap" }}>
        <span className="mr-3" style={{ fontWeight: "800" }}>
          Note
        </span>
        <TextArea rows={4} value={dataShow} />
      </div>
      <div className="edit-page__btns mt-3 text-right">
        <Button type="primary" size="large" className="mr-3" htmlType="submit">
          Save draft
        </Button>
        <Button type="primary" size="large" htmlType="button">
          Public
        </Button>
      </div>
    </form>
  );
};

export default NoteForm;
