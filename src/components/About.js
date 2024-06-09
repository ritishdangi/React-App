import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
    <div className="container">
        <div className="className " style={{textAlign:'center'}}>
            <h2>Welcome to TextUtils!</h2>
        </div>
      At Textutils, we aim to provide you with a simple yet powerful tool to manipulate text according to your preferences. Whether you're a writer, a student, or just someone who works with text regularly, our website offers convenient features to enhance your text editing experience.
      <br/>
      <br/>

      <ul>
      What We Offer:
      <ol>
      1. Convert Text Case:
      - Need to convert text to all uppercase or all lowercase? We've got you covered. With just a click of a button, you can transform your text to   suit your needs. No more manual retyping or editing required!
      </ol>
      <ol>
      2. Remove Extra Spaces:
      - Tired of dealing with unnecessary extra spaces cluttering your text? Our website's space removal feature helps you clean up your text by eliminating redundant spaces, ensuring clarity and consistency in your documents.
      </ol>
      <ol>
      3. User-Friendly Interface:
      - We understand the importance of simplicity and ease of use. Our intuitive interface makes it effortless to navigate through the various text manipulation options, allowing you to focus on what matters most—your content.
      </ol>
      <ol>
      4. Save Time and Effort:
      - Time is precious, and we value yours. By automating common text editing tasks, our website helps you save valuable time and effort, allowing you to be more productive and efficient in your work.
      </ol>
      <ol>
      5. Privacy and Security:
      - Your privacy and security are our top priorities. We adhere to strict data protection measures to ensure that your information remains safe and confidential at all times.
      </ol>
      <br/>
      <br/>

      Join the thousands of users who rely on Textutils for their text editing needs. Experience the convenience and versatility of our platform today!
      <br/>
      <br/>
      <ol>

      Have questions or feedback? Feel free to reach out to our team—we'd love to hear from you.

      </ol>
      {/* style={{backgroundColor:'grey'}} */}
      <div className="container">
        <h2>Feedback Form</h2>
        <form id="feedbackForm">
            <div className="form-group my-2">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-group my-2">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>

      <br/>
      <ol>
      Thank you for choosing TextUtils!
      <br/>
      </ol>
    </ul>

    </div>
    </>
  )
}
