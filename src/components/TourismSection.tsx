"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bike, Utensils, MapPin } from "lucide-react";

interface TourismActivityProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  altText: string;
}

const TourismActivity = ({
  title = "Activity Title",
  description = "Description of the tourism activity available in Thôn Cẩm Đồng village.",
  icon = <Bike className="h-6 w-6" />,
  imageSrc = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  altText = "Tourism activity image",
}: TourismActivityProps) => {
  return (
    <Card className="overflow-hidden bg-white h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-full bg-green-100 text-green-700">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-2">
        <Button
          variant="outline"
          className="w-full border-green-600 text-green-700 hover:bg-green-50"
        >
          Tìm hiểu thêm
        </Button>
      </CardFooter>
    </Card>
  );
};

interface TourismSectionProps {
  title?: string;
  subtitle?: string;
  activities?: TourismActivityProps[];
}

const TourismSection = ({
  title = "Khám Phá Hoạt Động Du Lịch",
  subtitle = "Trải nghiệm cuộc sống nông thôn yên bình và vẻ đẹp tự nhiên của Thôn Cẩm Đồng thông qua các hoạt động du lịch đặc sắc.",
  activities = [
    {
      title: "Tham Quan Đồng Quê",
      description:
        "Khám phá vẻ đẹp của cánh đồng lúa xanh mướt, tìm hiểu về canh tác nông nghiệp truyền thống và tham gia các hoạt động nông nghiệp cùng người dân địa phương.",
      icon: <Bike className="h-6 w-6" />,
      imageSrc:
        "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&q=80",
      altText: "Rice fields in Thôn Cẩm Đồng",
    },
    {
      title: "Trải Nghiệm Cầu Tre",
      description:
        "Đi bộ trên những chiếc cầu tre độc đáo bắc qua sông Vĩnh Điện, cảm nhận sự mộc mạc và khéo léo trong lối kiến trúc truyền thống của người dân địa phương.",
      icon: <MapPin className="h-6 w-6" />,
      imageSrc:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
      altText: "Bamboo bridge experience",
    },
    {
      title: "Ẩm Thực Địa Phương",
      description:
        "Thưởng thức các món ăn đặc sản của vùng quê Quảng Nam được chế biến từ nguyên liệu tươi ngon do chính người dân địa phương trồng trọt và chăn nuôi.",
      icon: <Utensils className="h-6 w-6" />,
      imageSrc:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
      altText: "Local cuisine of Quang Nam",
    },
  ],
}: TourismSectionProps) => {
  return (
    <section id="tourism" className="py-16 px-4 md:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <TourismActivity key={index} {...activity} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg">
            Đặt Lịch Tham Quan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
