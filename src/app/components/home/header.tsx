import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa"; // Tiktok cũng có trong react-icons/fa
import { SiZalo } from "react-icons/si"; // Zalo có trong Simple Icons
import Image from "next/image";
import { Phone } from "lucide-react";

const socialIcons = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/phuclongwedding?locale=vi_VN",
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@phuclongwedding",
  },
  {
    name: "Zalo",
    icon: SiZalo, // icon dạng ảnh
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
