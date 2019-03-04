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
  transition: width .25s, border-color .25s;
  border-bottom: 2px solid rgb(242, 242, 242);
  padding-bottom: 10px;
  margin: 15px 0px 15px 0px;
  cursor: pointer;
  border-right: 10px solid white;
  &:hover {
    border-right: 10px solid salmon;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [
        {
          id: 1,
          title: 'Learn about happiness from children',
          content: 'Adults often think that children are the ones who should be learning from their parents, that happy children are eternal students of life and that they’re placed in the hands of society to either become successful or not.',
          author: 'Shawn Mendes',
          pic: 'https://cdn-std.dprcdn.net/files/acc_691706/UmbIoY?download'
        },
        {
          id: 2,
          title: 'How to be the best of yourself',
          content: 'Just show up. Say you want to run a marathon, but have no prior experience. The first step is lacing up you shoes and hitting the pavement. Even if you only make it half a mile on your first training run.',
          author: 'Calum Hood',
          pic: 'https://cdn-std.dprcdn.net/files/acc_691706/5WgfGt?download'
        },
        {
          id: 3,
          title: 'Meet a lot of people and to be happy',
          content: 'Each country and people have traditions as to how to entertain people when they meet them. If you know some of it, you can prepare for them so that they will meet you also in a happy tune of meeting.',
          author: 'Chris Evans',
          pic: 'https://cdn-std.dprcdn.net/files/acc_691706/kfVcth?download'
        },
        {
          id: 4,
          title: 'Handling your stress with smile',
          content: 'A new study indicates that the mere act of smiling can help us deal with stressful situations more easily. Wrong. A fascinating new study by University of Kansas psychologists that will soon be published.',
          author: 'Tony Stark',
          pic: 'https://cdn-std.dprcdn.net/files/acc_691706/7lw6B3?download'
        },
        {
          id: 5,
          title: 'Is Technology Re-Engineering Humanity',
          content: '“We become what we behold. We shape our tools and then our tools shape us.” This truism—by the media-scholar John Culkin about the work of Marshall McLuhan—is more potent than ever in the age of data and algorithms.',
          author: 'Will Smith',
          pic: 'https://cdn-std.dprcdn.net/files/acc_691706/Y8C8na?download'
        }
      ],
      articleActive: [{
        id: 5,
        title: 'Is Technology Re-Engineering Humanity',
        content: '“We become what we behold. We shape our tools and then our tools shape us.” This truism—by the media-scholar John Culkin about the work of Marshall McLuhan—is more potent than ever in the age of data and algorithms.',
        author : 'Will Smith',
        pic: 'https://cdn-std.dprcdn.net/files/acc_691706/Y8C8na?download'
      }],
      showNavbar: true,
      activeArticle: 1
    }
    this.handleArticle = this.handleArticle.bind(this);
    const rnd = this.randomArticle();
  }

  handleNavbar() {
    this.setState({
      showNavbar: !this.state.showNavbar
    })
  }

  randomArticle() {
    let rnd = Math.floor(Math.random()*4)+1
    // this.setState({
    //   activeArticle: rnd
    // })
    this.state.activeArticle = rnd;
  }

  handleArticle(choose) {
    this.setState({
      activeArticle: choose.target.alt
      // articleActive: this.state.article.filter(function(active) {
      //   return active.id === choose.target.alt;
      // })
    })
    console.log(choose.target.alt)

    // console.log(this.state.article.filter(function(active) {
    //   return active.id == choose.target.alt;
    // }))
  }

  componentWillMount() {
    this.randomArticle()
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
                <Title h1>{this.state.article[this.state.activeArticle].title}</Title>
                </Col>
                <Col grid={1}>
                <p></p>
                </Col>
                <Col grid={7}>
                <Author>
                  <Row>
                    <Col grid={4}>
                    <img src={this.state.article[this.state.activeArticle].pic} height="70px" width="70px" />
                    </Col>
                    <Col grid={1}>
                    <p></p>
                    </Col>
                    <Col grid={11}>
                      <Row>
                      <p><strong>{this.state.article[this.state.activeArticle].author}</strong><br></br>
                      2 days ago</p>
                      </Row>
                    </Col>
                  </Row>
                </Author>
                </Col>
              </Row>
              <Row>
                <Col grid={8}>
                  <Article>{this.state.article[this.state.activeArticle].content}</Article>
                </Col>
                <Col grid={1}>
                <p></p>
                </Col>
                <Col grid={7}>
                  <Article>{this.state.article[this.state.activeArticle].content}</Article>
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
              {this.state.article.map((article, index) => {
                return (
                  <ListArticle onClick={this.handleArticle} key={index+1} show={this.state.showNavbar}>
                    <Col grid={3}>
                    <img height="80px" width="80px" src={article.pic} alt={index} />
                    </Col>
                    <Col grid={13}>
                      <Row>
                      <ListTitle>{article.title}</ListTitle>
                      </Row>
                    </Col>
                  </ListArticle>
                )
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
