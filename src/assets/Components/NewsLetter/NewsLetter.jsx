import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import bgimage from "../../Images/bg-shadow.png"



const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('newsletterEmail');
    
    if (savedEmail) {
      setEmail(savedEmail);
      setIsSubscribed(true);
    }
  }, []);

  const handleSubscribe = () => {
    if (email.trim() === '' || !email.includes('@')) {
      toast.warn("Please enter a valid email address.");
      return;
    }

    localStorage.setItem('newsletterEmail', email);
    setIsSubscribed(true);
    toast.success(`Thank you ${email} for subscribing!`);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="z-50 w-11/12 mx-auto rounded-xl p-6 border bg-[#ffffff4d] bg-opacity-50 absolute inset-x-[4%] bottom-[75%]">
        <div className="rounded-xl text-black bg-center bg-cover bg-no-repeat py-32  bg-orange-50"
         style={{
            backgroundImage: `url(${bgimage})`,
          }}
         >
      <div className="max-w-2xl mx-auto text-center">
        {isSubscribed ? (
          <h2 className="text-2xl text-black font-bold mb-4">WelCome to the Dream11 Website!</h2>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-lg mb-6">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex flex-col gap-4 md:flex-row  justify-center">
              <input
                type="email"
                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange}
              />
              <button
                className="px-6 py-2 bg-gradient-to-l from-yellow-400 to-pink-500 text-white rounded-lg hover:from-yellow-500 hover:to-pink-600 transition duration-300"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Newsletter