import React from "react";
import "./CompanyDetails.css";

const CompanyDetails = () => {
  return (
    <div className="company-details">
      <div className="section">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Buy Mec Video"
          ></iframe>
        </div>
        <div className="description">
          <h2>Our Story</h2>
          <p>
            Buy Mec is a leading mechanical products exporter with a strong
            presence in Europe and the United States. We specialize in
            delivering high-quality mechanical products to our clients, ensuring
            that they receive the best solutions that fit their needs. Our
            commitment to quality and customer satisfaction has helped us build
            a strong reputation in the industry. We work closely with our
            clients to understand their requirements and offer them customized
            solutions that meet their unique needs. With a focus on innovation
            and excellence, we strive to be the go-to partner for all your
            mechanical product needs.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="description">
          <h2>Our Services</h2>
          <p>
            At Buy Mec, we offer a wide range of mechanical products and
            services to meet the needs of our clients. Our services include
            custom machining, fabrication, assembly, and more. We have a team of
            experienced engineers and technicians who work tirelessly to ensure
            that we deliver the best solutions to our clients. We also offer
            comprehensive support and maintenance services to ensure that our
            products continue to meet the needs of our clients over time.
          </p>
        </div>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Buy Mec Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
