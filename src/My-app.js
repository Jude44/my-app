import React from "react";
import profile from './images/profile_img.jpg';

import {Link } from 'react-router-dom'


function My-app () {

return (
<div className="home">
<img src={profile} height={400} width={300}/>
      <h1>Ugwu Jude Elochukwu</h1>

      <h2 id="twitter">twitter: Jude_ugwu44</h2>

      {/*<div id="slack">Slack: Judeux44</div>*/}

      <br></br>
      <br></br>
     <nav>
      <a
      id= "btn_zuri"
       href="https://training.zuri.team/" target="_blank">Zuri-training</a>
<br></br><br></br>
       <p>Click the button below to get access to books in coding and designs</p>
        <a
      id= "books"
       href="http://books.zuri.team" target="_blank">Design/coding books</a>
       <p>Do you want to be an expert in python? click the button below to get access to books on <strong>Coding in Python</strong> and code like a pro</p>
        <a
      id= "books_python"
       href="https://books.zuri.team/python-for-beginners?ref_id=judeux44" target="_blank">coding in python</a>
        <p>Run a background check on your codes with just one click. click the button below to get your codes background checked, simply and easily</p>
        <a
      id= "pitch"
       href="https://background.zuri.team" target="_blank">background-check</a>
       <p>Worried about how to design your books? worry no more. click the button below to Get free book designs that attracts buyers and increase trafic to your books </p>
        <a
      id= "book_designs"
       href="https://books.zuri.team/design-rules" target="_blank">Book-Designs</a>

       <p>Have any question? click<Link id="contacts"to="/contact">Contact Me button</Link> button</p>
       </nav> 
       
</div>

);
}
export default My-app;