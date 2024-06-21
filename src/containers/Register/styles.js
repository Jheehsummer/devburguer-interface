import styled from "styled-components";
import bkg1 from '../../assets/bkg 1.svg'
import bkg2 from '../../assets/bkg 2.svg'
import { Link as ReactLink } from "react-router-dom";


export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  
`;

export const LeftContainer = styled.div`
  background: url('${bkg1}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  background: url('${bkg2}');
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;
`;

export const Title = styled.h2`
  color: rgba(151, 88, 166, 1);
  font-family: 'Road Rage', sans-serif;
  font-weight: 400;
  align-items: center;
  font-size: 40px;
 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  p {
  font-size: 18px;
  font-weight: 800;
  color: #f1f1f1;
  text-align: center;

  
}
  
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #f1f1f1;
  }

  p {
    font-size: 16px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    margin-top: 10px;
    height: 10px;
    
  }
  
`;

export const Link = styled(ReactLink)` 
    
  text-decoration: underline;
  color: rgba(151, 88, 166, 1);
  font-weight: bold;

  &:hover {
  color: rgba(111, 53, 124, 1);
  
}


`;






