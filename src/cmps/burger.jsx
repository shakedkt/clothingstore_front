import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../cmps/navBar";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  /* position: fixed; */
  top: 15px;
  left: 25px;
  /* padding-left: 20px; */
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  img {
    width: 60px;
    height: 60px;
  }
`;
const Burger = (props) => {
  const [open, setOpen] = useState(false);

  function changeSection(name) {
    props.changeSection(name);
    setOpen(!open);
  }

  return (
    <>
      <NavBar changeSection={changeSection} open={open}></NavBar>

      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
        {/* <img src={SvgBorger} alt="" /> */}
      </StyledBurger>
    </>
  );
};

export default Burger;
