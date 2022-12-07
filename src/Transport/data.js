import cybermoto from "../assets/cybermoto.jpg";
import cyclotron from "../assets/cyclotron-bike-futuriste.jpeg";
import trottinette from "../assets/plume-allure-trottinette.jpg";
import oceanco from "../assets/oceanco-yacht-concept-de-superyacht-pininfarina-design-1.png";

const data = {
  technologies: [
    {
      id: 1,
      name: "The Space Bike",
      images: {
        portrait: cybermoto,
        landscape: cybermoto,
      },
      description:
        "Treadle your team to the chosen planet. Kick off your team building with a sporty ride !",
    },
    {
      id: 2,
      name: "The Space Bicycle",
      images: {
        portrait: cyclotron,
        landscape: cyclotron,
      },
      description:
        "Get a close ride with your loved one and enjoy each moment of this beautiful journey up close.",
    },
    {
      id: 3,
      name: "The Space scooter",
      images: {
        portrait: trottinette,
        landscape: trottinette,
      },
      description:
        "Embark aboard this flying scooter, for a complete experience, mixing speed and adrenaline.",
    },
    {
      id: 4,
      name: "The Space-Ship",
      images: {
        portrait: oceanco,
        landscape: oceanco,
      },
      description:
        "Come float to your destination with your family crew. travelling with kids has never been so easy; soundproofed rooms and game rooms in the fully staffed yatch will easure you have a pleasant flight.",
    },
  ],
};

export default data;
