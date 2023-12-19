import React from "react";

const card = (props) => {
  return (
    <section
      class="container mx-auto p-5 antialiased"
      style={{ maxWidth: "960px" }}
    >
      <article class=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto group transform duration-500 hover:-translate-y-1">
        <img
          class="object-contain mx-auto md:w-1/4"
          src={props.imageURL}
          alt="Services"
        />
        <div class="">
          <div class="py-5">
            <h1
              style={{
                color: "#6B3CC9",
                fontSize: "27px",
                lineHeight: "33px",
                letterSpacing: "0.4px",
              }}
              class="m-2 mt-8 inter md:text-left text-center"
            >
              {props.heading}
            </h1>
            <p class="text-black m-2 poppins md:text-left text-center">
              {props.content}
            </p>
          </div>
          <div className="m-2 mb-8 flex">
            <button
              style={{
                background: "#F28D35",
                fontSize: 14,
                fontWeight: 700,
                textAlign: "justify",
                textTransform: "uppercase",
              }}
              class="hover:bg-blue-700 text-white py-2 px-4 rounded inter cursor-pointer"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default card;
