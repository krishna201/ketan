import React from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import ContainerHeader from "globals/components/ContainerHeader";
import "./contact.style.scss";
class Home extends React.Component {
  render() {
    return (
      <ContainerLayout>
        <ContainerHeader title="CONTACT US" />
        <div className="home">
          <h2>Prahladbhai Ojha (President): 90990 25985</h2>
          <h2>Keshavlal Prajapati (Minister): 90990 25985</h2>

          <div>
            <h2> Website Mobile App Developer Contact: -</h2>
            <h3>
              {" "}
              In case of any technical error in the website or mobile
              application, please contact Boney Prajapati at the following
              details.
            </h3>
          </div>
          <h2>
            Bonnie Prajapati Mobile Number: 90169 07846 E-mail:
            bountybonny@gmail.com
          </h2>
        </div>
      </ContainerLayout>
    );
  }
}

export default Home;
