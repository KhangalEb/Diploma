import { Divider, Radio, Table, Space } from "antd";
import { useState, useEffect } from "react";
import { Button } from "antd";
const handleDelete = (id) => {
  fetch(`http://localhost:8000/api/subjectDataDelete/${id}`, { method: 'DELETE' })
    .then(() => {
      alert("amjilttai")
    })
    .catch((error) => {
      console.error(error);
    });
}
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

  {
    title: '',
    key: 'action',
    render: (record) => (
      <Space size="middle">
        <Button type="text" danger onClick={() => { handleDelete(record._id) }}>Delete</Button>
      </Space>
    ),
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

      <Table columns={columns} dataSource={dataa} />
    </div>
  );
}
export default TableSubject;
