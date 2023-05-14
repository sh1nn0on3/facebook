import { isMobile } from "react-device-detect";
import heart from "../../assets/heart.png";
import pageaside from "../../assets/pageaside.png";
import groupaside from "../../assets/groupaside.png";
import gameaside from "../../assets/gameaside.png";
import metaaside from "../../assets/metaaside.png";
import chess from "../../assets/chess.jpg";
import f8 from "../../assets/f8.png";
import laptrinh from "../../assets/laptrinh.png";
import trander from "../../assets/trander.jpg";
import xo from "../../assets/xo.png";
import stream from "../../assets/streamform.png";
import photo from "../../assets/photoform.png";
import reaction from "../../assets/reactionform.png";
import HomeContentMobile from "../mobile/HomeContentMobile";
import funny from "../../assets/funny.png";
import cute from "../../assets/cute.png";

const HomeContent = () => {
  const renderContent = () => {
    if (isMobile) {
      return (
        <>
          <HomeContentMobile />
        </>
      );
    }
    return (
      <div className="bg-gray-bg flex justify-between min-h-[calc(100vh-3.5rem)] w-[100vw]  p-2 ">
        <nav className="left w-[20%]  pr-8 font-[500] hidden rightbar:block ">
          <div className="flex flex-col h-full w-full ">
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer">
              <img
                src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/327903419_920392489092766_766505803761635191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ij8zL7MB_CQAX_Exjd3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPTxNMESWj2cRyNLpFObdISr-_f11fFJ8ccGHRqdHGBg&oe=6464CC3B"
                alt=""
                className="w-8 rounded-full mr-3"
              />
              <span className="">Vũ Quang Đạo</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={heart} alt="" className="w-8 rounded-full mr-5" />
              <span>Hẹn hò</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={pageaside} alt="" className="w-8 rounded-full mr-5" />
              <span>Trang</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={groupaside} alt="" className="w-8 rounded-full mr-5" />
              <span>Nhóm</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={gameaside} alt="" className="w-8 rounded-full mr-5" />
              <span>Chơi game</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={metaaside} alt="" className="w-8 rounded-full mr-5" />
              <span>Meta Facebook</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer  ">
              <i className="fa-solid fa-chevron-down w-8 h-8 bg-slate-50 rounded-full flex justify-center items-center mr-5"></i>
              <span>Xem thêm</span>
            </div>
            <div className="border my-2 w-[250px] "></div>
            <div className="p-3 text-gray-500 font-[600] ">
              <span>Lối tắt của bạn</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={f8} alt="" className="w-8 rounded-xl mr-5" />
              <span>Học tập lập trình (F8-Fullstack.edu.vn)</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={chess} alt="" className="w-8 rounded-xl mr-5" />
              <span>Cờ vua</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={laptrinh} alt="" className="w-8 rounded-xl mr-5" />
              <span>Lập trình C,C++,C#,Java,Python,PHP...</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={trander} alt="" className="w-8 rounded-xl mr-5" />
              <span>TradeCoin Viet Nam</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer ">
              <img src={xo} alt="" className="w-8 rounded-xl mr-5" />
              <span>Cờ Caro</span>
            </div>
            <div className="flex items-center rounded-xl p-3 hover:bg-gray-200 transition-all cursor-pointer  ">
              <i className="fa-solid fa-chevron-down w-8 h-8 bg-slate-50 rounded-full flex justify-center items-center mr-5"></i>
              <span>Xem thêm</span>
            </div>
            <div className="flex h-full flex-col justify-end text-[12px] p-2 text-gray-400">
              Quyền riêng tư- Điều khoàn- Quảng cáo-
              <br /> Lựa chọn quảng cáo- Cookie- Xem Thêm- Meta@2023
            </div>
          </div>
        </nav>
        <nav className="content w-[50%]  max-w-[650px] min-w-[500px] mx-auto mt-3  ">
          <nav className="reels bg-white rounded-xl px-5 py-2">
            <div className="head flex justify-around pb-2 ">
              <button className="border-b-2 w-[40%] text-center focus:border-blue focus:text-blue">
                <i className="fa-solid fa-book-open p-3"></i>
                <span>Tin</span>
              </button>
              <button className="border-b-2 w-[40%] text-center focus:border-blue focus:text-blue">
                <i className="fa-solid fa-clapperboard p-3"></i>
                <span>Reels</span>
              </button>
            </div>
            <div className="body overflow-x-scroll scroll-smooth scroll ">
              <table className="table">
                <tbody>
                  <tr className="flex gap-3 mb-3">
                    <td>
                      <div className="h-[210px] w-[120px] shadow-lg rounded-lg opacity-90 hover:opacity-100 cursor-pointer transform hover:scale-[1.01] transition duration-500  ">
                        <div className="w-full ">
                          <img
                            src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/327903419_920392489092766_766505803761635191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ij8zL7MB_CQAX_Exjd3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPTxNMESWj2cRyNLpFObdISr-_f11fFJ8ccGHRqdHGBg&oe=6464CC3B"
                            alt=""
                            className="rounded-lg h-[150px] object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="">
                            <i className="fa-solid fa-plus flex -translate-y-3 bg-blue text-white w-8 h-8 justify-center items-center border-4 rounded-full "></i>
                          </div>
                          <span>Tạo tin</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="h-[210px] w-[120px] border "></div>
                    </td>
                    <td>
                      <div className="h-[210px] w-[120px] border "></div>
                    </td>
                    <td>
                      <div className="h-[210px] w-[120px] border "></div>
                    </td>
                    <td>
                      <div className="h-[210px] w-[120px] border "></div>
                    </td>
                    <td>
                      <div className="h-[210px] w-[120px] border "></div>
                    </td>
                    <td>
                      <div className="h-[210px] w-[120px] border "></div>
                    </td>
                    <td>
                      <div className="h-[210px] w-[120px] border "></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </nav>
          <nav className="feeling bg-white mt-4 rounded-xl">
            <div className="px-5 py-3 ">
              <div className=" flex items-center mb-3">
                <img
                  src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/327903419_920392489092766_766505803761635191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ij8zL7MB_CQAX_Exjd3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPTxNMESWj2cRyNLpFObdISr-_f11fFJ8ccGHRqdHGBg&oe=6464CC3B"
                  alt=""
                  className="w-10 rounded-full mr-3"
                />
                <input
                  type="text"
                  className="w-full outline-none  bg-gray-bg py-2 px-5 rounded-full "
                  placeholder="Quang Đạo ơi , bạn đang nghĩ gì thế"
                />
              </div>
              <div className="border mb-3"></div>
              <div className="flex text-slate-400 font-[500] px-4 gap-4 text-[14px] justify-between ">
                <div className="flex items-center gap-2 hover:text-slate-500 cursor-pointer ">
                  <img src={stream} alt="" className="w-6" />
                  <span>Video trực tiếp</span>
                </div>
                <div className="flex items-center gap-2 hover:text-slate-500 cursor-pointer ">
                  <img src={photo} alt="" className="w-6" />
                  <span>Ảnh/Video</span>
                </div>
                <div className="flex items-center gap-2 hover:text-slate-500 cursor-pointer ">
                  <img src={reaction} alt="" className="w-6" />
                  <span>Cảm xúc/hoạt động</span>
                </div>
              </div>
            </div>
          </nav>
          <nav className="border-y-2 border-gray-bg py-3 bg-white mt-5 border rounded-2xl">
            <div className="flex justify-between items-center px-5 py-3 ">
              <div className="flex items-center gap-2 ">
                <img
                  src="https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-1/344344428_234680989151508_859218840505688478_n.jpg?stp=c0.5000x0.5000f_dst-jpg_e15_p96x96_q60_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent-hkg4-2.xx&_nc_cat=1&_nc_ohc=IhHltooaZWkAX9uYd5J&ccb=1-7&_nc_sid=1eb0c7&oh=00_AfCqEk3lpBrRlNwafokA4PdHh6uycFUpzvz_tZN5sY6lrQ&oe=6488933E"
                  alt=""
                  className="w-12 rounded-full "
                />
                <div className="flex flex-col text-[16px] ">
                  <b>Theanh28Entertainment</b>
                  <p className="text-[12px] text-gray-400 ">20 phút</p>
                </div>
              </div>
              <div className="">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="">
              <span className="px-5">
                Brighton vẫn chưa chịu buông tha Arsenal :))
              </span>
              <img
                src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/346839570_3433312083590505_7299755273929008509_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XA25SzQRTToAX9t9Nrp&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBHKvXTZ1bHGZLnmS8dba69W_QFvTFr_B1M7govcl2kbw&oe=6466145C"
                alt=""
                className="w-full mt-2"
              />
            </div>
            <div className="px-5 py-3">
              <div className="icon flex items-center pb-2 ">
                <img src={funny} alt="" className="w-[16px] " />
                <img src={cute} alt="" className="w-[16px] mr-1" />
                <span>5.4k</span>
              </div>
              <div className="flex gap-2">
                <button className="w-full text-center rounded-full py-2 bg-gray-100">
                  <i className="fa-solid fa-thumbs-up mr-2"></i>5.427
                </button>
                <button className="w-full text-center rounded-full py-2 bg-gray-100">
                  <i className="fa-regular fa-message mr-2"></i> 1.271
                </button>
                <button className="w-full text-center rounded-full py-2 bg-gray-100">
                  <i className="fa-solid fa-share mr-2"></i>60
                </button>
              </div>
            </div>
          </nav>
        </nav>
        <nav className="right w-[20%] min-w-[300px] hidden md:block ">
          <div className="flex justify-between items-center font-[500] text-gray-500 p-5">
            <span>Người liên hệ</span>
            <div className="flex gap-5">
              <i className="fa-solid fa-video"></i>
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="user-active">
            <div className="flex items-center  rounded-xl px-3 py-2 hover:bg-gray-200 transition-all cursor-pointer">
              <div className="">
                <img
                  src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/327903419_920392489092766_766505803761635191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ij8zL7MB_CQAX_Exjd3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPTxNMESWj2cRyNLpFObdISr-_f11fFJ8ccGHRqdHGBg&oe=6464CC3B"
                  alt=""
                  className="w-8 rounded-full mr-3 "
                />
                <span className="w-2 h-2 rounded-full bg-green-500 block translate-x-6 -translate-y-2 border border-white p-1 "></span>
              </div>
              <span className="">Vũ Quang Đạo</span>
            </div>
            <div className="flex items-center  rounded-xl px-3 py-2 hover:bg-gray-200 transition-all cursor-pointer">
              <div className="">
                <img
                  src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/327903419_920392489092766_766505803761635191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ij8zL7MB_CQAX_Exjd3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPTxNMESWj2cRyNLpFObdISr-_f11fFJ8ccGHRqdHGBg&oe=6464CC3B"
                  alt=""
                  className="w-8 rounded-full mr-3 "
                />
                <span className="w-2 h-2 rounded-full bg-green-500 block translate-x-6 -translate-y-2 border border-white p-1 "></span>
              </div>
              <span className="">Vũ Quang Đạo</span>
            </div>
            <div className="flex items-center  rounded-xl px-3 py-2 hover:bg-gray-200 transition-all cursor-pointer">
              <div className="">
                <img
                  src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/327903419_920392489092766_766505803761635191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ij8zL7MB_CQAX_Exjd3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPTxNMESWj2cRyNLpFObdISr-_f11fFJ8ccGHRqdHGBg&oe=6464CC3B"
                  alt=""
                  className="w-8 rounded-full mr-3 "
                />
                <span className="w-2 h-2 rounded-full bg-green-500 block translate-x-6 -translate-y-2 border border-white p-1 "></span>
              </div>
              <span className="">Vũ Quang Đạo</span>
            </div>
            <div className="flex items-center  rounded-xl px-3 py-2 hover:bg-gray-200 transition-all cursor-pointer">
              <div className="">
                <img
                  src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/327903419_920392489092766_766505803761635191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ij8zL7MB_CQAX_Exjd3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPTxNMESWj2cRyNLpFObdISr-_f11fFJ8ccGHRqdHGBg&oe=6464CC3B"
                  alt=""
                  className="w-8 rounded-full mr-3 "
                />
                <span className="w-2 h-2 rounded-full bg-green-500 block translate-x-6 -translate-y-2 border border-white p-1 "></span>
              </div>
              <span className="">Vũ Quang Đạo</span>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  return renderContent();
};

export default HomeContent;
