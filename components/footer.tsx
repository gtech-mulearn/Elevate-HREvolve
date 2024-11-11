"use client";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <footer className=" py-12 px-8 lg:px-32 relative">
      <div className=" mx-auto relative z-10">
        <div className="flex justify-between gap-8 max-md:flex-col">
          <div className="md:col-span-2 md:w-1/3">
            <img src={"/logo.png"} className="max-w-64" alt="logo" />
            <p className=" my-4">
              The HR Leadership Summit 2024 will explore how new work models,
              organization structures, hybrid workplaces and emerging HR
              technologies. Organized By Synnex Group.
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <IoLogoInstagram className="h-6 w-6" />
              </a>
              <a href="#" className=" hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className=" hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <BsTwitterX className="h-6 w-6" />
              </a>
              <a href="#" className=" hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold  tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-4">
              {["Overview", "Pricing", "Marketplace", "Features"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold  tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-4">
              {["About", "Team", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold  tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-4">
              {["Help", "Sales", "Advertise", "Privacy"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; 2024 Shadcnblocks. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms and Conditions
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <svg
        width="282"
        height="157"
        viewBox="0 0 282 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 "
      >
        <path
          d="M-118.954 172.155C-135.548 282.145 -59.8356 384.762 50.1548 401.356C160.145 417.95 262.762 342.238 279.356 232.247C295.95 122.257 220.238 19.6401 110.247 3.04609C0.256817 -13.548 -102.36 62.1647 -118.954 172.155ZM217.405 222.901C205.973 298.677 135.277 350.837 59.5012 339.405C-16.2744 327.973 -68.4352 257.277 -57.003 181.502C-45.5709 105.726 25.125 53.5651 100.901 64.9973C176.676 76.4294 228.837 147.125 217.405 222.901Z"
          fill="url(#paint0_linear_73_5580)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_73_5580"
            x1="191.44"
            y1="406.323"
            x2="175.864"
            y2="-61.0349"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.552474" stop-color="#504E4D" />
            <stop offset="0.894552" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  );
}
