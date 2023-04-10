import { Divider, Radio, Table, Space } from "antd";
import { useState, useEffect } from "react";
import { Button } from "antd";
const handleDelete = (id) => {
  fetch(`http://localhost:8000/api/categoryDataDelete/${id}`, { method: 'DELETE' })
    .then(() => {
      alert("amjilttai")
    })
    .catch((error) => {
      console.error(error);
    });
}
const columns = [
  {
    title: "Категорийн нэр",
    dataIndex: "title",
  },
  {
    title: "Категорийн тайлбар",
    dataIndex: "description",
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
function TableCategory() {
  const [selectionType, setSelectionType] = useState("checkbox");
  console.log(selectionType);
  const [dataa, setData] = useState([]);
  console.log(dataa);
  const fetchData = async () => {
    return fetch("http://localhost:8000/api/categoryData")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

      <Divider />

      <Table columns={columns} dataSource={dataa} />
    </div>
  );
}
export default TableCategory;
