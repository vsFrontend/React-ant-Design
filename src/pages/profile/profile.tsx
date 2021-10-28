import { useState } from "react";
import { Drawer, List, Avatar, Divider, Col, Row } from "antd";
import "antd/dist/antd.css";
import HelperFunction from "./helper";

const Profile = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [user_name, setName] = useState<string>('');

  var user_data = [
    {
      name: "Hoshly",
    },
    {
      name: "Tony",
    },
    {
      name: "Frank",
    },
    {
      name: "Silly",
    },
  ];

  const showDrawer = (name:string) => {
    setName(name)
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <List
        dataSource={user_data}
        bordered
        renderItem={(item) => (
          <List.Item
            actions={[<a onClick={() => showDrawer(item.name)}>View Profile</a>]}
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
        width={"60%"}
        placement="right"
        closable={false}
        onClose={() => onClose()}
        visible={visible}
      >
        <p
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <HelperFunction title="Full Name" content={user_name} />
          </Col>
          <Col span={12}>
            <HelperFunction title="Account" content="AntDesign@example.com" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <HelperFunction title="City" content="HangZhou" />
          </Col>
          <Col span={12}>
            <HelperFunction title="Country" content="China🇨🇳" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <HelperFunction title="Birthday" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <HelperFunction title="Website" content="-" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <HelperFunction
              title="Message"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col span={12}>
            <HelperFunction title="Position" content="Programmer" />
          </Col>
          <Col span={12}>
            <HelperFunction title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <HelperFunction title="Department" content="XTech" />
          </Col>
          <Col span={12}>
            <HelperFunction title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <HelperFunction
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <HelperFunction title="Email" content="AntDesign@example.com" />
          </Col>
          <Col span={12}>
            <HelperFunction title="Phone Number" content="+86 181 0000 0000" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <HelperFunction
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
