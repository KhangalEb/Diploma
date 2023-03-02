import { Divider, Radio, Table } from "antd";
import { useState, useEffect } from "react";
import { Button } from "antd";
const columns = [
  {
    title: "Хичээлийн нэр",
    dataIndex: "title",
  },
  {
    title: "Хичээлийн тайлбар",
    dataIndex: "description",
  },
  {
    title: "Хамаарах анги",
    dataIndex: "range",
  },
  {
    title: "Категори",
    dataIndex: "category",
  },
];
const rowSelection = {
  onChange: (rowKey, selectedRows) => {
    console.log(`selectedRowKeys: ${rowKey}`, "selectedRows: ", selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
function TableSubject() {
  const [selectionType, setSelectionType] = useState("checkbox");
  console.log(selectionType);
  const [dataa, setData] = useState([]);
  console.log(dataa);
  const fetchData = async () => {
    return fetch("http://localhost:8000/api/subjectData")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />

      <Table rowSelection={rowSelection} columns={columns} dataSource={dataa} />
    </div>
  );
}
export default TableSubject;
