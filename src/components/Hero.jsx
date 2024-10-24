import styled from "styled-components";
import HeroImage from "../assets/heroimg.jpg";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Hero() {
  return (
    <>
      <Container>
        <HeroContainer>
          <HeroText>
            <h1>The money app for Africans.</h1>
            <Text>
              Make free transfers, enjoy cashless payment options and earn
              interest on your savigs with Kuda.
            </Text>
            <Buttons>
              <AppleButton>
                <FaApple size={30} color="#FFF" />
                <But>
                  <p>Download on the</p>
                  <App>App Store</App>
                </But>
              </AppleButton>
              <AndriodButton>
                <IoLogoGooglePlaystore size={30} color="#FFF" />
                <But>
                  <p>GET IT ON</p>
                  <Play>Google Play</Play>
                </But>
              </AndriodButton>
            </Buttons>
          </HeroText>

          <HeroImg>
            <img src={HeroImage} alt="HeroImage" />
          </HeroImg>
        </HeroContainer>
      </Container>
    </>
  );
}
export default Hero;

const Container = styled.div`
  /* background-color: yellow; */
  margin-top: 80px;
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 10px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;


`;
const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;

  /* background-color: green; */

  align-items: center;
  /* justify-content: center; */
`;

const HeroText = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 50px;
    font-weight: 800;
    line-height: normal;
    color: #40196d;
    /* text-align: center; */
  }
  @media (max-width: 800px) {
    max-width: 100%;
    align-items: center;
    line-height: normal;

    h1 {
      text-align: center;
      font-size: 40px;
    }
  }
`;

const Text = styled.p`
  /* border: 2px solid red; */
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const AppleButton = styled.button`
  background-color: black;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 15px;
  border: none;
  outline: none;
  border-radius: 10px;
  p {
    color: #eee;
    font-size: 12px;
  }
  @media (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;
const App = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;
const AndriodButton = styled.button`
  background-color: black;
  display: flex;
  align-items: center;
  padding: 5px 13px 5px 10px;
  margin-left: 15px;
  border: none;
  outline: none;
  border-radius: 10px;

  p {
    color: #eee;
    font-size: 12px;
  }

  @media (max-width: 800px) {
    margin-left: 0;
    margin-bottom: 5px;
  }
`;
const Play = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;
const HeroImg = styled.div`
  img {
    max-width: 500px;

    @media (max-width: 800px) {
        /* border: 2px solid greenyellow; */
        width: 100%;
        /* display: none; */
      img {
        /* max-width: 300px; */
        border: 2px solid red;
        /* max-height: 29px; */
        /* max-width: 5px; */
      }
    }
  }
`;

const But = styled.div`
  /* border: 2px solid green; */
  margin-left: 10px;
  font-size: 10px;
  font-weight: 500;
  text-align: left;
`;
