const ContactForm = () => {
  return (
    <section className="bg-[#F2F2F2] py-10 px-4 space-y-6">
      <p className="font-montserrat text-[#D1B483] text-lg text-center font-medium">
        Hãy để Phúc Long chuẩn bị giúp bạn
      </p>
      <p className="font-montserrat text-[15px] text-center">
        Phúc Long cung cấp dịch vụ cưới hỏi trọn gói, tráp ăn hỏi, đỡ tráp, xe
        xích lô, trang trí đám hỏi. Hãy để Phúc Long tư vấn giúp bạn
      </p>

      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Tên của bạn *"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#D1B483] focus:ring-2 focus:ring-[#D1B483] outline-none transition"
        />

        <input
          type="tel"
          placeholder="Số điện thoại của bạn *"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#D1B483] focus:ring-2 focus:ring-[#D1B483] outline-none transition"
        />

        <select
          defaultValue=""
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:border-[#D1B483] focus:ring-2 focus:ring-[#D1B483] outline-none transition"
        >
          <option value="" disabled>
            Vấn đề bạn quan tâm
          </option>
          <option value="trongoi">Dịch vụ cưới hỏi trọn gói</option>
          <option value="trap">Tráp ăn hỏi</option>
          <option value="dotrap">Đỡ tráp</option>
          <option value="trangtri">Trang trí đám hỏi</option>
        </select>
        <button
          type="submit"
          className="w-full rounded-lg bg-[#3D6350] px-6 py-3 font-montserrat text-white font-semibold hover:bg-[#c3a36d] focus:outline-none focus:ring-2 focus:ring-[#D1B483] focus:ring-offset-2 transition"
        >
          Gửi liên hệ
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
