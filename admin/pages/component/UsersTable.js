import { Divider, Radio, Table } from 'antd';
import { useState, useEffect } from 'react';

const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
    },
    {
        title: 'Role',
        dataIndex: 'role',
    },
    {
        title: 'Овог',
        dataIndex: 'lname',
    },
    {
        title: 'Нэр',
        dataIndex: 'fname',
    },
    {
        title: 'Хүйс',
        dataIndex: 'gender',
    },
    {
        title: 'Утасны дугаар 1',
        dataIndex: 'pnum1',
    },
    {
        title: 'Утасны дугаар 2',
        dataIndex: 'pnum2',
    },
    {
        title: 'Аймаг/Хот',
        dataIndex: 'province',
    },
    {
        title: 'Баг/Хороо',
        dataIndex: 'bag',
    },
    {
        title: 'Сум/Дүүрэг',
        dataIndex: 'sum',
    },
    {
        title: 'Дэлгэрэнгүй хаяг',
        dataIndex: 'delgerengui',
    },
    {
        title: 'Боловсрол',
        dataIndex: 'surguuli',
    },
    {
        title: 'Товчтанилцуулга',
        dataIndex: 'tovchtaniltsuulga',
    },
    {
        title: 'Ордог анги',
        dataIndex: 'angi',
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
function UsersTable() {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [dataa, setData] = useState([]);
    console.log(dataa);
    const fetchData = async () => {
        return fetch("http://localhost:8000/api/allUsers")
            .then((response) => response.json())
            .then((data) => setData(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>

            <Divider />

            <Table
                columns={columns}
                dataSource={dataa}
            />
        </div>
    );
};
export default UsersTable;