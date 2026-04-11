"use client";

import { useState } from "react";

const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    const accessKey = "c842362f-2ec2-4818-afa0-f18943116907";
    
    const serviceNames: Record<string, string> = {
      trongoi: "Dịch vụ cưới hỏi trọn gói",
      trap: "Tráp ăn hỏi",
      dotrap: "Đỡ tráp",
      trangtri: "Trang trí đám hỏi"
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[Web] Liên hệ mới từ ${name} - Phúc Long Wedding`,
          name: name,
          phone: phone,
          "Dịch vụ quan tâm": serviceNames[service] || service,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setMessage("Gửi liên hệ thành công! Phúc Long sẽ sớm liên hệ cho bạn.");
        (e.target as HTMLFormElement).reset(); // Xóa form sau khi gửi
      } else {
        setIsSuccess(false);
        setMessage("Chưa gửi được: " + (data.message || "Lỗi không xác định"));
      }
    } catch (error: any) {
      setIsSuccess(false);
      setMessage("Có lỗi mạng xảy ra: Vui lòng thử lại sau");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section className="bg-[#F2F2F2] py-10 px-4 space-y-6">
      <p className="font-montserrat text-[#D1B483] text-lg text-center font-medium">
        Hãy để Phúc Long chuẩn bị giúp bạn
      </p>
      <p className="font-montserrat text-[15px] text-center">
        Phúc Long cung cấp dịch vụ cưới hỏi trọn gói, tráp ăn hỏi, đỡ tráp, xe
        xích lô, trang trí đám hỏi. Hãy để Phúc Long tư vấn giúp bạn
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          name="name"
          type="text"
          required
          placeholder="Tên của bạn *"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#D1B483] focus:ring-2 focus:ring-[#D1B483] outline-none transition"
        />

        <input
          name="phone"
          type="tel"
          required
          placeholder="Số điện thoại của bạn *"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#D1B483] focus:ring-2 focus:ring-[#D1B483] outline-none transition"
        />

        <select
          name="service"
          defaultValue=""
          required
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
        
        {message && (
           <p className={`font-medium text-center text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
             {message}
           </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-[#3D6350] px-6 py-3 font-montserrat text-white font-semibold hover:bg-[#c3a36d] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#D1B483] focus:ring-offset-2 transition"
        >
          {isPending ? "Đang gửi..." : "Gửi liên hệ"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
