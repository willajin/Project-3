import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Background from "../images/nature.jpg";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MainButton from "../components/MainButton";
import SecondButton from "../components/SecondButton";
import MainCard from "../components/MainCard";
import SecondCard from "../components/SecondCard";
import MainCardGroup from "../components/MainCardGroup";
import Wrapper from "../components/Wrapper";
import HeaderText from "../components/HeaderText";
import BodyText from "../components/BodyText";
import recycle from "../images/recycle.png";
import tree from "../images/tree.png";

const backgroundStyle = {
    width: "100%",
    height: "985px",
    backgroundImage: `url(${Background})`
};

const colorStyle = {
    backgroundColor: "#7FAC71"
};


class Learn extends Component {
    render() {
        return (
            <div className="App">
                <div style={colorStyle}>
                    <Navbar></Navbar>
                    <div>
                    <MainContainer>
                        <Wrapper>
                            <img src={recycle} />
                            <HeaderText>Learn How to Reduce, Reuse, Recycle...with React!</HeaderText>
                            <BodyText>Why is recycling important?</BodyText>
                            <BodyText>Because we all live on this Earth and have a responsibility to take care of it as best as we can.</BodyText>
                            <BodyText>Did you know that recylcing rates have actually been declining in California since 2014. In 2017 Californians recycled at a rate of 44 percent
                            in 2015 47 percent and 50 percent in 2014, according to government figures. The state of California is trying to acheive a rate of 75 percent recycling rate.
                            Seeing the recylcing rates decrease is an awful and disheartening thing. But with your help you can help fight this terrifying trend.
                            </BodyText>
                            <BodyText><strong>Here are a few tips on how to become not be so trashy.</strong></BodyText>
                            <BodyText>Before recylcing your plastic bottles, cans, and glass bottles, try and rinse them before putting them in the propper recycling bin.
                            Mold and hardened food will make it too difficult for items to be recycled.
                            Pizza boxes can be recycled if the grease and left over cheese has been cut out. The rest of the cardboard is still recyclable.
                            <BodyText> If you are a gardener, composting is great for your garden and for lowering your ecological foot print. You can read how to start
                            your own compost box here.</BodyText>
                            </BodyText>
                            <img src={tree}/>
                            <BodyText>Even at the office you can do things that will help our earth. Try and use less paper at the office. The average US office worker uses about 10,000 sheets of paper a year. If we could try 
                            and only use paper when absolutely necessary, it'll help bring that number down. Using the entirity of your pen and markers, bringing your own coffee and cup, packing your lunch not only helps the earth but helps your budget too.
                            Every little thing that can help the earth is greatly appreciated.</BodyText>
                        </Wrapper>
                    </MainContainer>
                    </div>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Learn;