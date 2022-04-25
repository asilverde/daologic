import "./home.scss"
import services from '../img/services.png';
import clients from '../img/client-profile.jpg'
import probono from '../img/probono.jpg'

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="container" >
                <div className="float-child" style={{borderBottom: "2px solid gray"}}>
                    <div style={{width: "70%"}}>
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
                    </div>
                </div>
                <div className="float-child" style={{borderBottom: "2px solid gray"}}>
                    <img src={services} height = '70%'/>
                </div>
                <div className="float-child" style={{borderBottom: "2px solid gray"}}>
                    <img src={clients}  height = '70%'/>
                </div>
                <div className="float-child" style={{borderBottom: "2px solid gray"}}>
                    <div style = {{width: "70%"}}> 
                        <p className = "subtitle">Client Profile</p>
                        <p className = "text">
                        ​Our clients are located across the world and typically work for the Public Good. They include multilateral and bilateral development organizations, educational institutions, philanthropic organizations, policy think tanks, local government agencies, non-profits, and other development-oriented organizations.
                        </p>
                    </div>
                </div>
                <div className="float-child">
                    <div style = {{width: "70%" }}> 
                            <p className = "subtitle">Probono Services</p>
                            <p className = "text">
                            In  addition to our fee supported services, we selectively offer pro-bono support to nonprofits and other organizations and teams working for the Public Good. We are particularly interested in offering our organizational alignment and coaching services for this. To explore this further, schedule a discovery call on our contact page
                            </p>
                    </div>
                </div>
                <div className="float-child">
                    <img src={probono} height = '70%'/>
                </div>
            </div>
        </div>
    )
}
