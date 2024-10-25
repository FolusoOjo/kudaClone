import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

function TextImg({ bigText, value, link, text, Image, icon }) {
  return (
    <>
      <Flex>
        <Text>
          <h2>{bigText}</h2>
          <p>{value}</p>
          <a href={link}>{text}{icon}</a>
        </Text>

        <FlexImg>
          <img src={Image} alt="" />
        </FlexImg>
      </Flex>
    </>
  );
}
export default TextImg;

const Text = styled.div`
  max-width: 350px;
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
  }
  a{
    margin-top: 10px;
    color: #40196d;
    font-size:14px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`;

const FlexImg = styled.div`
  border: 2px solid rebeccapurple;

  img {
    width: 420px;
    text-align: center;
  }
`;
