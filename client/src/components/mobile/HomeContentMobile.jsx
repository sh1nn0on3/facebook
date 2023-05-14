import funny from "../../assets/funny.png"
import cute from "../../assets/cute.png"

const HomeContentMobile = () => {
  return (
    <>
      <nav className="px-5 py-3 flex justify-between items-center gap-3">
        <div className="w-[10%] min-w-[28px] ">
          <img
            src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/327903419_920392489092766_766505803761635191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ij8zL7MB_CQAX_Exjd3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAPTxNMESWj2cRyNLpFObdISr-_f11fFJ8ccGHRqdHGBg&oe=6464CC3B"
            alt=""
            className="w-12 rounded-full "
          />
          <span className="w-2 h-2 rounded-full bg-green-500 flex translate-x-7 -translate-y-2 border border-white p-1 "></span>
        </div>
        <div className="w-full px-5 py-1 bg-gray-bg rounded-full -translate-y-1">
          <input
            type="text"
            placeholder="Đăng cập nhật trạng thái"
            className="outline-none w-full bg-gray-bg "
          />
        </div>
        <div className="w-[5%] flex flex-col justify-center items-center ">
          <i className="fa-solid fa-images text-[18px] "></i>
          <span className="text-[14px] ">Ảnh</span>
        </div>
      </nav>
      <nav className="body overflow-x-scroll scroll-smooth scroll px-5 py-3 border-y-4 border-gray-bg ">
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
      </nav>
      <nav className="border-y-2 border-gray-bg py-3">
        <div className="flex justify-between items-center px-5 py-3 bg-white">
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
    </>
  );
};

export default HomeContentMobile;
