import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

function TextImg({ bigText, value, link, text, Image, icon }) {
  return (
    <>
      <Wrapper>
        <Flex>
          <Text>
            <h2>{bigText}</h2>
            <p>{value}</p>
            <a href={link}>
              {text}
              {icon}
            </a>
          </Text>

          <FlexImg>
            <img src={Image} alt="" />
          </FlexImg>
        </Flex>
      </Wrapper>
    </>
  );
}
export default TextImg;

const Wrapper = styled.div`
  margin-top: 70px;
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 10px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: yellow;
`;

const Text = styled.div`
  /* max-width: 350px; */
  display: flex;
  flex-direction: column;
  justify-content: center;


  h2 {
    font-size: 38px;
    max-width: 300px;
    color: #40196d;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #000000;
    background-color: yellow;
    margin-bottom: 5px;
    max-width: 50%;
  }
  a {
    margin-top: 10px;
    color: #40196d;
    font-size: 14px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  width: 85%;
  margin-left: auto;
  /* flex-wrap: wrap; */
  margin-right: auto;
`;

const FlexImg = styled.div`
  border: 2px solid rebeccapurple;

  img {
    width: 420px;
    text-align: center;
  }
`;
