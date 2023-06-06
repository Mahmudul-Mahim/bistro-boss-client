import SectionTitle from "../../../Componenets/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-2 my-20">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20 2023</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            recusandae ab enim, molestiae eum quos provident sed porro eos fuga
            doloribus saepe tempora id ipsam veniam esse minima modi at!
          </p>
          <button className="btn btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
