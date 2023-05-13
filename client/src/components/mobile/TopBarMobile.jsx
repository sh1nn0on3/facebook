const TopBarMobile = () => {
  return (
    <div>
      <div className="px-2 flex justify-between my-3">
        <div className="w-32">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/48MsiA6m666.png"
            alt=""
          />
        </div>
        <div className="flex w-32 justify-between">
          <div className="bg-gray-bg flex justify-center items-center h-8 w-8 rounded-full">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="bg-gray-bg flex justify-center items-center h-8 w-8 rounded-full">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="bg-gray-bg flex justify-center items-center h-8 w-8 rounded-full">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around items-center text-[18px] ">
        <button className="w-full border-b focus:border-blue focus:text-blue ">
          <i className="fa-solid fa-house"></i>
        </button>
        <button className="w-full border-b focus:border-blue focus:text-blue ">
          <i className="fa-solid fa-user-group"></i>
        </button>
        <button className="w-full border-b focus:border-blue focus:text-blue ">
          <i className="fa-solid fa-message"></i>
        </button>
        <button className="w-full border-b focus:border-blue focus:text-blue ">
          <i className="fa-solid fa-clapperboard"></i>
        </button>
        <button className="w-full border-b focus:border-blue focus:text-blue ">
          <i className="fa-solid fa-bell"></i>
        </button>
        <button className="w-full border-b focus:border-blue focus:text-blue ">
        <i className="fa-solid fa-people-group"></i>
        </button>
      </div>
    </div>
  );
};

export default TopBarMobile;
