import Image from "next/image";
import { MoveRight } from "lucide-react";

export const services = [
  {
    id: 1,
    images: "/images/home/service1.png",
    title: "Trang trí tiệc cưới",
    desc: "Thiết kế không gian tiệc cưới sang trọng, từ bàn tiệc, sân khấu đến cổng hoa.",
  },
  {
    id: 2,
    images: "/images/home/service2.png",
    title: "Trang trí lễ ăn hỏi",
    desc: "Chuẩn bị tráp ăn hỏi, phông nền và bàn tiệc theo phong cách hiện đại hoặc truyền thống.",
  },
  {
    id: 3,
    images: "/images/home/service3.png",
    title: "Trang trí phòng tân hôn",
    desc: "Sắp xếp và trang trí phòng tân hôn lãng mạn, ấm áp và tinh tế.",
  },
  {
    id: 4,
    images: "/images/home/service4.png",
    title: "Thuê xe hoa & xích lô",
    desc: "Cung cấp dịch vụ xe hoa, xe xích lô đón dâu với trang trí hoa tươi.",
  },
];

const Services = () => {
  return (
    <section className="lg:mt-12">
      <div className="space-y-3 my-8 text-center">
        <h2 className="font-lora text-[38px] text-[#3c634f] font-normal lg:text-[50px] lg:font-medium">
          Dịch vụ cưới hỏi của Phúc Long Wedding
        </h2>
        <p className="font-montserrat text-[15px] max-w-[800px] mx-auto text-center">
          Là TOP 1 trong 10 dịch vụ cưới hỏi trọn gói uy tín và chất lượng nhất
          tại Quảng Ninh Phúc Long tự tin cùng bạn và gia đình tạo lên một đám
          cưới hoàn mỹ và trọn vẹn
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.id} className="space-y-2 group">
            <div className="relative w-full aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src={service.images}
                alt={service.title}
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-105 cursor-pointer"
              />
            </div>

            <h3 className="font-montserrat text-xl text-[#13544a] font-medium text-center uppercase lg:font-semibold">
              {service.title}
            </h3>

            <p className="font-montserrat text-base text-center">
              {service.desc}
            </p>

            <button className="mx-auto flex items-center gap-2 bg-[#3D6350] px-4 py-2 text-white rounded-lg font-medium shadow-lg cursor-pointer">
              Xem thêm
              <MoveRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
