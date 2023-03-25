import React, { useState } from "react";
import "../../App.css";
import logo from "../../assets/4.png";

const SendEnquiry = () => {
  const [enquiryNumber, setEnquiryNumber] = useState("ENQ001");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  //   const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    console.log("called");
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
    console.log("Enquiry Number: ", enquiryNumber);
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Message: ", message);
    console.log("Files: ", files);
  };

  return (
    <div className="send-enquiry-container">
      <div className="company-logo-container">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="company-description-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          turpis vel mi ullamcorper laoreet. Curabitur vel mi ac nisl placerat
          rutrum. Sed bibendum hendrerit ipsum, ac imperdiet magna pretium ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          turpis vel mi ullamcorper laoreet. Curabitur vel mi ac nisl placerat
          rutrum. Sed bibendum hendrerit ipsum, ac imperdiet magna pretium ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
          turpis vel mi ullamcorper laoreet. Curabitur vel mi ac nisl placerat
          rutrum. Sed bibendum hendrerit ipsum, ac imperdiet magna pretium ut.
        </p>
      </div>
      <form className="enquiry-form" onSubmit={handleFormSubmit}>
        <h2>Sending Enquiry</h2>
        <label htmlFor="enquiry-number">Enquiry Number:</label>
        <select
          id="enquiry-number"
          value={enquiryNumber}
          onChange={(event) => setEnquiryNumber(event.target.value)}
        >
          <option value="ENQ001">ENQ001</option>
          <option value="ENQ002">ENQ002</option>
          <option value="ENQ003">ENQ003</option>
        </select>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
            />
          </div> */}
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <label htmlFor="file-upload">Attachments</label>

        <div className="file-upload">
          <input
            type="file"
            id="file-upload"
            name="file-upload"
            multiple
            accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
            onClick={handleFileChange}
          />
          <span>Choose Files1</span>
        </div>
        <div className="file-upload">
          <input
            type="file"
            id="file-upload"
            name="file-upload"
            multiple
            accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setFiles(files);
            }}
          />

          <span>Choose Files</span>

          <div className="file-list">
            {files.map((file, index) => (
              <div key={index}>
                <span>{file.name}</span>
                {/* <button onClick={() => handleRemoveFile(index)}>Remove</button> */}
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          // disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendEnquiry;
