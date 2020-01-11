import React, { Component } from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import { Button, Table, Collapse } from "antd";
const { Panel } = Collapse;

const columns = [
  {
    title: "પોતે",
    dataIndex: "પોતે",
    key: "પોતે",
    render: text => text
  },
  {
    title: "જન્મ તારીખ",
    dataIndex: "જન્મ તારીખ",
    key: "જન્મ તારીખ"
  },
  {
    title: "ભણતર",
    dataIndex: "ભણતર",
    key: "ભણતર"
  },
  {
    title: "લગ્ન સ્થિતિ",
    dataIndex: "લગ્ન સ્થિતિ",
    key: "લગ્ન સ્થિતિ"
  },
  {
    title: "સાસરી",
    dataIndex: "સાસરી",
    key: "સાસરી"
  },
  {
    title: "મોબાઇલ નં",
    dataIndex: "મોબાઇલ નં",
    key: "મોબાઇલ નં"
  },
  {
    title: "વ્ય નું સરનામું",
    dataIndex: "વ્ય નું સરનામું",
    key: "વ્ય નું સરનામું"
  },
  {
    title: "સરનામું",
    dataIndex: "સરનામું",
    key: "સરનામું"
  }
];
const data = [
  {
    key: "1",
    સરનામું:
      "208, ઓમ શાંતિ ગોલ્ડ પ્લસ ,લાંભા - વટવા રોડ ,લાંભા, અમદાવાદ, 352440",
    પોતે: "કેતનભાઈ ઘનશ્યામભાઈ પ્રજાપતિ",
    "જન્મ તારીખ": "26-03-1996",
    મોસાળ: "સાંકરદા",
    ભણતર: "બી.ઇ (કોમ્પ્યુટર એન્જીનીયર)",
    "લગ્ન સ્થિતિ": "પરણિત ",
    સાસરી: "સરભાન",
    "મોબાઇલ નં": 9924731218,
    "વ્ય નું સરનામું": "સોલા અમદાવાદ"
  }
];

export default class Ahmedabadzone extends Component {
  render() {
    return (
      <ContainerLayout>
        <span>
          <Button style={{ marginRight: 10, fontSize: 20 }} type="primary">
            નારોલ
          </Button>
          <Button style={{ marginRight: 10, fontSize: 20 }} type="primary">
            મેમનગર
          </Button>
          <Button style={{ marginRight: 10, fontSize: 20 }} type="primary">
            ઇસનપુર
          </Button>
          <Button style={{ marginRight: 10, fontSize: 20 }} type="primary">
            વટવા
          </Button>
          <Button style={{ marginRight: 10, fontSize: 20 }} type="primary">
            નારણપુરા
          </Button>
          <Button style={{ marginRight: 10, fontSize: 20 }} type="primary">
            ચાંદખેડા
          </Button>
          <Button style={{ marginRight: 10, fontSize: 20 }} type="primary">
            લાંભા
          </Button>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <h1 style={{ color: "red", fontSize: 35 }}>લાંભા</h1>
        </div>
        <div style={{ backgroundColor: "orange" }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ position: "none" }}
          />
        </div>
        <div style={{ marginTop: 30 }}>
          <Collapse accordion expandIconPosition={"right"}>
            <Panel header="કેતનભાઈ ઘનશ્યામભાઈ પ્રજાપતિ" key="1">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ position: "none" }}
              />
            </Panel>
            <Panel header="કેતનભાઈ ઘનશ્યામભાઈ પ્રજાપતિ" key="2">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ position: "none" }}
              />
            </Panel>
            <Panel header="કેતનભાઈ ઘનશ્યામભાઈ પ્રજાપતિ" key="3">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ position: "none" }}
              />
            </Panel>
          </Collapse>
        </div>
      </ContainerLayout>
    );
  }
}
