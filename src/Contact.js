import React from "react";
import './Contact.css';


function Contact() {

return (

<div className="contact">
    <h2>Contact Me</h2>
    <form>
    <p>Hi there, contact me to ask me about anything you have in mind.</p>
    <table>
        <tr>
            <td>First name</td><td>Last name</td>
        </tr>
        <tr>
            <td>
                <label for="First name"><input name="FirstName" placeholder="Enter your first name"/></label>
            </td>
        
            <td>
                <label for="last name"><input name="lastName" placeholder="Enter your last name"/></label>
            </td>
        </tr>
    </table>
    <p>Email</p>
    <p><label for="Email"><input name="Email" placeholder="yourname@email.com"/></label></p>
    <p >Message</p>
    <label  for="message"><input id="msg" name="message" placeholder="send me a message and I'll reply you as soon as possible..."/></label>
   <input type="checkbox" id="#" name="check" value="check"/>
   <label for="check">  You agree to provide your data to Jude who may contact you
    </label>
        </form>
        
            <button id="button" type="submit">Send Message</button>
        

</div>


)


}

export default Contact;