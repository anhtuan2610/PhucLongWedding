"use client";

import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Menu from "@/components/home/menu";
import Gallery from "@/components/introduce/gallery";
import Image from "next/image";

const teamMembers = [
  {
    name: "Nguyễn Ngọc Đức",
    role: "CO Founder",
    img: "/images/co-founder.jpg",
  },
];

const aboutUs = [
  {
    icon: "💍",
    title: "Chuyên nghiệp",
    desc: "Đội ngũ tận tâm, nhiều năm kinh nghiệm.",
  },
  {
    icon: "✨",
    title: "Sáng tạo",
    desc: "Ý tưởng độc đáo, không gian cưới ấn tượng.",
  },
  {
    icon: "🌸",
    title: "Tỉ mỉ",
    desc: "Chăm chút từng chi tiết để mọi thứ hoàn hảo.",
  },
];

const IntroducePage = () => {
  return (
    <div
      className="relative flex-1 min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home/service2.png')" }}
    >
      <div className="flex-1 bg-white min-h-screen">
        <Header />
        <div className="h-[1px] w-full bg-orange-400"></div>
        <Menu />

        {/* ========================= GALLERY ========================= */}
        <section
          id="about-gallery"
          className="max-w-[1180px] mx-auto px-4 space-y-4 lg:space-y-8 lg:mt-8"
        >
          <h2 className="font-lora text-[38px] text-[#3c634f] font-normal lg:text-[50px] lg:font-medium text-center">
            Bộ sưu tập khoảnh khắc
          </h2>
          <Gallery />
        </section>

        {/* ========================= INTRO HIGHLIGHT ========================= */}
        <section className="max-w-[1180px] mx-auto px-4 gap-12 items-center py-12 lg:py-16">
          <div className="flex-col justify-center items-center space-y-4">
            <h2 className="font-lora text-[38px] text-[#3c634f] font-normal lg:text-[50px] lg:font-medium text-center">
              Về chúng tôi
            </h2>
            <p className="text-gray-700 leading-relaxed text-center">
              Phúc Long Wedding được thành lập với mong muốn mang đến cho mỗi
              cặp đôi một lễ cưới độc đáo, sang trọng và đầy cảm xúc. Chúng tôi
              kết hợp sự sáng tạo và tỉ mỉ để biến ngày trọng đại trở thành kỷ
              niệm đáng nhớ.
            </p>
            <p className="text-gray-700 leading-relaxed text-center">
              Từ tư vấn ý tưởng, trang trí, đến tổ chức trọn gói – đội ngũ
              chuyên nghiệp của chúng tôi đồng hành cùng bạn trong từng chi
              tiết.
            </p>
          </div>
        </section>

        {/* ========================= CORE VALUES ========================= */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="max-w-[1180px] mx-auto px-4 text-center space-y-4 lg:space-y-8">
            <h2 className="font-lora text-[38px] text-[#3c634f] font-normal lg:text-[50px] lg:font-medium text-center">
              Giá trị cốt lõi
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {aboutUs.map((v, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
                >
                  <div className="text-5xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                  <p className="text-gray-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================= TEAM ========================= */}
        <section className="max-w-[1180px] mx-auto px-4 space-y-4 lg:space-y-8 py-12 lg:py-16">
          <h2 className="font-lora text-[38px] text-[#3c634f] font-normal lg:text-[50px] lg:font-medium text-center">
            Gặp gỡ đội ngũ
          </h2>
          <div className="flex justify-center">
            {teamMembers.map((m, i) => (
              <div key={i} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover rounded-full shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="text-gray-600">{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================= CTA BANNER ========================= */}
        <section className="relative bg-[url('/images/about/contact-banner.jpg')] bg-cover bg-center py-20">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-[1180px] mx-auto text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn sàng cho ngày trọng đại?
            </h2>
            <p className="mb-8 text-lg">
              Liên hệ với chúng tôi để được tư vấn và đặt lịch sớm nhất.
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://www.facebook.com/phuclongwedding?locale=vi_VN"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-semibold transition w-fit cursor-pointer"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>
        </section>

        {/* ========================= FOOTER ========================= */}
        <Footer />
      </div>
    </div>
  );
};

export default IntroducePage;
