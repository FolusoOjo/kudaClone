import TextImg from "../components/TextImg";
import Imaged from "../assets/text1.jpg";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import Imgtext from "../components/Imgtext";
import Text2 from "../assets/text2.jpg";

function Text() {
  return (
    <>
      <Bgcolor>
        <TextImg
          bigText="Your phone + our app + a debit card = a simpler life."
          value="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."
          link="ghj"
          text="Open an Account in Minutes"
          icon=<IoIosArrowForward />
          Image={Imaged}
        />
      </Bgcolor>
      {/* bigText, value, link, text, Image, icon  */}
      <Imgtext
        Image={Text2}
        bigText="It’s your money, we just help you manage it."
        value="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that."
      />
    </>
  );
}
export default Text;

const Bgcolor = styled.div`
  /* background-color: red; */
  height: calc(100vh - 70px);
  align-items: center;
  justify-content: center;
  display: flex;
`;
