import "./home.scss"
import services from '../imgs/services.png';
import clients from '../imgs/client-profile.jpg'
import probono from '../imgs/probono.jpg'

import styled, { keyframes } from "styled-components"

const textSlideRight = keyframes `
    0% { opacity: 0; transform: translateX(-100px); }
    100% { opacity: 1; transform: translateX(0px); }
`
const WrapperSlideRight = styled.div`
    animation-name : ${textSlideRight};
    animation-duration : 3s;
    animation-fill-mode: forwards;
`

const textSlideLeft = keyframes `
    0% { opacity: 0; transform: translateX(100px); }
    100% { opacity: 1; transform: translateX(0px); }
`
const WrapperSlideLeft = styled.div`
    animation-name : ${textSlideLeft};
    animation-duration : 3s;
    animation-fill-mode: forwards;
`

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="container" >
                <div className="float-child" style={{borderBottom: "2px solid gray"}}>
                    <div style={{width: "70%"}}>
                        <WrapperSlideRight>
                            <p className = "text">
                                <b>Daologic</b> is a value-anchored consulting firm with a purpose to support teams working for the public good. We offer consulting, coaching and training services that combine:
                            </p>
                            <ul>
                                <li>
                                a human centered orientation of building strategic organizational alignment
                                </li>
                                <li>
                                domain expertise in "for good" sectors.
                                </li>
                            </ul>
                            <p className = "quote-box">
                                " There is no heavier burden than unfulfilled potential. - Charles Schulz
                            </p>
                        </WrapperSlideRight>
                    </div>
                </div>
                <div className="float-child" style={{borderBottom: "2px solid gray"}}>
                    <img src={services} height = '70%'/>
                </div>
                <div className="float-child" style={{borderBottom: "2px solid gray"}}>
                    <img src={clients} className="img"/>
                </div>
                <div className="float-child" style={{borderBottom: "2px solid gray"}}>
                    <div style = {{width: "70%"}}> 
                        <WrapperSlideLeft>
                            <p className = "subtitle">Client Profile</p>
                            <p className = "text">
                            ​Our clients are located across the world and typically work for the Public Good. They include multilateral and bilateral development organizations, educational institutions, philanthropic organizations, policy think tanks, local government agencies, non-profits, and other development-oriented organizations.
                            </p>
                        </WrapperSlideLeft>
                    </div>
                </div>
                <div className="float-child">
                    <div style = {{width: "70%"}}> 
                        <WrapperSlideRight>
                            <p className = "subtitle">Probono Services</p>
                            <p className = "text">
                            In  addition to our fee supported services, we selectively offer pro-bono support to nonprofits and other organizations and teams working for the Public Good. We are particularly interested in offering our organizational alignment and coaching services for this. To explore this further, schedule a discovery call on our contact page
                            </p>
                        </WrapperSlideRight>
                    </div>
                </div>
                <div className="float-child">
                    <img src={probono} className="img"/>
                </div>
            </div>
        </div>
    )
}
