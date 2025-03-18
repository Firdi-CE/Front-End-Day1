import React from "react";
import Automata from "../assets/Automata.jpg";
import Card from "../components/card/card";

const Home: React.FC = () => {
  return (
    <div>
      <section className="flex flex-row mx-auto justify-center m-10 gap-5 w-0.5 md:w-fit py-10">
        <div className="flex flex-col my-auto">
          <h1 className="text-xl md:text-6xl font-medium w-20 md:w-80 mx-auto text-center font-italiana">
            Things That i like, including but not limited to
          </h1>
          <p className="text-clip md:px-1 text-base w-40 md:w-lg border-t-2 border-black mx-auto my-2 text-justify">
            Great games you might have not tried, Such as The Critically
            Acclaimed Nier Automata and its other games.
          </p>
        </div>

        <div>
          <img
            src={Automata}
            title="Nier Automata"
            className="min-w-[200px] min-h-[300px] object-cover md:w-md rounded-lg drop-shadow-[18px_18px_5px_rgba(0,0,0,0.4)]"
          />
        </div>
      </section>

      <br />

      <section className="flex flex-col w-full md:w-3/5 m-auto py-10">
        <h1 className="font-light text-center text-xl md:text-4xl border-b-1 pb-1 md:pb-2 w-3/5 m-auto ">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5">
          <Card
            imgSrc="src\assets\Reincarnation.jpg"
            title="Nier Reincarnation"
            description=" Sadly this one is already taken offline and is no longer available to play."
          />
          <Card
            imgSrc="src\assets\Replicant.jpg"
            title="Nier Replicant"
            description="Is a Pre-Sequel of Nier Automata and is a great game to play if you like the series."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
