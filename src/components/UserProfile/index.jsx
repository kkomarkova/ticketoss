import React from "react";
import EventImg from "../../images/eventImg.jpg";
import "./index.css";
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const UserProfile = (props) => {
  
  return (
    <>
       <div className="App">
      <h1 value={"UserName"}>My profile </h1>
      <div class="seller-profile">
            <div>
            <img src={""} title="#"/></div>
            <h2 >Seller Name</h2>
          </div>
      
      <Tabs>
        <TabList>
          <Tab>
            <p>Profile info</p>
          </Tab>
          <Tab>
            <p>Card details</p>
          </Tab>
          <Tab>
            <p>My purchases</p>
          </Tab>
          <Tab>
            <p>Sell a ticket</p>
          </Tab>
          <Tab>
            <p>Title 5</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>Any content 1</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 3</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 4</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 5</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>

    </>
  );
};

export default UserProfile;

