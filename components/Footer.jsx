import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Blog. All Rights Reserved.
          </p>
          <p>Contact: contact@yourblog.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
