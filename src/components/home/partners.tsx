import Image from "next/image";

const partnerList = [
  {
    id: 1,
    name: "lotte",
    image: "/images/home/partner1.png",
  },
  {
    id: 2,
    name: "lotte",
    image: "/images/home/partner1.png",
  },
  {
    id: 3,
    name: "lotte",
    image: "/images/home/partner1.png",
  },
];

const Partners = () => {
  return (
    <section className="space-y-4 mt-8 text-center lg:mt-16">
      <h2 className="font-lora text-[38px] text-[#3c634f] font-normal lg:text-[50px] lg:font-medium">
        Đối tác của Phúc Long Wedding
      </h2>

      <p className="font-montserrat text-[15px] max-w-[800px] mx-auto">
        Với phương châm phát triển bền vững, Phúc Long đã vinh dự được lựa chọn
        tổ chức sự kiện cho rất nhiều hội nghị quan trọng mang tầm quốc tế
      </p>
      <div className="flex justify-center space-x-2">
        {partnerList.map((partners) => (
          <div key={partners.id} className="">
            <Image
              src={partners.image}
              alt={`Partner ${partners.name}`}
              width={150}
              height={60}
              className="object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
