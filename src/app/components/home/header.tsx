import { Phone, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const socialIcons = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/hanh.hang.75?locale=vi_VN",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/_hoon.hank/?fbclid=IwY2xjawM1xR1leHRuA2FlbQIxMABicmlkETFyMnQ4a3Y3R1FvbU9VUVY4AR66ovOgZWDihI0Fsav6qaXdNUjhAWXJkaLihO0cdqofppr7mxk5981HRt48UA_aem_-xGcIZ6YGQ7uc6afQALQjQ#",
  },
  {
    name: "Zalo",
    icon: "/images/home/zalo-icon.png", // icon dạng ảnh
    link: "https://zalo.me/0383442266",
  },
];

const Header = () => {
  return (
    <div className="px-2 py-4 max-w-[1180px] mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Phone />
        <p className="font-bold text-[15px] font-montserrat lg:text-lg">
          0383 44 22 66
        </p>
      </div>

      <div className="flex items-center gap-2">
        {socialIcons.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            {typeof item.icon === "string" ? (
              <Image src={item.icon} alt={item.name} width={22} height={22} />
            ) : (
              <item.icon size={22} />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
