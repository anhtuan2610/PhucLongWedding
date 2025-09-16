const Footer = () => {
  return (
    <footer className="bg-[#222] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Địa chỉ */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Địa chỉ</h3>
          <p className="text-gray-300">Ngõ 10, Cao Xanh, Hạ Long, Quảng Ninh</p>
        </div>

        {/* Hotline */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hotline</h3>
          <p className="text-gray-300">0383 44 22 66</p>
        </div>

        {/* Email & Website */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Liên hệ</h3>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:phuclongwedding2024@gmail.com"
              className="text-[#D1B483] hover:underline"
            >
              phuclongwedding2024@gmail.com
            </a>
          </p>
          <p className="text-gray-300">
            Website:{" "}
            <a
              href="https://phuclongwedding.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#D1B483] hover:underline"
            >
              https://phuclongwedding.com/
            </a>
          </p>
        </div>

        {/* Facebook */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kết nối</h3>
          <a
            href="https://www.facebook.com/phuclongwedding?locale=vi_VN"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#D1B483] hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.483v-9.294H9.691v-3.622h3.118V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
            Facebook
          </a>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-8 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        © 2025 Phúc Long. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
