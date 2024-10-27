import TextImg from "../components/TextImg";
import Imaged from "../assets/text1.jpg";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

function Text() {
  return (
    <>
      <Bgcolor>
        <TextImg
          bigText="Your phone + our app + a debit card = a simpler life."
          value="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."
          link="ghj"
          text="Open an Account in Minutes"
          icon= <IoIosArrowForward/>
          Image={Imaged}

        />
      </Bgcolor>
    </>
  );
}
export default Text;

const Bgcolor = styled.div`
  background-color: red;
  height: calc(100vh - 70px);
  align-items: center;
  display: flex;
  width
`;
