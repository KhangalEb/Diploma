import { Divider, Radio, Table } from 'antd';
import { useState, useEffect } from 'react';

const columns = [
    {
        title: 'Категорийн нэр',
        dataIndex: 'title',
    },
    {
        title: 'Категорийн тайлбар',
        dataIndex: 'description',
    },
    {
        title: 'Хамаарах анги',
        dataIndex: 'range',
    },
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};
function App() {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [dataa, setData] = useState([]);
    console.log(dataa);
    const fetchData = async () => {
        return fetch("http://localhost:8000/api/subjectData")
            .then((response) => response.json())
            .then((data) => setData(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
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

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={dataa}
            />
        </div>
    );
};
export default App;