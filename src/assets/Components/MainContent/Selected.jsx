import PropTypes from 'prop-types'; 

const Selected = ({ selected, handleRemovePlayer }) => {
  const { playerId, name, image, role } = selected;
  return (
    <div>
      <div className="flex justify-between items-center bg-base-200 p-6 rounded-xl my-6">
        <div className="flex items-center gap-6">
          <img src={image} alt={name} className="h-14 w-14 rounded-full object-cover" />

          <div>
            <h3 className="text-black font-bold">{name}</h3>
            <p>{role}</p>
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
