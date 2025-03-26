"use client";

import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterProps {
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
  };
}

const Footer = ({
  contactEmail = "info@camdongtourism.vn",
  contactPhone = "+84 123 456 789",
  contactAddress = "Thôn Cẩm Đồng, xã Điện Phong, thị xã Điện Bàn, tỉnh Quảng Nam",
  socialLinks = {
    facebook: "https://facebook.com/camdongtourism",
    instagram: "https://instagram.com/camdongtourism",
  },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{contactAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                  className="hover:underline"
                >
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href={`mailto:${contactEmail}`} className="hover:underline">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Khám Phá</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="hover:underline">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:underline">
                  Vị Trí
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:underline">
                  Hình Ảnh
                </Link>
              </li>
              <li>
                <Link href="#tourism" className="hover:underline">
                  Du Lịch
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kết Nối</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>

            <p className="text-sm mt-4">
              Đăng ký nhận thông tin mới nhất về Thôn Cẩm Đồng và các hoạt động
              du lịch.
            </p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="px-3 py-2 text-black rounded-l-md focus:outline-none w-full max-w-xs"
              />
              <button className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-r-md transition-colors">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Thôn Cẩm Đồng. Tất cả quyền được bảo lưu.</p>
          <p className="mt-2">
            Thiết kế và phát triển bởi{" "}
            <span className="font-medium">Cẩm Đồng Tourism</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
