import logo from "../../Images/logo.png";
import coinIcon from "../../Images/coin.png";
import BGimage from "../../Images/bg-shadow.png";
import BannerImage from "../../Images/banner-main.png";


const Header = ({handleFreeCredit,coin}) => {
 
  return (
    <div className="w-11/12 mx-auto">
      {/* navbar starts */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a>
            <img src={logo} alt="logo" className="border-2 border-dashed border-gray-400" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex lg:pr-12">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-1 items-center justify-center px-3 py-2 border rounded-lg">
            <p className="font-semibold">
              <span>{coin}</span> Coin
            </p>
            <img
              src={coinIcon}
              alt="coin Icon"
              className="h-5 w-5 object-cover"
            />
          </div>
        </div>
      </div>
      {/* navbar ends */}
      {/* Banner starts */}
      <section
        className="rounded-xl w-full bg-center bg-cover bg-no-repeat py-10 bg-black mt-4"
        style={{
          backgroundImage: `url(${BGimage})`,
        }}
      >
        <div className=" flex flex-col justify-center items-center space-y-6">
          <img src={BannerImage} alt="" className="border-2 border-dashed border-gray-400" />
          <h1 className="mb-5 text-2xl lg:text-4xl font-bold text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5 lg:text-2xl text-[#ffffffb3]">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border border-[#E7FE29] p-2 max-w-fit rounded-xl">
            <button onClick={handleFreeCredit} className="btn bg-[#E7FE29]">
              Claim Free Credit
            </button>
          </div>
        </div>
      </section>
      {/* Banner ends */}
      
    </div>
  );
};

export default Header;
