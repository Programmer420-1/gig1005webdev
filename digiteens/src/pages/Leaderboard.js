import React, { useState } from "react";
import NavBar from "../commons/navbar";
import tw, { styled } from "twin.macro";
import LeaderboardDropdown from "../component/LeaderboardDropdown";

const data = {
  "Digital Advocacy": [
    { url: "Digital Advocacy/Lim Ju Yen.jpeg", name: "Lim Ju Yen" },
    {
      url: "Digital Advocacy/Clement Teh Chun Qiang.jpeg",
      name: "Clement Teh Chun Qiang",
    },
    { url: "Digital Advocacy/Ng Chuan Xin.jpeg", name: "Ng Chuan Xin" },
  ],
  "Digital Opportunity": [
    { url: "Goh Qian Ying.jpg", name: "Goh Qian Ying" },
    { url: "Kor Zhe Yi.jpg", name: "Kor Zhe Yi" },
    { url: "Lim Woan Xin.jpg", name: "Lim Woan Xin" },
    { url: "Tan Wei Ling.jpg", name: "Tan Wei Ling" },
    { url: "Teoh Zhen Xuan.jpg", name: "Teoh Zhen Xuan" },
  ],
  "Digital Privacy": [
    { url: "Digital Privacy/Bade Srija.png" },
    { url: "Digital Privacy/Melveer.png" },
    { url: "Digital Privacy/Arjoon.png" },
  ],
  "Digital Security": [
    {
      url: "Digital Security/Muhammad Nabil Iqbal Bin Mohd Baharin.jpeg",
      name: "Muhammad Nabil Iqbal Bin Mohd Baharin",
    },
    {
      url: "Digital Security/JENNIFER WEE SHIN PING.jpeg",
      name: "Jennifer Wee Shin Ping",
    },
    {
      url: "Digital Security/CHRISTINA KU PEI SAN.jpeg",
      name: "Christina Ku Pei San",
    },
  ],
};

function Leaderboard() {
  const [selected, setSelected] = useState("Digital Advocacy");

  return (
    <div style={{ backgroundColor: "black" }}>
      <Wrapper>
        <NavBar />
        <p className="font-bold text-3xl text-center md:pt-16 pt-5 lg:pt-32">
          Leaderboard
        </p>
        <LeaderboardDropdown selected={selected} setSelected={setSelected} />
        {selected === "Digital Opportunity" ? (
          <Rows>
            {data["Digital Opportunity"].map((val, idx) => {
              return (
                <div>
                  <img
                    key={idx}
                    src={"/assets/winners/Digital Opportunity/" + val["url"]}
                  />
                  <p>{val["name"]}</p>
                </div>
              );
            })}
          </Rows>
        ) : (
          <div className="relative h-full mt-10">
            <div className="grid md:grid-cols-3 grid-cols-1 mx-auto md:fixed inset-x-0 lg:bottom-2 bottom-24 px-3 lg:px-24">
              <PodiumDiv className="md:order-2 md:relative md:bottom-36">
                <PodiumImg bgImage={data[selected][0]["url"]}></PodiumImg>
                <div
                  className="md:py-5 py-3 md:mx-5 mx-28"
                  style={{ backgroundColor: "#FFCB9B", color: "#106466" }}
                >
                  <PodiumText>Gold</PodiumText>
                  <p>{data[selected][0]["name"]}</p>
                </div>
              </PodiumDiv>

              <PodiumDiv className="md:order-1 md:relative md:bottom-24">
                <PodiumImg bgImage={data[selected][1]["url"]}></PodiumImg>
                <div
                  className="md:py-5 py-3 md:mx-5 mx-28"
                  style={{ backgroundColor: "#D2E9E3", color: "#106466" }}
                >
                  <PodiumText>Silver</PodiumText>
                  <p>{data[selected][1]["name"]}</p>
                </div>
              </PodiumDiv>

              <PodiumDiv className="md:order-3 md:relative md:bottom-24">
                <PodiumImg bgImage={data[selected][2]["url"]}></PodiumImg>
                <div
                  className="md:py-5 py-3 md:mx-5 mx-28 "
                  style={{ backgroundColor: "#D2E9E3", color: "#106466" }}
                >
                  <PodiumText>Bronze</PodiumText>
                  <p>{data[selected][2]["name"]}</p>
                </div>
              </PodiumDiv>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/assets/images/leaderboardBg.jpg");
  background-position: 0px -200px;
  background-attachment: fixed;
  @media (max-width: 640px) {
    background-position: -350px -60px;
  }
`;

const PodiumText = styled.p`
  ${tw`text-center font-semibold text-lg`}
`;

const PodiumImg = styled.div`
  ${tw`md:h-52 md:w-36 h-56 w-48 lg:h-64 lg:w-52`}
  margin: 30px auto;
  background-color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/assets/winners/${props.bgImage}")`};
`;

const PodiumDiv = styled.div``;

const Rows = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 5%;
  margin-top: 5%;
  justify-content: center;
  align-items: flex-end;

  img {
    max-width: 100%;
  }

  div {
    width: 200px;
    margin: 30px 30px;
  }

  p{
    margin-top: 20px;
    background-color: #FFCB9B;
    color: #106466;
    padding: 15px;
    text-align: center;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media (max-width: 961px) {
    margin: 50px 10px;
  }

`;

export default Leaderboard;
