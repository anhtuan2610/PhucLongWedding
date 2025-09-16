"use client"; // nếu dùng Next.js 13 app directory

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { EffectCards, Pagination } from "swiper/modules";

const feedbackList = [
  {
    id: 1,
    image: "/images/home/feedback1.png",
    name: "Chú rể Antony Nguyễn",
    desc: "Cũng nhờ chị Hạnh anh Đức tư vấn, 2 anh chị nhiệt tình hỗ trợ chúng em mới có thành quả đẹp như thế này. Em quá mãn nguyện rồi.",
  },
  {
    id: 2,
    image: "/images/home/feedback2.png",
    name: "Chú rể Đan Trường",
    desc: "Rất hài lòng với dịch vụ! Mọi thứ đều được chuẩn bị cẩn thận và chu đáo. Mình chắc chắn sẽ giới thiệu cho bạn bè.",
  },
  {
    id: 3,
    image: "/images/home/feedback3.png",
    name: "Chú rể Onana Trần",
    desc: "Dịch vụ tuyệt vời, mọi thứ đều hoàn hảo và đúng ý. Cảm ơn đội ngũ đã hỗ trợ chúng em.",
  },
  // Thêm các feedback khác nếu cần
];

const Feedbacks = () => {
  return (
    <section
      className="px-2 py-[46px]"
      style={{
        backgroundImage: "url('/images/home/feedback-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="font-lora text-[38px] text-[#3c634f] font-normal text-center pb-5 lg:text-[50px] lg:font-medium">
        Ý kiến khách hàng
      </h2>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{ clickable: true }}
        className="max-w-[350px] mx-auto relative lg:max-w-[450px]"
      >
        {feedbackList.map((feedback) => (
          <SwiperSlide key={feedback.id} className="rounded-lg">
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg h-[550px] lg:h-[615px]">
              <div className="relative w-full flex-1">
                <Image
                  src={feedback.image}
                  fill
                  alt={feedback.name}
                  className="object-cover rounded"
                />
              </div>
              <p className="font-montserrat font-bold text-[18px] text-[#333333] text-center mt-4">
                {feedback.name}
              </p>
              <p className="font-montserrat text-[15px] text-[#333333] mt-2 line-clamp-4 text-center pb-8">
                {feedback.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className="swiper-pagination mt-20"></div> */}
      </Swiper>
    </section>
  );
};

export default Feedbacks;
