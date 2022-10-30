import { BsFillGearFill } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import Sidebar from "../Sidebar";
import Animate from "../Animate";

function About() {
  return (
    <>
      <div className="block lg:hidden">
        <Sidebar />
      </div>
      <div className="bg-primary-bg lg:rounded-2xl md:p-12 p-6">
        <Animate>
          <div className="content-title content-title-about">
            <h2 className="text-[40px] font-bold roboto-font mb-[30px]">
              About Me
            </h2>
            <div className="content-title-bar"></div>
          </div>
          <div className="mb-[30px]">
            <p className="mb-[5px]">
              I'm Developer from Astana, Kazakhstan studying in software
              engineering.
            </p>
            <p>
              I enjoy turning complex problems into simple, beautiful and
              intuitive designs.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="border-dark-bg border-2 rounded-xl p-[24px] flex gap-5">
              <div className="content-icon">
                <BsFillGearFill className="purple text-3xl" />
              </div>
              <div className="about-info">
                <h3 className="text-3xl font-semibold">Back-End</h3>
                <li className="purple">
                  <span className="grey-text">Desktop Apps</span>
                </li>
                <li className="purple">
                  <span className="grey-text">Android Apps</span>
                </li>
                <li className="purple">
                  <span className="grey-text">Web server </span>
                </li>
                <li className="purple">
                  <span className="grey-text">Database </span>
                </li>
              </div>
            </div>

            <div className="border-dark-bg border-2 rounded-xl p-[24px] flex gap-5">
              <div className="content-icon">
                <HiOutlineCode className="light-blue text-4xl" />
              </div>
              <div className="about-info">
                <h3 className="text-3xl font-semibold">Front-End</h3>
                <li className="light-blue">
                  <span className="grey-text">HTML & CSS</span>
                </li>
                <li className="light-blue">
                  <span className="grey-text">JavaScript</span>
                </li>
                <li className="light-blue">
                  <span className="grey-text">Web Designer</span>
                </li>
                <li className="light-blue">
                  <span className="grey-text">User Interface</span>
                </li>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </>
  );
}

export default About;
