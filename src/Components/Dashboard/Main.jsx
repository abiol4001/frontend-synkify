import React from "react";

export const postsOverview = [
  { number: "800,561,278", title: "impressions" },
  { number: "100+", title: "New Followers" },
  { number: "1080+", title: "Likes" },
  { number: "50", title: "Posts" },
  { number: "500+", title: "Reposts" },
];

export const integratedSocials = [
  {
    name: "Edith Akpan",
    title: "Enterpreneur",
    image: "userImage.png",
    posts: "600",
    followers: "18000",
    following: "2000",
  },
  {
    name: "Edith Akpan",
    title: "Enterpreneur",
    image: "userImage.png",
    posts: "1000",
    followers: "10200",
    following: "5000",
  },
  {
    name: "Edith Akpan",
    title: "Enterpreneur",
    image: "userImage.png",
    posts: "2000",
    followers: "5600",
    following: "1800",
  },
];

const Main = () => {
  return (
    <div className="m-8">
      <div>
        <h3 className="text-[28px] text-[#346265]">Posts Overview</h3>
        <div className="flex justify-between">
          {postsOverview.map((item, i) => (
            <div
              key={i}
              className="bg-[#4D7679] rounded-[8px] text-white min-w-[148px] flex flex-col items-center py-2"
            >
              <p>{item.number}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#D7D6D7] mt-10 rounded-sm px-2 py-4">
        <h3 className="text-[28px] text-[#346265] mb-8">Integrated Socials</h3>
        <div className="flex justify-evenly">
          {integratedSocials.map((item, i) => (
            <div
              key={i}
              className="w-[230px] flex flex-col items-center bg-white py-2 rounded-sm border border-black"
            >
              <img src={item.image} alt="User Image" />
              <h4>{item.name}</h4>
              <h4>{item.title}</h4>
              <div className="flex items-center text-center mt-3 justify-evenly w-[100%]">
                <div>
                  <p className="font-[400]">{item.posts}</p>
                  <p>Posts</p>
                </div>
                <div>
                  <p className="font-[400]">{item.followers}</p>
                  <p>Followers</p>
                </div>
                <div>
                  <p className="font-[400]">{item.following}</p>
                  <p>Following</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <p>Recent Messages</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
