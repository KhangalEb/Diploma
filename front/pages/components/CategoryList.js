import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Select, Space } from "antd";
function CategoryList() {
  const [dataa, setData] = useState([]);
  const router = useRouter();
  const [text, setText] = useState();
  const fetchData = async () => {
    return fetch("http://localhost:8000/api/subjectData")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [subject, setSubject] = useState([]);

  const handleclick = (e) => {
    setSubject(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/subject/${subject}`);
  };

  return (
    <div>
      <div className="py-4 px-4 h-[550px] ">
        <div className="lg:max-w-[356px] md:max-w-[744px] max-w-[375px] mx-auto py-3">
          <div className="mt-8 px-6">

            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Хичээлүүд
            </label>
            <Select
              allowClear
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              onChange={(value) => {
                handleclick(value);
              }}
            >
              {dataa.map((p) => (
                <Option value={p.title}>{p.title}</Option>
              ))}
            </Select>
            <button
              type="submit"
              className=" px-5 py-[12px] flex items-center justify-between w-full shadow-md bg-500 mt-4"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
 ::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 20px; 
}
::-webkit-scrollbar-thumb {
  background: #D1D5DB;
  border-radius: 20px; 
}

`}
      </style>
    </div>
  );
}

export default CategoryList;
