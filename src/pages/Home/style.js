import styled from "styled-components";

export const Container = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: block;
justify-content: space-around;
background-color: #c4c4c4;

`;

export const Content = styled.div`
padding: 50px;
height: 70vh;
max-width: 700px;
display: flex;
justify-content: flex-around;
background-color: #fff;
border-radius: 15px;
`;

export const Block = styled.div`
    width: 200px;
    height: 180px;
    border-radius: 20px;
    display: flex;
    padding-top: 5px;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin-left: 20px;
`;

export const Img = styled.img`
width: 80px;
height: 70px;
object-fit: contain;
`;