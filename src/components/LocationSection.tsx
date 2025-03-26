"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface LocationSectionProps {
  title?: string;
  description?: string;
  mapUrl?: string;
  locations?: {
    name: string;
    distance: string;
    direction: string;
  }[];
}

const LocationSection = ({
  title = "Vị Trí Địa Lý",
  description = "Thôn Cẩm Đồng nằm tại xã Điện Phong, thị xã Điện Bàn, tỉnh Quảng Nam. Đây là một vùng quê yên bình với cảnh quan đồng ruộng xanh mát, sông nước hữu tình và những chiếc cầu tre độc đáo bắc qua sông Vĩnh Điện. Khu vực này có đất đai phì nhiêu và nguồn nước dồi dào từ sông ngòi, tạo điều kiện thuận lợi cho nông nghiệp phát triển.",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15335.74413134711!2d108.24000566970276!3d15.909999546992502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420f9c8e1ef1c3%3A0xf1c5e6a3f93b5f4e!2zxJBp4buHbiBQaG9uZywgxJBp4buHbiBCw6BuLCBRdeG6o25nIE5hbSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1652345678901!5m2!1sen!2s",
  locations = [
    {
      name: "Hội An",
      distance: "10km",
      direction: "Đông Nam",
    },
    {
      name: "Đà Nẵng",
      distance: "25km",
      direction: "Bắc",
    },
    {
      name: "Sân bay Đà Nẵng",
      distance: "30km",
      direction: "Bắc",
    },
  ],
}: LocationSectionProps) => {
  return (
    <section id="location" className="py-16 bg-green-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{description}</p>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Khoảng cách đến các điểm du lịch:
              </h3>
              <ul className="space-y-4">
                {locations.map((location, index) => (
                  <li key={index} className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{location.name}:</span>{" "}
                      {location.distance} về phía {location.direction}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Đặc điểm tự nhiên:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Diện tích xã Điện Phong: 11,9 km²</li>
                <li>Dân số: khoảng 10.086 người (1999)</li>
                <li>Mật độ dân số: 848 người/km²</li>
                <li>Địa hình: đồng bằng, có sông Vĩnh Điện chảy qua</li>
                <li>Khí hậu: nhiệt đới gió mùa, mát mẻ</li>
              </ul>
            </div>
          </div>

          <div className="h-full">
            <div className="bg-white p-2 rounded-lg shadow-md h-full">
              <div className="relative h-0 pb-[75%] w-full overflow-hidden rounded-md">
                <iframe
                  src={mapUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ Thôn Cẩm Đồng"
                ></iframe>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded-md text-sm text-gray-700">
                <p className="font-medium">
                  Thôn Cẩm Đồng, xã Điện Phong, thị xã Điện Bàn, tỉnh Quảng Nam
                </p>
                <p className="mt-1">
                  Vùng quê yên bình với cảnh quan đồng ruộng và những chiếc cầu
                  tre độc đáo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
