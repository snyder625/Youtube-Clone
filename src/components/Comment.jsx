import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Username = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({theme})=>theme.text};
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=>theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
    color: ${({theme})=>theme.text};
`


const Comment = () => {
  return (
    <Container>
        <Avatar src="https://cdna.artstation.com/p/assets/images/images/050/554/436/large/maryssa-masters-mr-beast-logo.jpg?1655136635" alt="" />
        <Details>
            <Username>Mr Beast <Date>2 days ago</Date></Username>
            <Text>Wonderful Video</Text>
        </Details>
    </Container>
  )
}

export default Comment