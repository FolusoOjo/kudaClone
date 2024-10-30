import styled from "styled-components";

function Imgtext({ bigText, value, link, text, Image, icon }) {
  return (
    <>
      <Wrapper>
        <Flex>
          <FlexImg>
            <img src={Image} alt="" />
          </FlexImg>

          <Text>
            <h2>{bigText}</h2>
            <p>{value}</p>
            <a href={link}>
              {text}
              {icon}
            </a>
          </Text>
        </Flex>
      </Wrapper>
    </>
  );
}
export default Imgtext;

const Wrapper = styled.div`
  margin-top: 70px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 10px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45%;
  margin-left: 20px;

  h2 {
    font-size: 34px;
    font-weight: 900;
    /* text-align: right; */
    max-width: 400px;
    color: #40196d;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;

    margin-bottom: 5px;
    width: 75%;
    margin-top: 15px;
    font-weight: 500;
  }
  a {
    margin-top: 10px;
    color: #40196d;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    padding: 10px;
    text-align: center;
    margin: 10px auto 40px;

    h2 {
      font-size: 28px;
      font-weight: 800;
    }

    p {
      font-size: 15px;
      text-align: center;
      width: 100%;
      margin-top: 5px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  margin-left: auto;
  /* flex-wrap: wrap; */
  margin-right: auto;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const FlexImg = styled.div`
  img {
    width: 580px;
    text-align: center;
  }
  @media (max-width: 800px) {
    img {
      width: 100%;
    }
  }
`;
