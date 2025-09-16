import Image from "next/image";
import { ClipboardClock, Eye } from "lucide-react";

const blogList = [
  {
    id: 1,
    image: "/images/home/blog1.png",
    title: "Cô dâu về nhà chồng, chuẩn bị những gì theo đúng phong tục",
    date: "26/10/2025",
    totalViews: "99.999",
  },
  {
    id: 2,
    image: "/images/home/blog1.png",
    title: "Cô dâu về nhà chồng, chuẩn bị những gì theo đúng phong tục",
    date: "26/10/2025",
    totalViews: "99.999",
  },
  {
    id: 3,
    image: "/images/home/blog1.png",
    title: "Cô dâu về nhà chồng, chuẩn bị những gì theo đúng phong tục",
    date: "26/10/2025",
    totalViews: "99.999",
  },
];

const Blogs = () => {
  return (
    <div className="px-2 flex justify-center mb-8 lg:mt-16">
      <div className="max-w-[1180px] mx-auto">
        <section className="space-y-6 my-8">
          <h2 className="font-lora text-[38px] text-[#3c634f] font-normal text-center lg:text-[50px] lg:font-medium">
            Cẩm nang cưới
          </h2>
          <div className="space-y-4">
            {blogList.map((blog) => (
              <div key={blog.id} className="flex gap-4 p-2 items-start">
                <div className="relative w-[150px] sm:w-[200px] flex-shrink-0 aspect-[133/78] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={`Image blog ${blog.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <p className="font-montserrat text-[#333333] font-normal line-clamp-2">
                    {blog.title}
                  </p>
                  <div className="flex justify-between items-center font-montserrat text-[13px] text-[#808080]">
                    <div className="flex items-center gap-1">
                      <ClipboardClock size={14} />
                      <p>{blog.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <p>{blog.totalViews} Lượt xem</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
