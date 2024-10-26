import FooterLogo from "../../Images/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-black pb-10 pt-80 text-gray-200 mt-32">
      <div className="flex justify-center items-center mb-6">
        <img src={FooterLogo} alt="footer-logo" className="border-2 border-dashed border-gray-400" />
      </div>
      <section className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 my-6">
      
        <div>
          <h1 className="font-bold">About Us</h1>
          <p className="text-gray-400 mt-6">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </div>
        <div>
          <h1 className="font-bold">Quick links</h1>
          <div className="pl-6 mt-6">
            <ul className="flex flex-col list-disc text-gray-400 space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div>
          
          <div>
          <h1 className="font-bold">Subscribe</h1>
          <p className="text-gray-400 mt-6">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>
          </div>
          <label className="flex items-center text-black mt-6">
            <input
              type="text"
              className="grow px-4 py-3 border-none focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-s-xl"
              placeholder="Enter your email"
            />
            <button className="px-4 py-3 border-none rounded-e-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gradient-to-r from-yellow-400 to-pink-500 text-[#131313] hover:from-yellow-500 hover:to-pink-600 transition duration-300 font-bold">
              Subscribe
            </button>
          </label>
        </div>
    
      </section>
      <div className="border-[.1px] border-gray-400 my-14"></div>
      <p className="text-center text-sm text-gray-400">
        &copy;2024 Dream11 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
