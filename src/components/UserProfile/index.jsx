import React from "react";
import "./index.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const UserProfile = (props) => {
  
  return (
    <>
       <div className="App">
      <h1 value={"UserName"}>My profile </h1>
      <div className="seller-profile">
            {/* <div>
            <img src={""} title="#" alt="pb"/></div> */}
            <h2 >{props.Name}</h2>
          </div>
      
      <Tabs>
        <TabList>
          <Tab>
            <p>Profile info</p>
          </Tab>
          <Tab>
            <p>My purchased tickets</p>
          </Tab>
          <Tab>
            <p>Sold tickets</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <strong><p>Name</p></strong>
            <p>{props.Name}</p>
            <strong><p>Email</p></strong>
            <p>{props.Email}</p>
            <strong><p>Phone</p></strong>
            <p>{props.Phone}</p>
            <strong><p>Token</p></strong>
            <p>
              {props.Token.substring(0,20)}...{" "}
              {props.Token.substr(props.Token.length - 20)}
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            {props.Tickets.map((ticket) => (
              <div key={ticket.id}>
                <h2>{ticket.eventName}</h2>
                <p>{ticket.eventDate}</p>
                <p>{ticket.eventTime}</p>
                </div>
            ))};
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 3</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>

    </>
  );
};

export default UserProfile;

