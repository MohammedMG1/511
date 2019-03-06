import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image14 from './images/pic14.jpg';

class App extends Component {
  render() {
    return (
      <div className="">
        <header id="header">
          <a href="index.html" class="logo"><strong>Mohammed.Mg</strong> </a>
          <nav>

          </nav>
        </header>





        <section id="banner">
          <div class="inner">
            <h1>Mohammed Alotaibi <a href="https://templated.co"></a></h1>
            <ul class="actions">
              <li><a href="#one" class="button alt scrolly big">Continue</a></li>
            </ul>
          </div>
        </section>




        <article id="one" class="post style1">
          <div class="image">
            <img src={require("./images/pic14.jpg")} alt="" data-position="75% center" />
          </div>
          <div class="content">
            <div class="inner">
              <header>
                <h2>About me</h2>
                <p class="info">yestarday by <a href="#">Mohammed Alotaibi</a></p>
              </header>
              <p>I was born in 1992 I lived most of live in Riyadh. am interist in discovring the world and get to know new cultures and meeting new people. Also i'm big fan of soccer.  </p>
              <ul class="actions">

              </ul>
            </div>
            <div class="postnav">
              <a href="#" class="prev disabled"><span class="icon fa-chevron-up"></span></a>
              <a href="#two" class="scrolly next"><span class="icon fa-chevron-down"></span></a>
            </div>
          </div>
        </article>

        < article id="two" class="post invert style1 alt" >
          <div class="image">
            <img src={require("./images/pic13.jpg")} alt="" data-position="10% center" />
          </div>
          <div class="content">
            <div class="inner">
              <header>
                <h2>Education</h2>
                <p class="info">yestarday by <a href="#">Mohammed Alotaibi</a></p>
              </header>
              <p>Graduated with bacholar Degree in Computer System with minour in Information System Technology, and a Cyber Security Certificate from California State University, San Bernardino </p>
              <ul class="actions">

              </ul>
            </div>
            <div class="postnav">
              <a href="#one" class="scrolly prev"><span class="icon fa-chevron-up"></span></a>
              <a href="#three" class="scrolly next"><span class="icon fa-chevron-down"></span></a>
            </div>
          </div >
        </article >


        <article id="three" class="post style2">
          <div class="image">
            <img src={require("./images/pic12.jpg")} alt="" data-position="80% center" />
          </div>
          <div class="content">
            <div class="inner">
              <header>
                <h2>Career goals and visions</h2>
                <p class="info">yestarday by <a href="#">Mohammed Alotaibi</a></p>
              </header>
              <p>For my Career I want to be in cyber security position, that get me to the right path to success, also I want to start my own company that is specilaized in cyber defance .</p>
              <ul class="actions">

              </ul>
            </div>
            <div class="postnav">
              <a href="#two" class="scrolly prev"><span class="icon fa-chevron-up"></span></a>
              <a href="#four" class="scrolly next"><span class="icon fa-chevron-down"></span></a>
            </div>
          </div>
        </article >
      </div >
    );
  }
}

export default App;
