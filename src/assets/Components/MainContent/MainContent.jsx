import { useEffect, useState } from "react";
import Profile from "./Profile";
import Selected from "./Selected";
import { toast } from 'react-toastify';

const MainContent = ({moneyCount}) => {
  const [playerProfile, setPlayerProfile] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    fetch("playersData.json")
      .then((res) => res.json())
      .then((data) => setPlayerProfile(data));
  }, []);
  const handleAvailable = () => {
    setIsActive(true);
  };
  const handleSelected = () => {
    setIsActive(false);
  };
  const handlePlayerSelection = (profile) => {
    const isExist = selected.find(
      (player) => player.playerId === profile.playerId
    );
   
    if (selected.length<6) {
      if (!isExist) {
        const totalSeletedPlayers = [...selected, profile];
        setSelected(totalSeletedPlayers);
        moneyCount(profile.biddingPrice)
        toast.success(`Congratulations ${profile.name} Joined your Team`);
        
      }
      else {
        return toast.warn(`${profile.name} Already Joined Your Team`);
      }
    }
    else{
      return toast.warn("You Already Bought 6 Player");
    }
  };
  const handleRemovePlayer=(id)=>{
    const remaingPlayer= selected.filter((player) => player.playerId !== id);
    setSelected(remaingPlayer);
  }
  return (
    <main className="w-11/12 mx-auto py-10">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#131313] font-bold text-2xl">
           {isActive?"Available Player":`Selected Player(${selected.length}/6)`}
          </h1>
          <div className="flex items-center">
            <button
              onClick={handleAvailable}
              className="px-4 py-2 border rounded-s-lg"
            >
              Available
            </button>
            <button
              onClick={handleSelected}
              className="px-4 py-2 border rounded-e-lg"
            >
              Selected(<span>{selected.length}</span>)
            </button>
          </div>
        </div>
        <div className="my-6">
          {isActive
            ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {
                playerProfile.map((profile, idx) => (
                  <Profile
                    key={idx}
                    profile={profile}
                    handlePlayerSelection={handlePlayerSelection}
                  />
                ))
              }
            </div>
            : <div>
              {selected.map((selected, idx) => <Selected key={idx} selected={selected} handleRemovePlayer={handleRemovePlayer} />)}
              
              </div>}
              {
                selected.length?<button onClick={handleAvailable} className="btn">Add Player</button>:''
              }
        </div>
      </div>
    </main>
  );
};

export default MainContent;
