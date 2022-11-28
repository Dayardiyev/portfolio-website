import { useEffect } from 'react';

import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import Animate from "../Animate";

function Resume() {

  useEffect(() => {
    document.title = 'Resume - Dayardiyev Alisher'
  })

  return (
    <>
      <div className="bg-primary-bg lg:rounded-t-2xl md:p-12 p-6">
        <Animate>
          <div className="content-title content-title-about">
            <h2 className="text-[40px] font-bold roboto-font mb-[30px]">
              Resume
            </h2>
            <div className="content-title-bar"></div>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <div>
              <div className="flex items-center mb-4">
                <HiOutlineAcademicCap className="text-[#f95054] text-3xl" />
                <h2 className="text-[26px] font-medium pl-[5px]">Education</h2>
              </div>
              <div className="border-dark-bg border-2 rounded-xl p-[24px] flex flex-col gap-5">
                <p className="text-sm">2021 - Present</p>
                <h3 className="text-xl">
                  Runtime - <span className="text-dark-text">Java</span>
                </h3>
                <p>Astana, Kazakhstan</p>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <HiOutlineBriefcase className="text-[#f95054] text-3xl" />
                <h2 className="text-[26px] font-medium pl-[5px]">Experience</h2>
              </div>
              <div className="border-dark-bg border-2 rounded-xl p-[24px] flex items-center">
                <h3 className="text-xl">Update soon...</h3>
              </div>
            </div>
          </div>
        </Animate>
      </div>
      <div className="bg-[#0d0d0d] lg:rounded-b-2xl py-12 lg:px-20 px-10">
        <Animate>
          <div className="flex items-center">
            <h2 className="text-[26px] font-medium pl-[5px] -translate-x-[5px]">
              Skills
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-12 font-semibold mt-3">
            <div className="col-span-1">
              <div className="mb-7 grid gap-1">
                <div className="skill-name">Java</div>
                <div className="h-1 w-auto bg-[#FF6464] rounded-lg"></div>
              </div>
              <div className="mb-7 grid gap-1">
                <div className="skill-name">Maven/Gradle</div>
                <div className="h-1 w-auto bg-[#9272D4] rounded-lg"></div>
              </div>
              <div className="mb-7 grid gap-1">
                <div className="skill-name">PostgreSQL</div>
                <div className="h-1 w-auto bg-[#5185D4] rounded-lg"></div>
              </div>
              <div className="mb-7 grid gap-1">
                <div className="skill-name">Git</div>
                <div className="h-1 w-auto bg-[#CA56F2] rounded-lg"></div>
              </div>
            </div>
            <div>
              <div className="mb-7">
                <div className="mb-7 grid gap-1">
                  <div className="skill-name">Javascript</div>
                  <div className="h-1 w-auto bg-[#CA56F2] rounded-lg"></div>
                </div>
                <div className="mb-7 grid gap-1">
                  <div className="skill-name">HTML/CSS</div>
                  <div className="h-1 w-auto bg-[#5185D4] rounded-lg"></div>
                </div>
                <div className="mb-7 grid gap-1">
                  <div className="skill-name">React</div>
                  <div className="h-1 w-auto bg-[#9272D4] rounded-lg"></div>
                </div>
                <div className="mb-7 grid gap-1">
                  <div className="skill-name">Tailwind</div>
                  <div className="h-1 w-auto bg-[#FF6464] rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </>
  );
}

export default Resume;
