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
  color: white;
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
export const RightNav = styled.div`
  background: #f4f4f4;
  height: 100vh;
  display: flex;
  flex: 0 0 200px;
  flex-flow: column nowrap;
  text-align: center;
  z-index: 30;
  padding: 1rem 0 0 0;
  justify-content: flex-start;
  color: black;
  position: fixed;
  width: 20%;
  margin-left: 20%;
`;
export const FormsSpan = styled.span`
  text-align: left !important;
  width: 100%;
  font-size: 24px;
  font-weight: 1000;
  margin-left: 50px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100%;
`;
export const LeftContainer = styled.div`
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
  width: 70%;
`;
export const RightContainer = styled.div`
  background: #f4f4f4;
  height: 100vh;
  display: flex;
  flex: 0 0 200px;
  flex-flow: column nowrap;
  text-align: center;
  z-index: 30;
  padding: 1rem 0 0 0;
  justify-content: flex-start;
  color: black;
  position: fixed;
  width: 30%;
  margin-left: 70%;
`;
export const PreviewHeader = styled.div`
  padding: 50px 100px;
  background: red;
  height: 5%;
`;
export const FormContainer = styled.div`
  border: 1px solid;
  padding: 5px: 100px
`;
export const Values = styled.div`
  border: 1px solid
`;
export const Errors = styled.div`
  border: 1px solid
`;
export const Events = styled.div`
  border: 1px solid
`;