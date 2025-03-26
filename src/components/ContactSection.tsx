"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  openingHours?: string;
  mapUrl?: string;
}

const ContactSection = ({
  title = "Liên Hệ Với Chúng Tôi",
  subtitle = "Hãy liên hệ với chúng tôi để biết thêm thông tin hoặc đặt lịch tham quan Thôn Cẩm Đồng.",
  address = "Thôn Cẩm Đồng, xã Điện Phong, thị xã Điện Bàn, tỉnh Quảng Nam",
  phone = "+84 123 456 789",
  email = "info@camdongtourism.vn",
  openingHours = "Mở cửa hàng ngày: 08:00 - 17:00",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15335.74413134711!2d108.24000566970276!3d15.909999546992502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420f9c8e1ef1c3%3A0xf1c5e6a3f93b5f4e!2zxJBp4buHbiBQaG9uZywgxJBp4buHbiBCw6BuLCBRdeG6o25nIE5hbSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1652345678901!5m2!1sen!2s",
}: ContactSectionProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        type: "error",
        message: "Vui lòng điền đầy đủ thông tin bắt buộc.",
      });
      return;
    }

    // Here you would typically send the form data to a server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      type: "success",
      message:
        "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
    });

    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">
              Gửi Tin Nhắn
            </h3>

            {formStatus.type && (
              <div
                className={cn(
                  "p-4 mb-6 rounded-md",
                  formStatus.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700",
                )}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Họ và tên <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên của bạn"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ email của bạn"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  Số điện thoại
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại của bạn"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  Tin nhắn <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Nhập nội dung tin nhắn của bạn"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition-colors duration-300"
              >
                Gửi Tin Nhắn
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col h-full">
            <div className="bg-green-50 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-green-700 mb-6">
                Thông Tin Liên Hệ
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Địa chỉ:</h4>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Điện thoại:
                    </h4>
                    <p className="text-gray-600">
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="hover:text-green-600 transition-colors"
                      >
                        {phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email:</h4>
                    <p className="text-gray-600">
                      <a
                        href={`mailto:${email}`}
                        className="hover:text-green-600 transition-colors"
                      >
                        {email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Giờ mở cửa:
                    </h4>
                    <p className="text-gray-600">{openingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src={mapUrl}
                className="w-full h-full min-h-[300px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Thôn Cẩm Đồng"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
