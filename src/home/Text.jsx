import TextImg from "../components/TextImg";
import Imaged from "../assets/text1.jpg";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import Imgtext from "../components/Imgtext";
import Download4 from "../assets/download (4).svg";
import Download2 from "../assets/download (2).svg";
import Download3 from "../assets/download (3).svg";
import Download from "../assets/download.svg";
import Download1 from "../assets/download (1).svg";

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
        Image={Download4}
        bigText="It’s your money, we just help you manage it."
        value="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that."
      />

      <TextImg
        bigText="Save money as you spend it, seriously."
        value="You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow."
        link="ghj"
        text="See all our Savings"
        icon=<IoIosArrowForward />
        Image={Download2}
      />

      <Imgtext
        Image={Download3}
        bigText="Turn off access, turn on safety."
        value="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try."
        link="ghj"
        text="Learn more about Cards"
        icon=<IoIosArrowForward />
      />

      <TextImg
        bigText="We’re always happy to help you."
        value="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy."
        link="ghj"
        text="Get Help"
        icon=<IoIosArrowForward />
        Image={Download}
      />

      <Imgtext
        Image={Download1}
        value="We’re serious about free banking, and we will never, ever charge you for anything without your consent."
        bigText="Fees as clear as glass."
        link="ghj"
        text="See all our fees"
        icon=<IoIosArrowForward />
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
