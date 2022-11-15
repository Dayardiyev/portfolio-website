import { useState, useEffect } from "react";
import Animate from "../Animate";

function Contact() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = () => {
    setName(null);
    setEmail(null);
    setMessage(null);
  };

  useEffect(() => {
    document.title = 'Contact - Dayardiyev Alisher'
  })

  return (
    <div className="bg-primary-bg lg:rounded-2xl md:p-12 p-6 w-full">
      <Animate>
        <div className="content-title content-title-about">
          <h2 className="text-[40px] font-bold roboto-font mb-[30px]">
            Contact
          </h2>
          <div className="content-title-bar"></div>
        </div>
        <div className="border-dark-bg border-2 rounded-xl md:p-16 p-8">
          <div>
            <h3 className="text-2xl font-semibold ">
              <span className="text-dark-text">
                I'm always open to discussing product
              </span>
              <br /> design work or partnerships.
            </h3>
          </div>
          <form
            action="https://formsubmit.co/dayardiev@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="w-full mt-10 mb-8 flex flex-col relative">
              <input
                type="text"
                id="name"
                className="peer placeholder-transparent focus:border-[#FF6464]"
                placeholder="s"
                required
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <label
                className="absolute left-0 -top-5 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:top-0 transition-all duration-200 cursor-text peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#FF6464] peer-focus:font-semibold"
                htmlFor="name"
              >
                Name *
              </label>
            </div>
            <div className="w-full mt-10 mb-8 relative">
              <input
                type="email"
                id="email"
                className="peer placeholder-transparent focus:border-[#5185D4]"
                placeholder="s"
                required
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-5 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:top-0 transition-all duration-200 cursor-text peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#5185D4] peer-focus:font-semibold"
              >
                Email *
              </label>
            </div>
            <div className="w-full mt-10 mb-8 relative">
              <textarea
                type="text"
                id="message"
                className="peer placeholder-transparent focus:border-[#CA56F2]"
                placeholder="s"
                required
                onChange={(event) => setMessage(event.target.value)}
                value={message}
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-5 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:top-0 transition-all duration-200 cursor-text peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#CA56F2] peer-focus:font-semibold"
              >
                Message *
              </label>
            </div>
            <button
              type="submit"
              className="border-[2px] border-dark-text px-6 py-2 rounded-lg text-white font-semibold mt-4 hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:border-white"
            >
              Submit
            </button>
          </form>
        </div>
      </Animate>
    </div>
  );
}

export default Contact;
