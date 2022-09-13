import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";

const Dashboard = () => {
  const characters = [
    {
      name: "BMO",
      url: "https://ih1.redbubble.net/image.1206539682.0896/st,small,507x507-pad,600x600,f8f8f8.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "https://www.nicepng.com/png/detail/145-1451818_drawing-adventure-bmo-adventure-time-bmo-drawing.png",
    },
    {
      name: "Monica Hall",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUjbynHOFO2b4nIfNy47fyjWJtYA_2E7DdA&usqp=CAU",
    },
    {
      name: "Jared Dunn",
      url: "https://images-na.ssl-images-amazon.com/images/I/71xHh6f9YgL.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxcGPyrduYhMOh9YNw7cXoJUE9ib_kiM80A&usqp=CAU",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div style={{ backgroundImage: "url( " + character.url + " )" }} className="card">
                <h3> {character.name} </h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">{lastDirection ? <p>You swiped {lastDirection}</p> : <p></p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
