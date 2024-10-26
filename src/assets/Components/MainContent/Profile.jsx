import PropTypes from 'prop-types'; 

const Profile = ({ profile,handlePlayerSelection }) => {
  const {name, country, image, role, battingType, bowlingType, biddingPrice,rating } =
    profile;
  return (
    <div>

      <div className="border p-5 space-y-6 rounded-xl">
        <figure className="">
          <img
            src={image}
            alt={name}
            className="rounded-xl h-60 w-full object-cover"
          />
        </figure>
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl text-[#131313]">
            <i className="fa-solid fa-user"></i>
            <span>{name}</span>
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-gray-400">
              <i className="fa-solid fa-flag"></i>
              <span>{country}</span>
            </div>
            <p className="bg-base-300 px-3 py-2 rounded-lg">{role}</p>
          </div>
          <hr />
          <p><span className='font-semibold text-[#131313]'>Rating :</span> {rating}</p>
          <div className="flex flex-col gap-4">
            <p><span className='font-semibold text-[#131313]'>Batting Style : </span> {battingType}</p>
            <p><span className='font-semibold text-[#131313]'>Bowling Style : </span>{bowlingType?bowlingType:'Not Available'}</p>
          </div>
          <div className="flex justify-between items-center">
            <p> <span className='font-semibold text-[#131313]'>Price :</span> ${biddingPrice}</p>
            <button onClick={()=>handlePlayerSelection(profile)} className="px-4 py-2 rounded-md border bg-white text-[#131313] hover:bg-base-300 transition duration-100">
              Choose player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes={
    profile:PropTypes.object,
    handlePlayerSelection:PropTypes.func,  
  }
