import CustomForm from "../../component/CustomForm";
import TableCategory from "../../component/TableCategory";
import Navbar from "../../component/Navbar";
import { Col, Row } from "antd";
import styles from "./userInfo.module.css";
const Category = () => {
  return (
    <div>
      <Row>
        <Col span={18} push={6}>
          <div className={styles.secondcontainer}>
            <CustomForm />
            <TableCategory />
          </div>
        </Col>
        <Col span={6} pull={18}>
          <Navbar />
        </Col>
      </Row>
    </div>
  );
};

export default Category;
