import { useEffect } from 'react';

import { FiGithub } from "react-icons/fi";
import Animate from "../Animate";

const worksJson = [
  {
    type: "Landing Page",
    title: "Xbox",
    imgPath: `${require("../../assets/workGifs/xbox.gif")}`,
    urlPath: "https://dayardiyev.github.io/Xbox/",
    gitPath: "https://github.com/Dayardiyev/Xbox/",
  },
  {
    type: "Application",
    title: "iWatch",
    imgPath: `${require("../../assets/workGifs/iWatch.gif")}`,
    urlPath: "https://dayardiyev.github.io/apple-watch/",
    gitPath: "https://github.com/Dayardiyev/apple-watch/",
  },
  {
    type: "Application",
    title: "Movie API",
    imgPath: `${require("../../assets/workGifs/movie-api.gif")}`,
    urlPath: "https://dayardiyev-movie-api.netlify.app/",
    gitPath: "https://github.com/Dayardiyev/movie-API-React",
  },
  {
    type: "Online Shop",
    title: "Frost",
    imgPath: `${require("../../assets/workGifs/frostauto.gif")}`,
    urlPath: "https://dayardiyev.github.io/FrostAuto/",
    gitPath: "https://github.com/Dayardiyev/FrostAuto/",
  },
  {
    type: "Application",
    title: "Github API",
    imgPath: `${require("../../assets/workGifs/github-api.gif")}`,
    urlPath: "https://dayardiyev-github-user.netlify.app/",
    gitPath: "https://github.com/Dayardiyev/github-user-react",
  },
  {
    type: "Application",
    title: "Clock",
    imgPath: `${require("../../assets/workGifs/clock.gif")}`,
    urlPath: "https://dayardiyev.github.io/clockJS/",
    gitPath: "https://github.com/Dayardiyev/clockJS/",
  },
];

function Works() {

  useEffect(() => {
    document.title = 'Works - Dayardiyev Alisher'
  })

  return (
    <div className="bg-primary-bg lg:rounded-2xl md:p-12 p-6">
      <Animate>
        <div className="content-title content-title-about">
          <h2 className="text-[40px] font-bold roboto-font mb-[30px]">Works</h2>
          <div className="content-title-bar"></div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {worksJson.map((work, i) => {
            return (
              <a
                href={work.urlPath}
                className="border-dark-bg border-2 rounded-xl p-[24px] work-item relative"
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                <div className="rounded-lg work-img mb-4">
                  <img
                    src={`${work.imgPath}`}
                    alt="xbox.gif"
                    className="w-full rounded-lg opacity-0"
                  />
                </div>
                <p className="text-xs mb-1">{work.type}</p>
                <h4>{work.title}</h4>
                <a href={work.gitPath} className="git text-lg" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
              </a>
            );
          })}
        </div>
      </Animate>
    </div>
  );
}

export default Works;
