import logoFb from "../../assets/logo-fb.png";
import { isMobile } from "react-device-detect";
import TopBarMobile from "../mobile/TopBarMobile";

const Topbar = () => {
  const renderContent = () => {
    if (isMobile) {
      return <TopBarMobile/>
    }
    return (
      <div className="w-full bg-white h-14  border-sky-700 flex justify-between px-3 py-1 font-bold text-[20px] ">
        <div className="left w-[30%]  flex items-center  ">
          <div className="w-[40px] cursor-pointer mr-2">
            <img
              src={logoFb}
              alt="#"
              className="border border-sky-800 rounded-full"
            />
          </div>
          <div className="ml-2 p-1  rounded-full flex justify-center items-center bg-gray-bg cursor-pointer">
            <i className="fa-solid fa-magnifying-glass rounded-full text-gray-400 p-2 text-[15px] "></i>
            <input
              type="search"
              placeholder="Tìm kiếm trên Facebook .."
              className=" w-[0px] drag:w-[13rem] drag:p-1 font-[500] text-[16px] bg-gray-bg  outline-none "
            />
          </div>
        </div>

        <div className="mid w-[45%] flex items-center justify-center  ">
          <div className="w-full max-w-[800px] flex justify-between h-full">
            <button className="w-[15%] text-center flex items-center justify-center border-b border-white focus:border-blue focus:text-blue transition-all">
              <i className="fa-solid fa-house"></i>
            </button>
            <button className="w-[15%] text-center flex items-center justify-center border-b border-white focus:border-blue focus:text-blue transition-all">
              <i className="fa-solid fa-store"></i>
            </button>
            <button className="w-[15%] text-center flex items-center justify-center border-b border-white focus:border-blue focus:text-blue transition-all">
              <i className="fa-solid fa-gamepad"></i>
            </button>
            <button className="w-[15%] text-center flex items-center justify-center border-b border-white focus:border-blue focus:text-blue transition-all">
              <i className="fa-solid fa-people-group"></i>
            </button>
          </div>
        </div>

        <div className="right w-[30%] flex items-center justify-end pr-2 text-[18px] ">
          <div className="icon flex w-40 justify-between mx-3 items-center ">
            <div className="w-10 h-10 rounded-full bg-gray-bg  flex justify-center items-center">
              <i className="ri-menu-add-line"></i>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-bg flex justify-center items-center ">
              <i className="fa-sharp fa-solid fa-comment"></i>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-bg flex justify-center items-center ">
              <i className="fa-solid fa-bell"></i>
            </div>
          </div>
          <div className="logo ml-2">
            <img
              className="rounded-full w-[3rem]  "
              src="https://ephoto360.com/uploads/effect-data/ephoto360.com/i66ln8t31/8t-min60b5fd1b8dbec.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default Topbar;
