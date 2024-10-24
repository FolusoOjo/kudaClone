import styled from "styled-components";

function TextImg({ bigText, value, link, text, Image }) {
  return (
    <>
      <Flex>
        <Text>
          <h2>{bigText}</h2>
          <p>{value}</p>
          <a href={link}>{text}</a>
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

`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexImg =styled.div`
    
`