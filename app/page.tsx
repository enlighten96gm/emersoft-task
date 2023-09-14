import Heading from "./components/heading";
import Posts from "./components/posts";

const Home = () => {
  return (
    <div className="h-screen flex items-center flex-col text-center md:mx-16 mx-4">
      <Heading />
      <Posts />
    </div>
  );
};

export default Home;
