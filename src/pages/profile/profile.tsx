import { useState } from "react";
import { Drawer, List, Avatar, Divider, Col, Row, Space } from "antd";
import "antd/dist/antd.css";
import ViewProfile from "./viewProfile";
import { user_data } from "../../lib/data";

const Profile = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [user_name, setName] = useState<string>("");

  const showDrawer = (name: string) => {
    setName(name);
    setVisible(true);
  };

  const onClose = (): void => {
    setVisible(false);
  };

  return (
    <>
      <List
        dataSource={user_data}
        bordered
        renderItem={(item) => (
          <List.Item
            actions={[
              <a onClick={() => showDrawer(item.name)}>View Profile</a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a href="https://ant.design/index-cn">{item.name}</a>}
              description="Progresser XTech"
            />
          </List.Item>
        )}
      />
      <Drawer
        className="view-profile-drawer-right"
        width={"65%"}
        placement="right"
        closable={false}
        onClose={() => onClose()}
        visible={visible}
      >
        <Row justify="end" className="hide-on-large-screen">
            <Col span={1} onClick={() => onClose()}>
              X
            </Col>
        </Row>
        <Space direction="vertical">
          <p className="site-description-item-profile-p">User Profile</p>
          <p className="site-description-item-profile-p">Personal</p>
        </Space>
        <Row>
          <Col xs={{ span: 24 }} sm={12} md={12} lg={12} xl={12}>
            <ViewProfile title="Full Name" content={user_name} />
          </Col>
          <Col xs={{ span: 24 }} sm={12} md={12} lg={12} xl={12}>
            <ViewProfile title="Account" content="AntDesign@example.com" />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="City" content="HangZhou" />
          </Col>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Country" content="China🇨🇳" />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Birthday" content="February 2,1900" />
          </Col>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Website" content="-" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ViewProfile
              title="Message"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Position" content="Programmer" />
          </Col>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Department" content="XTech" />
          </Col>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ViewProfile
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Email" content="AntDesign@example.com" />
          </Col>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile title="Phone Number" content="+86 181 0000 0000" />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} sm={24} md={12} lg={12} xl={12}>
            <ViewProfile
              title="Github"
              content={
                <a href="http://github.com/ant-design/ant-design/">
                  github.com/ant-design/ant-design/
                </a>
              }
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default Profile;
