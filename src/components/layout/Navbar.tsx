import React, { useState } from "react";

const Navbar = () => {
  // State to track the selected button
  const [selectedButton, setSelectedButton] = useState("summary");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <header className="fixed w-full top-0 h-24 z-50  border-b border-gray-200 bg-white flex items-center px-6">
      <nav className=" flex gap-6 font-inter">
        <button
          onClick={() => handleButtonClick("summary")}
          className={`${
            selectedButton === "summary"
              ? "bg-[#CCFBEF] text-gray-900" // Selected button background
              : "bg-transparent"
          } text-gray-500 font-inter p-3 rounded-3xl font-medium flex gap-3 items-center`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.81249 8.09609C6.90753 8.04123 6.98644 7.96231 7.04129 7.86727C7.09615 7.77223 7.12502 7.66442 7.12499 7.55469V1.92969C7.12443 1.83004 7.10006 1.73198 7.0539 1.64367C7.00774 1.55536 6.94113 1.47936 6.85964 1.42202C6.77814 1.36469 6.68412 1.32766 6.5854 1.31405C6.48669 1.30043 6.38616 1.31062 6.29218 1.34375C4.46794 1.98939 2.93383 3.26457 1.96563 4.94005C0.997427 6.61554 0.658632 8.58145 1.01015 10.4844C1.02837 10.5828 1.06995 10.6754 1.1314 10.7544C1.19285 10.8333 1.27237 10.8964 1.36327 10.9383C1.44519 10.9766 1.53456 10.9963 1.62499 10.9961C1.73469 10.9961 1.84247 10.9673 1.93749 10.9125L6.81249 8.09609ZM5.87499 2.87656V7.19375L2.13437 9.35234C2.12499 9.23438 2.12499 9.11563 2.12499 9C2.1261 7.73309 2.47678 6.49106 3.13843 5.41066C3.80007 4.33025 4.74701 3.45337 5.87499 2.87656ZM17.125 9C17.1256 10.7837 16.5393 12.518 15.4564 13.9354C14.3735 15.3528 12.8543 16.3745 11.1332 16.8428C9.41212 17.3111 7.58472 17.2 5.93298 16.5267C4.28125 15.8534 2.89698 14.6553 1.99374 13.1172C1.95164 13.0461 1.92403 12.9675 1.91251 12.8857C1.901 12.8039 1.9058 12.7207 1.92665 12.6407C1.9475 12.5608 1.98398 12.4859 2.03398 12.4201C2.08398 12.3544 2.14651 12.2992 2.21796 12.2578L8.37499 8.67422V1.5C8.37499 1.33424 8.44084 1.17527 8.55805 1.05806C8.67526 0.940848 8.83423 0.875 8.99999 0.875C10.4179 0.875723 11.8109 1.24729 13.0408 1.95282C14.2706 2.65834 15.2946 3.67328 16.0109 4.89688C16.0195 4.90938 16.0273 4.92188 16.0351 4.93516C16.043 4.94844 16.0508 4.96406 16.0578 4.97812C16.7588 6.20247 17.1268 7.58916 17.125 9Z"
              fill={selectedButton==="summary"?"#212636":"#8A94A6"}
            />
          </svg>
          <h6>Summary</h6>
        </button>
        <button
          onClick={() => handleButtonClick("sales")}
          className={`${
            selectedButton === "sales"
              ? "bg-[#CCFBEF] text-gray-900" // Selected button background
              : "bg-transparent"
          } text-gray-500 font-medium p-3 rounded-3xl hover:text-gray-900 transition-colors flex gap-3 items-center`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0086 10.625L11.25 2.86641C11.1343 2.74983 10.9967 2.65741 10.845 2.59451C10.6933 2.5316 10.5306 2.49948 10.3664 2.50001H3.125C2.95924 2.50001 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.5 2.95925 2.5 3.12501V10.3664C2.49948 10.5306 2.5316 10.6933 2.5945 10.845C2.6574 10.9967 2.74983 11.1344 2.86641 11.25L10.625 19.0086C10.7411 19.1247 10.8789 19.2168 11.0306 19.2796C11.1822 19.3425 11.3448 19.3748 11.509 19.3748C11.6732 19.3748 11.8357 19.3425 11.9874 19.2796C12.1391 19.2168 12.2769 19.1247 12.393 19.0086L19.0086 12.393C19.1247 12.2769 19.2168 12.1391 19.2796 11.9874C19.3425 11.8357 19.3748 11.6732 19.3748 11.509C19.3748 11.3448 19.3425 11.1822 19.2796 11.0306C19.2168 10.8789 19.1247 10.7411 19.0086 10.625ZM6.5625 7.50001C6.37708 7.50001 6.19582 7.44502 6.04165 7.34201C5.88748 7.239 5.76732 7.09258 5.69636 6.92127C5.62541 6.74997 5.60684 6.56147 5.64301 6.37961C5.67919 6.19775 5.76848 6.03071 5.89959 5.89959C6.0307 5.76848 6.19775 5.67919 6.3796 5.64302C6.56146 5.60685 6.74996 5.62541 6.92127 5.69637C7.09257 5.76733 7.23899 5.88749 7.342 6.04166C7.44502 6.19583 7.5 6.37709 7.5 6.56251C7.5 6.81115 7.40123 7.0496 7.22541 7.22542C7.0496 7.40123 6.81114 7.50001 6.5625 7.50001Z"
              fill={selectedButton==="sales"?"#212636":"#8A94A6"}
            />
          </svg>
          <h6>Sales</h6>
        </button>
        <button
          onClick={() => handleButtonClick("chats")}
          className={`${
            selectedButton === "chats"
              ? "bg-[#CCFBEF] text-gray-900" // Selected button background
              : "bg-transparent"
          } text-gray-500 font-medium p-3 rounded-3xl hover:text-gray-900 transition-colors flex gap-3 items-center`}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.3125 0.875C6.24119 0.877275 4.25538 1.70111 2.79074 3.16574C1.32611 4.63038 0.502275 6.61619 0.5 8.6875V15.2758C0.500413 15.6003 0.629526 15.9115 0.859022 16.141C1.08852 16.3705 1.39966 16.4996 1.72422 16.5H8.3125C10.3845 16.5 12.3716 15.6769 13.8368 14.2118C15.3019 12.7466 16.125 10.7595 16.125 8.6875C16.125 6.6155 15.3019 4.62836 13.8368 3.16323C12.3716 1.6981 10.3845 0.875 8.3125 0.875ZM10.5 10.875H5.5C5.33424 10.875 5.17527 10.8092 5.05806 10.6919C4.94085 10.5747 4.875 10.4158 4.875 10.25C4.875 10.0842 4.94085 9.92527 5.05806 9.80806C5.17527 9.69085 5.33424 9.625 5.5 9.625H10.5C10.6658 9.625 10.8247 9.69085 10.9419 9.80806C11.0592 9.92527 11.125 10.0842 11.125 10.25C11.125 10.4158 11.0592 10.5747 10.9419 10.6919C10.8247 10.8092 10.6658 10.875 10.5 10.875ZM10.5 8.375H5.5C5.33424 8.375 5.17527 8.30915 5.05806 8.19194C4.94085 8.07473 4.875 7.91576 4.875 7.75C4.875 7.58424 4.94085 7.42527 5.05806 7.30806C5.17527 7.19085 5.33424 7.125 5.5 7.125H10.5C10.6658 7.125 10.8247 7.19085 10.9419 7.30806C11.0592 7.42527 11.125 7.58424 11.125 7.75C11.125 7.91576 11.0592 8.07473 10.9419 8.19194C10.8247 8.30915 10.6658 8.375 10.5 8.375Z"
              fill={selectedButton==="chats"?"#212636":"#8A94A6"}
            />
          </svg>
          <h6>Chats</h6>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
