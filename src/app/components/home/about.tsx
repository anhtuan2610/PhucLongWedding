import Image from "next/image";

const abouts = [
  {
    id: 1,
    icon: "/images/home/icon1.png",
    desc: "Cam kết mang đến ngày cưới chỉn chu, thẩm mỹ và đậm dấu ấn cá nhân.",
  },
  {
    id: 2,
    icon: "/images/home/icon2.png",
    desc: "Tiết kiệm thời gian, hạn chế phát sinh với tư vấn chuyên sâu và minh bạch.",
  },
  {
    id: 3,
    icon: "/images/home/icon3.png",
    desc: "Phúc Long mang đến sự tiện lợi và an tâm, đồng hành cùng bạn từ A đến Z trong hành trình cưới.",
  },
];

const About = () => {
  return (
    <section className="lg:flex">
      <div className="relative aspect-[17/10] lg:flex-1">
        <Image
          src="/images/home/about.png"
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-[#3D6350] lg:flex-1">
        <div className="text-[#d1b483] p-[18px]">
          <h2 className="font-lora text-[38px] text-center mb-[30px] font-medium">
            Giới thiệu về chúng tôi
          </h2>
          <div className="text-base font-montserrat font-medium">
            <p className="uppercase">
              CHÀO MỪNG BẠN ĐẾN VỚI CÔNG TY TNHH TỔ CHỨC SỰ KIỆN ĐÁM CƯỚI Đức
              Hạnh
            </p>
            <p>
              Chúng tôi là nhà tổ chức sự kiện - cưới hỏi chuyên nghiệp. Với
              phương châm phất triển bền vững. Phúc Long đã vinh dự được lựa
              chọn tổ chức sự kiện cho rất nhiều hội nghị quan trọng mang tầm
              quốc tế.
            </p>
          </div>
          <div className="h-[1px] w-full bg-gray-600 mt-4"></div>
        </div>
        <div className="px-8 pb-8 space-y-4">
          {abouts.map((about) => (
            <div key={about.id} className="flex items-center gap-3">
              <div className="relative w-[60px] h-[60px] shrink-0">
                <Image
                  src={about.icon}
                  alt="icon"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[#d1b483] font-montserrat text-[15px] font-medium">
                {about.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
