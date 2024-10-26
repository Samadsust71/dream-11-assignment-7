import PropTypes from 'prop-types'; 

const Selected = ({ selected, handleRemovePlayer }) => {
  const { playerId, name, image, role,biddingPrice } = selected;
  return (
    <div>
      <div className="flex justify-between items-center border p-6 rounded-2xl my-6">
        <div className="flex items-center gap-6">
          <img src={image} alt={name} className="h-14 w-14 rounded-2xl object-cover" />

          <div>
            <h3 className="text-[#131313] font-bold">{name}</h3>
            <p >{role}</p>
            <p>Price : ${biddingPrice}</p>
          </div>
        </div>
        <button
          onClick={() => handleRemovePlayer(playerId)}
          className="text-red-500"
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Selected;

Selected.propTypes={
    selected:PropTypes.object,
    handleRemovePlayer:PropTypes.func,  
}
