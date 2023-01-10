import styled from "styled-components";


export const FormWrapper = styled.section`
    max-width: 852px;
    height: 100%;
    width: 100%;
    background: #FFFFFF;
    border-radius: 10px;
    form {
        display: flex;
        flex-direction: column;
        margin: 24px;
        position: relative;
    }
    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        display: flex;
        align-items: center;
        color: #1A202C;
    }

    h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #90A3BF;
        margin-bottom: 24px;
    }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;


export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    margin-bottom: 25px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
  }
`;

export const SecurityGroup = styled.div`
  display: flex;
  margin: 2rem 0 0;
  gap: 10px;
  flex-direction: column;
  & h2{
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    color: #1A202C;
  }
  & h3{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #90A3BF;
  }
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const AlertGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const Alert = styled.div`
  width: 100%;
  height: 45px;
  background: #F6F7F9;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  padding: 0 24px;
  justify-content: flex-start;
  align-items: center;
  span{
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #1F2544;
  }
  label{
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #1F2544;
  }
  
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  span{
    font-size: 14px;
  }

  label{
    font-size: 14px;
  }
  }
  @media (min-width: 1024px) {
  }
`;

export const InputGroup = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    label {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 120%;
        display: flex;
        align-items: center;
        color: #1A202C;
    }
    input, button, textarea, select {
        width: 100%;
        height: 56px;
        background: #F6F7F9;
        font-size: .8rem;
        line-height: 1.5rem;
        max-width: 35em;
        margin-left: auto;
        margin-right: auto;
        padding: 1rem 0.75rem;
        border: 1px solid lightgrey;
        border-radius: 4px;
        &::placeholder {
            color: #90A3BF;
    }
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const UploadResponseRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 22px;
    & label {
        font-style: normal;
        font-weight: 600;
        font-size: 14.9061px;
        line-height: 22px;
        color: #333F51;
    }
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const Button = styled.button`
    display: flex;
    border: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    gap: 8px;
    width: 100%;
    left: 0;
    color: #FFFFFF;
    background: #3563E9;
    border-radius: 10px;
    margin-top: 2rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1024px) {
  }
`;


const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#107c10";
  }
  if (props.isDragReject) {
    return "#d83b01";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#90A3BF";
};

export const UploadResponseGroup = styled.div`
    background: #FFFFFF;
    border: 0.931634px solid #D5DAE1;
    border-radius: 7.45307px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 85.71px;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    position: relative;
    label {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 120%;
        display: flex;
        align-items: center;
        color: #1A202C;
    }
    span{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 22px;
        text-align: right;
        color: #90A3BF;
    }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const StyledUpload = styled.div`
    text-align: center;
    padding: 20px;
    color: #90A3BF;
    margin-bottom: 20px;
    cursor: pointer;
    width: 100%;
    height: 183.53px;
    border-radius: 5.5898px;
    border: 2px dashed ${(props) => getColor(props)};
    & span {
      font-size: 2.5em;
    }
  `;

export const StyledRender = styled.div`
    & span {
      display: inline-block;
      color: #f08080;
      font-weight: bold;
      margin-left: 10px;
      &:hover {
        cursor: pointer;
        color: red;
      }
    }
  `;

export default {
  StyledUpload,
  StyledRender
};

export const SecurityIconElement = styled.img`
width: 32px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;