import { FaCalendarAlt } from "react-icons/fa";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { HiDevicePhoneMobile, HiMapPin } from "react-icons/hi2";

function Sidebar() {
  return (
    <div className="w-full lg:mb-0 mx-auto relative text-center lg:rounded-[20px] bg-primary-bg pb-[25px]">
      <div className="">
        <h1 className="text-3xl bg-dark-bg w-full lg:rounded-t-[20px] py-5 mb-5 text-white">
          Alisher Dayardiyev
        </h1>
        <h3 className="px-5 py-1 bg-dark-bg inline-block rounded-lg mb-5 text-dark-text">
          Developer
        </h3>
        <div className="flex justify-center gap-5 mb-5">
          <a
            href="https://github.com/Dayardiyev"
            target="_blank"
            className="w-[40px] h-[40px] bg-dark-bg rounded-lg flex justify-center items-center > hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all duration-200"
            rel="noreferrer"
          >
            <FiGithub/>
          </a>
          <a
            href="https://t.me/dayardiyevv"
            target="_blank"
            className="w-[40px] h-[40px] bg-dark-bg rounded-lg flex justify-center items-center > hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all duration-200"
            rel="noreferrer"
          >
            <TbBrandTelegram />
          </a>
          <a
            href="https://www.instagram.com/dayardiyevv/"
            target="_blank"
            className="w-[40px] h-[40px] bg-dark-bg rounded-lg flex justify-center items-center > hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all duration-200"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
        <div className="bg-dark-bg w-[80%] mx-auto rounded-2xl p-7 text-left">
          <div className="border-b border-[#3D3A3A] pb-2.5">
            <div className="flex gap-[10px]">
              <a
                href="tel:+77776032809"
                className="w-[40px] h-[40px] bg-black rounded-lg flex justify-center items-center"
              >
                <HiDevicePhoneMobile className="text-[#E93B81] text-lg" />
              </a>
              <div className="side-info-text">
                <p className="text-xs">Phone</p>
                <a href="tel:+77776032809" className="text-white">
                  +7 777 603 28 09
                </a>
              </div>
            </div>
          </div>
          <div className="border-b border-[#3D3A3A] py-2.5">
            <div className="flex gap-[10px]">
              <a
                href="mailto:dayardiev@gmail.com"
                className="w-[40px] h-[40px] bg-black rounded-lg flex justify-center items-center flex-shrink-0"
              >
                <FiMail className="text-[#6AB5B9] text-lg" />
              </a>
              <div className="side-info-text">
                <p className="text-xs">Mail</p>
                <a href="mailto:dayardiev@gmail.com" className="text-white break-all">
                  dayardiev@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-b border-[#3D3A3A] py-2.5">
            <div className="flex gap-[10px]">
              <div className="w-[40px] h-[40px] bg-black rounded-lg flex justify-center items-center">
                <HiMapPin className="text-[#FD7590] text-lg" />
              </div>
              <div className="side-info-text">
                <p className="text-xs">Location</p>
                <p className="text-white">Astana, Kazakhstan</p>
              </div>
            </div>
          </div>
          <div className="py-2.5">
            <div className="flex gap-[10px]">
              <div className="w-[40px] h-[40px] bg-black rounded-lg flex justify-center items-center">
                <FaCalendarAlt className="text-[#C17CEB] text-lg" />
              </div>
              <div className="side-info-text">
                <p className="text-xs">Birthday</p>
                <p className="text-white">May 22, 2003</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
