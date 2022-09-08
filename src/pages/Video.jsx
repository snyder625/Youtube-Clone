import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../components/Comments';
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Content = styled.div`
  flex: 5;
`

const VideoWrapper = styled.div`
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme})=>theme.text};
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
  color: ${({theme})=>theme.textSoft};
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme})=>theme.text};
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({theme})=>theme.text};
`

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme})=>theme.soft};
`

const Recommendation = styled.div`
  flex: 2;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme})=>theme.text};
`

const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme})=>theme.textSoft};
  font-size: 13px;
`

const Description = styled.p`
  font-size: 14px;
`


const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`


const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe width="100%" height="480"src="https://www.youtube.com/embed/k3Vfj-e1Ma4" frameborder="0" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>625,000 views • Jun 30, 2022</Info>
          <Buttons>
            <Button><ThumbUpOutlinedIcon /></Button>
            <Button><ThumbDownOffAltOutlinedIcon/>Dislike</Button>
            <Button><ReplyOutlinedIcon/>Share</Button>
            <Button><AddTaskOutlinedIcon/>Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Avatar src="https://cdna.artstation.com/p/assets/images/images/050/554/436/large/maryssa-masters-mr-beast-logo.jpg?1655136635" alt="" />
            <ChannelDetail>
              <ChannelName>Mr Beast</ChannelName>
              <ChannelCounter>20M subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet, consectetur adip</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video