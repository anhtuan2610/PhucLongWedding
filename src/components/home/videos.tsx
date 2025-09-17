"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const videoList = [
  {
    id: 1,
    title: "Đám cưới của đôi 1",
    youtubeId: "RQorrnJIc2Q",
  },
  {
    id: 2,
    title: "Đám cưới của đôi 2",
    youtubeId: "7UoP9ABJXGE",
  },
  {
    id: 3,
    title: "Đám cưới của đôi 3",
    youtubeId: "8SHOKnCEEqs",
  },
  {
    id: 4,
    title: "Đám cưới của đôi 4",
    youtubeId: "XysLGnlSjE0",
  },
];

const Videos = () => {
  const [selectedId, setSelectedId] = useState<number | null>(1);

  const selectedVideo = videoList.find((v) => v.id === selectedId);

  return (
    <section className="space-y-4 my-8 text-center lg:mt-16">
      <h2 className="font-lora text-[38px] text-[#3c634f] font-normal lg:text-[50px] lg:font-medium">
        Video các sự kiện đã tổ chức
      </h2>

      <p className="font-montserrat text-[15px] max-w-[800px] mx-auto">
        Là nhà tổ chức Sự kiện - Cưới hỏi chuyên nghiệp, với phương châm phát
        triển bền vững, Phúc Long đã vinh dự được lựa chọn tổ chức sự kiện cho
        rất nhiều hội nghị quan trọng mang tầm quốc tế
      </p>

      <div className="lg:flex lg:gap-6 space-y-2 lg:space-y-0">
        {selectedVideo && (
          <div className="lg:flex-1 relative aspect-[16/9]">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        )}

        <ul className="lg:w-1/3 border border-gray-100 shadow-md">
          {videoList.map((video) => (
            <li
              key={video.id}
              className={`text-[#D1B483] flex items-center font-montserrat font-medium p-3 gap-2 cursor-pointer ${
                video.id % 2 === 0 ? "bg-[#F6F6F6]" : ""
              }`}
              onClick={() => setSelectedId(video.id)}
            >
              <Play />
              <div>{video.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Videos;
