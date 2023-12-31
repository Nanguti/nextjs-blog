import React from "react";

function Footer() {
  return (
    <footer className="relative bg-slate-200 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: 80 }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x={0}
          y={0}
        >
          <polygon
            className="text-slate-200 fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-slate-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
              <a href="https://www.twitter.com/creativetim" target="_blank">
                <i className="fab fa-twitter bg-white text-sky-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
              <a href="https://www.facebook.com/creativetim" target="_blank">
                <i className="fab fa-facebook-square bg-white text-sky-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
              <a href="https://www.dribbble.com/creativetim" target="_blank">
                <i className="fab fa-dribbble bg-white text-pink-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
              <a
                href="https://www.github.com/creativetimofficial"
                target="_blank"
              >
                <i className="fab fa-github bg-white text-slate-800 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
            </div>
            <p className="text-sm mt-6 text-slate-500 font-semibold">
              Currently v1.1.0. Code
              <a
                href="https://github.com/creativetimofficial/tailwind-starter-kit"
                className="text-slate-600"
                target="_blank"
              >
                {" "}
                licensed MIT
              </a>
              , docs
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                targe="_blank"
                className="text-slate-600"
              >
                {" "}
                CC BY 4.0
              </a>
              .
            </p>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/blog"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial/tailwind-starter-kit"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free"
                      target="_blank"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                      target="_blank"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-slate-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-slate-500 font-semibold py-1">
              Copyright © 2023 Tailwind Starter Kit by{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-slate-500 hover:text-slate-800"
                target="_blank"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
