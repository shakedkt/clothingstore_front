import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;

  .links-section {
    padding: 18px 10px 18px 0px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(-100%)"};
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    margin-top: 4.5rem;
    transition: transform 0.3s ease-in-out;
    padding-left: 15px;

    .links-section {
      color: #fff;
    }

    button {
      margin: 0px 0px 0px 0px;
      font-size: 20px;
      font-family: 'vegur-bold';
    }
  }
`;

export default (props) => {
  function changeSection(section) {    
    props.changeSection(section);
  }

  return (
    <Nav className="links" open={props.open}>
      <button className="links-section" onClick={() => changeSection("")}>
        All
      </button>
      <button 
        className="links-section"
        onClick={() => changeSection("Topwear")}
      >
        Shirts
      </button>
      <button 
        className="links-section"
        onClick={() => changeSection("Bottomwear")}
      >
        Pants
      </button>
      <button 
        className="links-section"
        onClick={() => changeSection("Watches")}
      >
        Watches
      </button>
    </Nav>
  );
};
