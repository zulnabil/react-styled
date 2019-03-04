import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';

//import NavbarRotate from './NavbarRotate';
const Navbar = styled.div`
  width: 105px;
  background: color;
  border-right: 2px solid rgb(242, 242, 242);
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.opcity ? '1' : '0'};
  transition: visibility .25s, opacity .25s linear;
`
const Menubar = styled.div`
  padding: 35px 0px 0px 0px;
  /* display: inline; */
  margin: 70px 0px 30px 0px;
  width: 60px;
  text-align: center;
  transform: rotate(-90deg);
  border-top: 15px solid ${props => props.clicked ? 'salmon' : 'white'};
  font-weight: bold;
  cursor: pointer;
  transition: border-color .25s;
  &:hover {
    border-color: salmon;
  }
`

const ToggleClose = styled.img`
  padding: 40px 28px 40px 28px;
  border-bottom: 2px solid rgb(242, 242, 242);
  cursor: pointer;
`

const ToggleOpen = styled.img`
  padding: 40px 42px 40px 42px;
  cursor: pointer;
  visibility: ${props => props.show ? 'hidden' : 'visible'};
  opacity: ${props => props.opcity ? '0' : '1'};
  transition: visibility .25s, opacity .25s linear;
  position: fixed;
`


const Container = styled.div`
  width: 90%;
  height: 90%;
  margin: 0px 0px 100px ${props => props.show ? '210px' : '105px'};
  position: fixed;
  transition: margin .25s;
`

const handlerColumn = ({ grid = 16 } = {}) => {
  if (grid) {
    const defaultWidth = (100 / 16)
    const width = defaultWidth * grid
    return css`
      width: ${width}%;
    `
  }
}

const Row = styled.div`
  width: 100%;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  
`

const Col = styled.div`
  ${handlerColumn}
  float: left;
`

const Title = styled.div`
  font-size: ${props => props.h1 ? '54px' : '28px'};
  margin-top: ${props => props.h1 ? '20px' : '48px'};
  @import url('https://fonts.googleapis.com/css?family=Vidaloka');
  font-family: 'Vidaloka', serif;
  font-weight: bold;
  color: rgb(64, 64, 64);
`

const Author = styled.div`
  /* text-align: center; */
  
  margin-top: 150px;
`

const Article = styled.p`
  line-height: 200%;
`

const ListTitle = styled.p`
  margin-left: 35px;
  font-size: 14px;
  font-weight: bold;
`

const ListArticle = styled.div`
  width: ${props => props.show ? '300px' : '410px'};
  &::after {
    content: '';
    display: table;
    clear: both;
  }
  transition: width .25s;
  border-bottom: 2px solid rgb(242, 242, 242);
  padding-bottom: 10px;
  margin: 15px 0px 15px 0px;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true
    }
  }

  handleNavbar() {
    this.setState({
      showNavbar: !this.state.showNavbar
    })
  }

  render() {
    return (
      <div>
        <ToggleOpen onClick={this.handleNavbar.bind(this)} show={this.state.showNavbar} opcity={this.state.showNavbar} src="https://cdn-std.dprcdn.net/files/acc_691706/kSdjSF?download" height="22px" width="22px" />
        <Navbar show={this.state.showNavbar} opcity={this.state.showNavbar}>
          <ToggleClose onClick={this.handleNavbar.bind(this)} src="https://image.flaticon.com/icons/svg/151/151882.svg" height="20px" width="50px"></ToggleClose>
          <Menubar>HOME</Menubar>
          <Menubar>VIDEOS</Menubar>
          <Menubar>BOOKS</Menubar>
          <Menubar>STORES</Menubar>
        </Navbar>
        <Container show={this.state.showNavbar}>
          
          <Row>
            <Col grid={9}>
              <img src="https://cdn-std.dprcdn.net/files/acc_691706/J3mbK9?download" height="335px" />
              <Row>
                <Col grid={8}>
                <Title h1>Change the World, to be a better place</Title>
                </Col>
                <Col grid={1}>
                <p></p>
                </Col>
                <Col grid={7}>
                <Author>
                  <Row>
                    <Col grid={4}>
                    <img src="https://cdn-std.dprcdn.net/files/acc_691706/dkGufc?download" />
                    </Col>
                    <Col grid={1}>
                    <p></p>
                    </Col>
                    <Col grid={11}>
                      <Row>
                      <p><strong>Samantha William</strong><br></br>
                      2 days ago</p>
                      </Row>
                    </Col>
                  </Row>
                </Author>
                </Col>
              </Row>
              <Row>
                <Col grid={8}>
                  <Article>Lorem Ipsum is simply dummy text of the printing and typestting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Article>
                </Col>
                <Col grid={1}>
                <p></p>
                </Col>
                <Col grid={7}>
                  <Article>Lorem Ipsum is simply dummy text of the printing and typestting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Article>
                </Col>
              </Row>
            </Col>
            <Col grid={2}>
            <p></p>
            </Col>
            <Col grid={5}>
              <Row>
                <Title>Most Popular Article</Title>
                <h5 style={{color: 'rgb(153, 153, 153)'}}>Based on the number of read and views</h5>
              </Row>
              <ListArticle show={this.state.showNavbar}>
                <Col grid={3}>
                <img height="80px" src="https://cdn-std.dprcdn.net/files/acc_691706/i7pJ4F?download" />
                </Col>
                <Col grid={13}>
                  <Row>
                  <ListTitle>Learn about happiness from children</ListTitle>
                  </Row>
                </Col>
              </ListArticle>
              <ListArticle show={this.state.showNavbar}>
                <Col grid={3}>
                <img height="80px" src="https://cdn-std.dprcdn.net/files/acc_691706/i7pJ4F?download" />
                </Col>
                <Col grid={13}>
                  <Row>
                  <ListTitle>How to be the best of yourself</ListTitle>
                  </Row>
                </Col>
              </ListArticle>
              <ListArticle show={this.state.showNavbar}>
                <Col grid={3}>
                <img height="80px" src="https://cdn-std.dprcdn.net/files/acc_691706/i7pJ4F?download" />
                </Col>
                <Col grid={13}>
                  <Row>
                  <ListTitle>Meet a lot of people nad be happy</ListTitle>
                  </Row>
                </Col>
              </ListArticle>
              <ListArticle show={this.state.showNavbar}>
                <Col grid={3}>
                <img height="80px" src="https://cdn-std.dprcdn.net/files/acc_691706/i7pJ4F?download" />
                </Col>
                <Col grid={13}>
                  <Row>
                  <ListTitle>Handling your stress with smile</ListTitle>
                  </Row>
                </Col>
              </ListArticle>
              <ListArticle show={this.state.showNavbar}>
                <Col grid={3}>
                <img height="80px" src="https://cdn-std.dprcdn.net/files/acc_691706/i7pJ4F?download" />
                </Col>
                <Col grid={12}>
                  <Row>
                  <ListTitle>How to be the best of yourself</ListTitle>
                  </Row>
                </Col>
              </ListArticle>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
