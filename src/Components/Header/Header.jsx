import profileImage from "../../assets/images/profile.png";
import notification from "../../assets/images/notifications.svg";
import { BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <header className="mb-10 mr-10 ">
      <div className=" flex gap-6 items-center ">
        {/* welcome message of admin */}
        <div className="flex justify-start gap-4">
          <img src={profileImage} alt="profile Image" />

          <p className="flex flex-col gap-3">
            <h1 className="text-[18px] font-semibold h-[13px]">اهلا أدمن</h1>
            <span className="text-[14px] h-[10px] text-[#48464C]">
              8:34 صباحا-12 سبتمبر 2023
            </span>
          </p>
        </div>
        {/* * search bar */}

        <div className="flex flex-1  items-center relative">
          <button className="absolute pt-2 pr-2">
            {" "}
            <BiSearch />
          </button>
          <input
            type="text"
            placeholder="بحث"
            className=" w-full py-2 px-6 rounded-[10px] border-1 bg-white border border-white-200"
          />
        </div>

        {/* notifactions */}
        <div className="w-14 h-14 flex justify-center items-center">
          <div className="relative ">
            <span className="w-2 h-2 bg-blue-500 rounded-full absolute right-0 mt-1" />
            <img src={notification} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
