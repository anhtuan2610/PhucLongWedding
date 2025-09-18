import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Menu from "@/components/home/menu";
import Gallery from "@/components/introduce/gallery";

const IntroducePage = () => {
  return (
    <div className="flex-1 bg-white min-h-screen">
      <Header />
      <div className="h-[1px] w-full bg-orange-400"></div>
      <Menu />
      <div className="max-w-[1180px] mx-auto my-8 px-3">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default IntroducePage;
