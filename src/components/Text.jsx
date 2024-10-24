import TextImg from "./TextImg";
import Imaged from "../assets/text1.jpg";

function Text() {
  return (
    <>
      <div>
        <TextImg
          bigText="Your phone + our app + a debit card = a simpler life."
          value="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."
          link="ghj"
          text="Open an Account in Minutes"
          Image={Imaged}
        />
      </div>
    </>
  );
}
export default Text;
