import React from "react";
import background from "../assets/images/hero.png";
import Card from "../components/card";
import SearchIcon from "../assets/images/search.png";
import DesktopIcon from "../assets/images/desktop.png";

export const Home = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div
        style={{
          background: `linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)`,
        }}
        className="w-full bg-gray-200 mb-4"
      >
        <div class="container mx-auto max-w-5xl lg:w-3/5 md:w-1/2 lg:relative">
          <img
            // style={{ filter: `drop-shadow(0 0 0.75rem blue)` }}
            src={background}
            alt=""
            class="w-full h-auto"
          />
          <div
            style={{
              background: `linear-gradient(257deg, #1CBDDD 27.86%, #4DCA79 100%), #FFF`,
            }}
            class="h-auto lg:bottom-5 lg:left-5 p-4 lg:absolute lg:w-3/5 w-full lg:block hidden"
          >
            <p
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.96px",
                textTransform: "capitalize",
              }}
              className="inter"
            >
              We crush your competitors, goals, and sales records - without the
              B.S.
            </p>
            <button
              style={{
                background: "#F28D35",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "-0.28px",
                textTransform: "uppercase",
              }}
              class="text-white py-2 px-4 rounded inter cursor-pointer mt-5"
            >
              Get free consultation
            </button>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient(257deg, #1CBDDD 27.86%, #4DCA79 100%), #FFF`,
          }}
          class="h-auto w-full lg:hidden block w-1/2 p-4"
        >
          <p
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "-0.96px",
              textTransform: "capitalize",
            }}
            className="inter"
          >
            We crush your competitors, goals, and sales{" "}
            <br className="sm:block hidden" />
            records - without the B.S.
          </p>
          <button
            style={{
              background: "#F28D35",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "-0.28px",
              textTransform: "uppercase",
            }}
            class="text-white py-2 px-4 rounded inter cursor-pointer mt-5"
          >
            Get free consultation
          </button>
        </div>
      </div>
      <Card
        imageURL={DesktopIcon}
        content={
          "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
        }
        heading={"Web & Mobile App Development"}
      />
      <Card
        imageURL={SearchIcon}
        content={
          "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
        }
        heading={"Digital Strategy Consulting"}
      />
    </section>
  );
};
