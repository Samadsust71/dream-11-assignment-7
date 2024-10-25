import PropTypes from 'prop-types'; 

const Profile = ({ profile,handlePlayerSelection }) => {
  const {name, country, image, role, battingType, bowlingType, biddingPrice } =
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
          <h2 className="flex items-center gap-1">
            <i className="fa-solid fa-user"></i>
            <span>{name}</span>
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-flag"></i>
              <span>{country}</span>
            </div>
            <p className="bg-base-300 px-3 py-2 rounded-lg">{role}</p>
          </div>
          <hr />
          <p>Rating</p>
          <div className="flex justify-between items-center">
            <span>{battingType}</span>
            <span>{bowlingType?bowlingType:'Not Available'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Price : ${biddingPrice}</span>
            <button onClick={()=>handlePlayerSelection(profile)} className="btn px-4 py-2 rounded-md border bg-white">
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
