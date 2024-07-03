import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white flex flex-col justify-center items-center text-center p-4 gap-4">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-socail w-10 h-10 so p-3 flex justify-center items-center text-slate-900 rounded-full">
              <GithubOutlined />
            </div>
            <p className="text-xs mt-2">GitHub</p>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/pho-sophors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-socail w-10 h-10 so p-3 flex justify-center items-center text-slate-900 rounded-full">
              <LinkedinOutlined />
            </div>
            <p className="text-xs mt-2">Linkedin</p>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="https://www.instagram.com/sophors1._.1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-socail w-10 h-10 so p-3 flex justify-center items-center text-slate-900 rounded-full">
              <InstagramOutlined />
            </div>
            <p className="text-xs mt-2">Instagram</p>
          </a>
        </div>
      </div>
      <p>© 2024 PHO SOPHORS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
