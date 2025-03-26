"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatarSrc?: string;
}

const Testimonial = ({
  quote,
  author,
  role = "",
  avatarSrc,
}: TestimonialProps) => {
  return (
    <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-green-600">
          <Quote className="h-8 w-8" />
        </div>
        <p className="text-gray-700 mb-6 flex-grow italic">{quote}</p>
        <div className="flex items-center mt-auto">
          {avatarSrc ? (
            <div className="mr-4 h-12 w-12 rounded-full overflow-hidden">
              <img
                src={avatarSrc}
                alt={`Avatar of ${author}`}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
          <div>
            <p className="font-semibold text-gray-800">{author}</p>
            {role && <p className="text-sm text-gray-500">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
}

const TestimonialSection = ({
  title = "Trải Nghiệm Của Du Khách",
  subtitle = "Những chia sẻ từ du khách đã đến thăm và trải nghiệm vẻ đẹp của Thôn Cẩm Đồng.",
  testimonials = [
    {
      quote:
        "Thôn Cẩm Đồng là một trải nghiệm tuyệt vời cho chuyến du lịch của chúng tôi tại Quảng Nam. Cảnh quan thiên nhiên tuyệt đẹp và người dân địa phương vô cùng thân thiện. Đặc biệt là trải nghiệm đi trên cầu tre và thưởng thức ẩm thực địa phương.",
      author: "Nguyễn Văn An",
      role: "Du khách từ Hà Nội",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenVanAn",
    },
    {
      quote:
        "Tôi đã có cơ hội tham gia vào hoạt động canh tác nông nghiệp cùng người dân địa phương. Đó là một trải nghiệm đáng nhớ giúp tôi hiểu hơn về cuộc sống nông thôn Việt Nam và những giá trị văn hóa truyền thống.",
      author: "Trần Thị Bình",
      role: "Du khách từ TP.HCM",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=TranThiBinh",
    },
    {
      quote:
        "Những chiếc cầu tre tại Thôn Cẩm Đồng thực sự là một kiệt tác của sự khéo léo và trí tuệ dân gian. Tôi đã có những bức ảnh tuyệt đẹp và kỷ niệm khó quên tại nơi đây. Chắc chắn sẽ quay lại vào mùa lúa chín.",
      author: "Lê Minh Cường",
      role: "Nhiếp ảnh gia",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=LeMinhCuong",
    },
  ],
}: TestimonialSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
