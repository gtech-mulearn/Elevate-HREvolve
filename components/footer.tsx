"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" py-12 sm:px-6 lg:px-32">
      <div className=" mx-auto">
        <div className="flex justify-between gap-8 max-md:flex-col">
          <div className="md:col-span-2 md:w-1/3">
            <img
              src="https://www.indiahrsummit.com/wp-content/uploads/2024/09/HR-Logo-01.png"
              className="max-w-64"
              alt="logo"
            />
            <p className=" my-4">
              The HR Leadership Summit 2024 will explore how new work models,
              organization structures, hybrid workplaces and emerging HR
              technologies. Organized By Synnex Group.
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className=" hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className=" hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className=" hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
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
    </footer>
  );
}
