"use client";

// import NotificationDropdown from "@/components/header/NotificationDropdown";
import UserDropdown from "@/components/header/UserDropdown";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const AppHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-2 gap-2 lg:gap-0">
     
        <div className="flex items-center justify-between w-full lg:w-auto gap-2">
          <SidebarTrigger />
          <span className="font-semibold text-lg text-gray-900 dark:text-white">Stories</span>

          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
         
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 10.5C6.83 10.5 7.5 11.17 7.5 12C7.5 12.83 6.83 13.5 6 13.5C5.17 13.5 4.5 12.83 4.5 12C4.5 11.17 5.17 10.5 6 10.5ZM18 10.5C18.83 10.5 19.5 11.17 19.5 12C19.5 12.83 18.83 13.5 18 13.5C17.17 13.5 16.5 12.83 16.5 12C16.5 11.17 17.17 10.5 18 10.5ZM13.5 12C13.5 11.17 12.83 10.5 12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

 
        <div className="flex items-center w-full lg:w-auto justify-end gap-4">
          
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
