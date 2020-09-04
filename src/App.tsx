import React from 'react'
import styled from 'styled-components'
import Logo from './img/Logo.png'
import Inspection from './img/inspection-image.png'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 320px) {
        margin: 30px 0;
    }
`

const Img = styled.img`
    margin: 10px;
`

const InspectionImg = styled.img`
    margin: 10px 50px;

    @media screen and (max-width: 500px) {
        width: 300px;
    }

    @media screen and (max-width: 320px) {
        width: 250px;
    }
`

const Title = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    color: #111111;
    margin: 10px;

    @media screen and (max-width: 320px) {
        font-size: 15px;
    }
`

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: 10px;
    width: 500px;
    height: 169px;
    background: #f8f8ff;
    border: 1px solid #c2c5fe;
    box-sizing: border-box;
    border-radius: 10px;

    @media screen and (max-width: 500px) {
        width: 90vw;
        padding: 10px;
    }

    @media screen and (max-width: 320px) {
        padding: 5px;
    }
`

const Body = styled.div`
    font-size: 14px;
    line-height: 145%;
    color: #111111;
    width: 450px;
    margin: 10px;

    @media screen and (max-width: 500px) {
        width: 88vw;
        padding: 0 10px;
    }

    @media screen and (max-width: 320px) {
        font-size: 13px;
        padding: 0;
    }
`

const BodyHighlight = styled.span`
    font-weight: 500;
    text-decoration: underline;
`

const QuestionLink = styled.a`
    font-weight: 500;
    font-size: 14px;
    line-height: 145%;
    color: #6179ff;
    margin: 10px;
    text-decoration: none;
`

const App = () => {
    return (
        <Wrapper>
            <Img src={Logo} alt='pixelsc' />
            <Title>서버 증설 작업으로 인한 서비스 점검 안내</Title>
            <InspectionImg src={Inspection} alt='Inspection image' />
            <DetailBox>
                <DetailContent
                    title='점검 기간'
                    body='2020년 9월 8일 (오전) 2시 - 8시'
                />
                <DetailContent
                    title='점검 내용'
                    body='이용자 수 증가로 인한 서버 증설 작업'
                />
                <DetailContent
                    title='점검 영향'
                    body='서비스 이용의 일시적 제한'
                />
            </DetailBox>
            <Body>
                이용자 수 증가로 인하여 보다 안정적인 서비스를 제공하기 위해
                진행되는 작업입니다.{' '}
                <BodyHighlight>
                    서비스 점검은 내부 사정에 따라 연장되거나 조기 오픈 될 수
                    있습니다.
                </BodyHighlight>
            </Body>
            <QuestionLink href='https://pixel-sc.channel.io/' target='_blank'>
                PIXEL sc에 문의할 게 있으신가요?
            </QuestionLink>
        </Wrapper>
    )
}

const DetailContentWrapper = styled.div`
    display: flex;
    margin: 10px;
    margin-left: 67px;

    @media screen and (max-width: 500px) {
        margin: 10px;
        font-size: 14px;
    }
`

const DetailContentTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: #4455b3;

    @media screen and (max-width: 500px) {
        font-size: 14px;
    }

    @media screen and (max-width: 320px) {
        font-size: 13px;
    }
`

const DetailContentBody = styled.div`
    font-weight: 500;
    font-size: 16px;
    margin-left: 20px;
    color: #111111;

    @media screen and (max-width: 500px) {
        margin-left: 10px;
        font-size: 14px;
    }

    @media screen and (max-width: 320px) {
        margin-left: 8px;
        font-size: 13px;
    }
`

interface DetailContentProps {
    title: string
    body: string
}

const DetailContent: React.FC<DetailContentProps> = ({ title, body }) => (
    <DetailContentWrapper>
        <DetailContentTitle> {title} </DetailContentTitle>
        <DetailContentBody>{body}</DetailContentBody>
    </DetailContentWrapper>
)

export default App
