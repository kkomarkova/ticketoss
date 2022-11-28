import React from "react";
import "./index.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const UserProfile = (props) => {
  
  return (
    <>
       <div className="App">
      <h1 value={"UserName"}>My profile </h1>
      <div class="seller-profile">
            <div>
            <img src={""} title="#" alt="pb"/></div>
            <h2 >{props.Name}</h2>
          </div>
      
      <Tabs>
        <TabList>
          <Tab>
            <p>Profile info</p>
          </Tab>
          <Tab>
            <p>{props.cardDetails}</p>
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
            <strong><p>Name</p></strong>
            <p>{props.Name}</p>
            <p>Email</p>
            <p>{props.Email}</p>
            <p>Phone</p>
            <p>{props.Phone}</p>
            <p>Token</p>
            <p>{props.Token.substring(0,20)}...{" "}
                {props.Token.substr(props.Token.length - 20)}
                </p>
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

