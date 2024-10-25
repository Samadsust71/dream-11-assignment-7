import FooterLogo from "../../Images/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-black py-10 lg:py-16 text-gray-200 relative">
      <div className="flex justify-center items-center">
        <img src={FooterLogo} alt="footer-logo" />
      </div>
      <section className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 my-6">
        <div className="lg:w-[30%]">
          <h1 className="font-bold">About Us</h1>
          <p className="text-gray-400 mt-6">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </div>
        <div>
          <h1 className="font-bold">Quick links</h1>
          <ul className="flex flex-col list-disc mt-6 text-gray-400 space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Subscribe</h1>
          <p className="text-gray-400 mt-6 mb-4">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>

          <label className="flex items-center text-black">
            <input
              type="text"
              className="grow px-4 py-3 border-none outline-none rounded-s-xl"
              placeholder="Enter your email"
            />
            <button className="px-4 py-3 border-none rounded-e-xl bg-gradient-to-r from-orange-300 to-red-400 font-bold">
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
