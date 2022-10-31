import React, { useState, useEffect } from "react";
import UserService from "../store/services/user.service";

const Home = () => {

  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setContent(_content);
          console.log("something"+_content);
      }
    );
  }, []);

console.log("Content: " + content.response);
  return (
    <>
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    </>
  );
}

export default Home;
