import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import YellowBar from "./components/YellowBar";
import Discover from "./components/Discover";
import SetsApart from "./components/SetsApart";
import Consultation from "./components/Consultation";
import Approach from "./components/Approach";
import Review from "./components/Review";
import Experts from "./components/Experts";
import Download from "./components/Download";
import Footer from "./components/Footer";





export default function Home() {
  return (
    <>
      <div className="h-full ">
        <Navbar />
        <div className="h-full flex flex-col ">
          <Banner />
          <YellowBar />
        </div>
        <Discover />
        <SetsApart />
        <Consultation />
        <Approach />
        <Review />
        <Experts />
        <Download />
        <Footer />
      </div>

    </>
  );
}
