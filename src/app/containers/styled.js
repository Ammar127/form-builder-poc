import styled from "styled-components";

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
  display: block;
`;
export const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const IconSpan = styled.span`
  cursor: pointer;
  padding: 0 2px;
`;

export const MoveSpan = styled.span`
  background: #f6f6f6;

  position: absolute;
  right: -20px;
  top: -15px;
  padding: 5px 10px;
  border-radius: 25px;
  border: 1px solid lightgrey;
  color: #717171;
`;
export const FieldContainer = styled.div`
  position: relative;
`;
export const Main = styled.div`
  overflow-y: auto;
  padding: 5px 100px;
  width: 100%;
  margin-left: 20%;
  z-index: 999;
`;
export const Header = styled.div`
  color: #c1c1c1;
  text-align: center;
`;
export const Footer = styled.div`
  color: #c1c1c1;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;
;
export const Cancel = styled.button`
  text-align: center !important;
  border: none;
  border-radius: 25px;
  width: 200px;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  background-color: lightgrey;
  box-shadow: 0 0 4px #65acfb;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  margin-top: 5px;
  margin-right: 10px;
  &:hover {
    background: #65acfb radial-gradient(circle, transparent 1%, #79b2f3 1%)
      center/15000%;
  }

  &:active {
    background-color: #65acfb;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const Save = styled.button`
  border: none;
  border-radius: 25px;
  width: 200px;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  background-color: #027aff;
  box-shadow: 0 0 4px #65acfb;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  margin-top: 5px;
  text-align: left;
  &:hover {
    background: #65acfb radial-gradient(circle, transparent 1%, #79b2f3 1%)
      center/15000%;
  }

  &:active {
    background-color: #65acfb;
    background-size: 100%;
    transition: background 0s;
  }
`;
export const SaveSpan = styled.span`
  margin-left: 30px;
`;
export const OverLay = styled.hr`
  background: #027aff;
  height: 2px;
  border: none;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
`;
export const FirstDiv = styled.div`
  padding: 5px;
`;

// left nav
export const Nav = styled.div`
  background: #027aff;
  height: 100vh;
  display: flex;
  flex: 0 0 200px;
  flex-flow: column nowrap;
  text-align: center;
  z-index: 30;
  padding: 1rem 0 0 0;
  justify-content: flex-start;
  color: white;
  position: fixed;
  width: 20%;
`;
export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const Li = styled.li`
  padding: 5px 25px;
`;
export const DashedButton = styled.button`
  border: dashed 0.5px;
  border-radius: 25px;
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: transparent;
  box-shadow: 0 0 4px #65acfb;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  margin-top: 5px;
  text-align: left;
  &:hover {
    background: #65acfb radial-gradient(circle, transparent 1%, #79b2f3 1%)
      center/15000%;
  }

  &:active {
    background-color: #65acfb;
    background-size: 100%;
    transition: background 0s;
  }
`;
export const ValidateButton = styled.button`
  border: none;
  border-radius: 25px;
  width: 100%;
  padding: 12px 15px;
  font-size: 20px;
  cursor: pointer;
  color: #027aff;
  background-color: white;
  box-shadow: 0 0 4px #65acfb;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  margin-top: 5px;
  text-align: left;
  &:hover {
    background: #65acfb radial-gradient(circle, transparent 1%, #79b2f3 1%)
      center/15000%;
  }

  &:active {
    background-color: #65acfb;
    background-size: 100%;
    transition: background 0s;
  }
`;
// index
export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100%;
`;
export const HomeLeftLi = styled.li`
  padding: 5px 25px;
  &:hover {
    background: #65acfb radial-gradient(circle, transparent 1%, #79b2f3 1%)
      center/15000%;
  }

  &:active {
    background-color: #65acfb;
    background-size: 100%;
    transition: background 0s;
  }
`;
export const RightNav = styled.div`
  background: #f4f4f4;
  height: 100vh;
  display: flex;
  flex: 0 0 200px;
  flex-flow: column nowrap;
  text-align: left;
  z-index: 30;
  padding: 8rem 0 0 1rem;
  justify-content: flex-start;
  color: black !important;
  position: fixed;
  width: 20%;
  margin-left: 20%;
`;
export const FormsSpan = styled.span`
  text-align: left !important;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  margin-left: 50px;
  
`;
export const HomeSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100%;
`;
export const LeftContainer = styled.div`
  
  height: 104vh;
  display: flex;
  flex-flow: column;
  width: 70%;
  padding-left: 100px;
  padding-top: 20px;
`;
export const LeftFooter= styled.div`
  
`;
export const RightContainer = styled.div`

  height: 100vh;
  display: flex;
  flex-flow: column;
  width: 30%;
  padding: 20px;
`;
export const PreviewHeader = styled.div`
  padding: 40px 100px;

  height: 5%;
  color: lightgrey;
  font-weight: 900;
  font-size: 30px;
`;
export const FormContainer = styled.div`
  border: 1px solid;
  padding: 5px 100px;
  overflow-y: scroll;
  height: 400px;
  margin: 10px 0;
`;
export const Values = styled.div`
  border: 1px solid;
  margin: 10px 0;
  height: 150px;
  overflow-y: scroll;

`;
export const Errors = styled.div`
  border: 1px solid;
  margin: 10px 0;
  height: 90px;
  overflow-y: scroll;
`;
export const Events = styled.div`
  border: 1px solid;
  margin: 10px 0;
  height: 90px;
  overflow-y: scroll;
`;

export const Submit = styled.button`
  border: none;
  border-radius: 2px;
  width: 100px;
  padding: 6px 15px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  background-color: #027aff;
  box-shadow: 0 0 4px #65acfb;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  margin-top: 5px;
  text-align: center;
  &:hover {
    background: #65acfb radial-gradient(circle, transparent 1%, #79b2f3 1%)
      center/15000%;
  }

  &:active {
    background-color: #65acfb;
    background-size: 100%;
    transition: background 0s;
  }
`;
export const PreviewCancel = styled.button`
  border: none;
  border-radius: 2px;
  width: 100px;
  padding: 6px 15px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  background-color: lightgrey;
  box-shadow: 0 0 4px #65acfb;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  margin-top: 5px;
  text-align: center;
  &:hover {
    background: #65acfb radial-gradient(circle, transparent 1%, #79b2f3 1%)
      center/15000%;
  }

  &:active {
    background-color: #65acfb;
    background-size: 100%;
    transition: background 0s;
  }
`;

 
export const Title = styled.span`
    font-weight: 600;
    font-size: 18px;
`;

export const HeadingUL = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 2.3rem;
  text-align: left;
  list-style-type: none;
`;