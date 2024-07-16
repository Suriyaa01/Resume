import { Col, Row, Table, Input } from "antd";
import React, { useEffect, useState } from "react";
import Employees from "../Table/Employees";

const { Search } = Input;
const Template = () => {
  const [dataTable, setdataTable] = useState([]);

  useEffect(() => {
    setdataTable(Employees);
  }, []);

  const onSearch = (value) => {
    if(value){
        const res = Employees.filter((ele) => ele.id == value);
        setdataTable(res);
    } else {
        setdataTable(Employees);
    }
    // Employees.map((ele) =>
    //   console.log(`${typeof ele.id} === ${typeof value} ? ${ele.id === value} `)
    // );
    // console.log(`int(${parseInt(5)}) === float(${parent()}) : `, 15 === 15.00)
    // console.log(value);
  };
  const column = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
  ];

  const data = [
    {
      ID: "001",
      name: "champ",
    },
  ];

  return (
    <>
      <Row style={{ marginBottom: 10 }}>
        <Col style={{ marginLeft: 5 }}>
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={column} dataSource={dataTable} />
        </Col>
      </Row>
    </>
  );
};

export default Template;
