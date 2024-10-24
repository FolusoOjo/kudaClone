import Image from "../assets/images.png";
import { MdArrowDropDown } from "react-icons/md";
import Flag from "../assets/Flag_of_Nigeria.svg";
import styled from "styled-components";
import { IoReorderTwoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Container>
        <LogoNav>
          <Logo>
            <img src={Image} alt="Logo" width="110px" />
          </Logo>

          <Navigation>
            <Link to="/">
              <p>
                <span>Personal</span> <MdArrowDropDown />
              </p>
            </Link>

            <Link to="/business">
              <p>
                <span>Business</span> <MdArrowDropDown />
              </p>
            </Link>
            <Link to="companies">
              <p>
                <span>Company</span> <MdArrowDropDown />
              </p>
            </Link>
            <p>
              <span>Help</span> <MdArrowDropDown />
            </p>
          </Navigation>
        </LogoNav>

        <Buttons>
          <SignIn>Sign in</SignIn>
          <JoinBtn>Join Kuda</JoinBtn>
          <Btn>
            <CtBtn>
              <img src={Flag} alt="Nigeria Flag" width="20px" />
            </CtBtn>
            <HamBtn>
              <IoReorderTwoOutline />
            </HamBtn>
          </Btn>
        </Buttons>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: #fff;
  min-width: 100%;
  /* position: fixed;
  top: 0;
  left: 0; */
  margin-bottom: 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    /* background-color: red; */
    min-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`;
const LogoNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding-top: 5px;
  margin-right: 5px;
`;
const Logo = styled.div`
  margin-left: 40px;
`;
const Navigation = styled.div`
  display: flex;
  margin-left: 60px;
  /* border: 2px solid gray; */

  p {
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    margin: 0 20px;
    color: #40196d;

    span {
      margin-right: 5px;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  padding-top: 5px;
  min-width: 20%;
`;

const SignIn = styled.button`
  border: 2px solid red;
  padding: 15px 20px;
  color: #8d76a8;
  font-size: 20px;
  font-weight: 900;
  background-color: transparent;
  outline: none;
  border: none;

  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;
const JoinBtn = styled.button`
  padding: 15px 30px;
  margin: 0 10px;
  font-size: 20px;
  font-weight: 600;
  background-color: #40196d;
  color: white;
  border-radius: 10px;

  @media (max-width: 700px) {
    display: none;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;
const CtBtn = styled.button`
  background-color: #48d38a;
  /* padding: 15px; */
  border-radius: 40px;
  height: 50px;
  width: 50px;
  border: 0;
  outline: none;
`;

const HamBtn = styled.div`
  font-size: 35px;
  display: none;

  @media (max-width: 700px) {
    display: flex;
    margin-left: 15px;
    align-items: center;
  }

  @media (max-width: 1100px) {
    display: flex;
    margin-left: 15px;
    align-items: center;
  }
`;
const Btn = styled.div`
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: yellow; */
    margin-right: 10px;
  }
`;
