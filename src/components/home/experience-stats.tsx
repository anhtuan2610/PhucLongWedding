"use client";
import { Heart, Users, Award, CalendarCheck } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AnimatedNumber } from "../common/animated-number";

const stats = [
  {
    id: 1,
    icon: <Award size={36} className="text-[#3c634f]" />,
    number: 10,
    suffix: "+",
    label: "Năm kinh nghiệm",
  },
  {
    id: 2,
    icon: <Users size={36} className="text-[#3c634f]" />,
    number: 5000,
    suffix: "+",
    label: "Cặp đôi tin tưởng",
  },
  {
    id: 3,
    icon: <CalendarCheck size={36} className="text-[#3c634f]" />,
    number: 2000,
    suffix: "+",
    label: "Sự kiện thành công",
  },
  {
    id: 4,
    icon: <Heart size={36} className="text-[#3c634f]" />,
    number: 100,
    suffix: "+",
    label: "Đối tác uy tín",
  },
];

export default function ExperienceStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  // once: true → chỉ trigger 1 lần, amount:0.3 → 30% section vào viewport

  return (
    <div ref={ref} className="px-2 flex justify-center mb-8">
      <div className="max-w-[1180px] mx-auto">
        <section className="space-y-10 my-8 text-center">
          <h2 className="font-lora text-[38px] text-[#3c634f] font-normal lg:text-[50px] lg:font-medium">
            Những con số ấn tượng
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-2 font-montserrat"
              >
                {item.icon}
                <p className="text-3xl lg:text-4xl font-bold text-[#3c634f]">
                  <AnimatedNumber
                    value={item.number}
                    suffix={item.suffix}
                    start={isInView}
                  />
                </p>
                <p className="text-[#333333] text-sm sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
