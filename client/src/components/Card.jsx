import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 360px;
  margin-bottom: ${(props)=>props.type === "sm"? "10px": "45px"};
  cursor: pointer;
  display: ${(props)=>props.type === "sm" && "flex"};
  gap: 10px;
`

const Image = styled.img`
  width: 100%;
  height: ${(props)=>props.type === "sm"?"120px": "202px"};
  background-color: #999;
  flex: 1;
`

const Details = styled.div`
  display: flex;
  margin-top: ${(props)=>props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=>props.type === "sm" && "none"};
`

const Texts = styled.div``

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme})=>theme.text}
`

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme})=>theme.textSoft};
  margin: 6px 0;
`

const Info = styled.div`
  font-size: 14px;
  color: ${({theme})=>theme.textSoft};
`

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
    <Container type={type}>
      <Image type={type} src="https://www.techsmith.com/blog/wp-content/uploads/2021/02/TSC-thumbnail-example-1024x576.png" alt="" />
      <Details type={type}>
        <ChannelImage type={type} src="https://cdna.artstation.com/p/assets/images/images/050/554/436/large/maryssa-masters-mr-beast-logo.jpg?1655136635" alt="" />
        <Texts>
          <Title>Test Video Title</Title>
          <ChannelName>Mr Beast</ChannelName>
          <Info>650,000 views * 1 hour ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card