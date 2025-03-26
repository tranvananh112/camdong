import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import TourismSection from "@/components/TourismSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="pt-0">
        <HeroSection
          title="Thôn Cẩm Đồng"
          slogan="Vẻ đẹp mộc mạc của miền quê Quảng Nam"
          ctaText="Khám phá thêm"
          backgroundImage="/cd.webp"
        />
      </section>

      {/* Location Section */}
      <section id="location-section">
        <LocationSection
          title="Vị Trí Địa Lý"
          description="Thôn Cẩm Đồng nằm tại xã Điện Phong, thị xã Điện Bàn, tỉnh Quảng Nam. Đây là một vùng quê yên bình với cảnh quan đồng ruộng xanh mát, sông nước hữu tình và những chiếc cầu tre độc đáo bắc qua sông Vĩnh Điện. Khu vực này có đất đai phì nhiêu và nguồn nước dồi dào từ sông ngòi, tạo điều kiện thuận lợi cho nông nghiệp phát triển."
          locations={[
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
          ]}
        />
      </section>

      {/* Gallery Section */}
      <section id="gallery-section">
        <GallerySection
          images={[
            {
              id: "1",
              src: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80",
              alt: "Cầu tre bắc qua sông Vĩnh Điện",
              category: "bamboo-bridge",
            },
            {
              id: "2",
              src: "https://images.unsplash.com/photo-1464638681273-0962e9b53566?w=800&q=80",
              alt: "Cầu tre truyền thống của làng quê",
              category: "bamboo-bridge",
            },
            {
              id: "3",
              src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
              alt: "Cánh đồng lúa buổi sáng sớm",
              category: "rice-fields",
            },
            {
              id: "4",
              src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
              alt: "Ruộng bậc thang xanh mướt",
              category: "rice-fields",
            },
            {
              id: "5",
              src: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=80",
              alt: "Người nông dân làm việc trên đồng",
              category: "local-life",
            },
            {
              id: "6",
              src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
              alt: "Cảnh chợ quê làng Cẩm Đồng",
              category: "local-life",
            },
          ]}
        />
      </section>

      {/* Tourism Section */}
      <section id="tourism-section">
        <TourismSection
          title="Khám Phá Hoạt Động Du Lịch"
          subtitle="Trải nghiệm cuộc sống nông thôn yên bình và vẻ đẹp tự nhiên của Thôn Cẩm Đồng thông qua các hoạt động du lịch đặc sắc."
          activities={[
            {
              title: "Tham Quan Đồng Quê",
              description:
                "Khám phá vẻ đẹp của cánh đồng lúa xanh mướt, tìm hiểu về canh tác nông nghiệp truyền thống và tham gia các hoạt động nông nghiệp cùng người dân địa phương.",
              icon: null, // Will use default Bike icon
              imageSrc:
                "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&q=80",
              altText: "Cánh đồng lúa Thôn Cẩm Đồng",
            },
            {
              title: "Trải Nghiệm Cầu Tre",
              description:
                "Đi bộ trên những chiếc cầu tre độc đáo bắc qua sông Vĩnh Điện, cảm nhận sự mộc mạc và khéo léo trong lối kiến trúc truyền thống của người dân địa phương.",
              icon: null, // Will use default MapPin icon
              imageSrc:
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
              altText: "Trải nghiệm đi cầu tre",
            },
            {
              title: "Ẩm Thực Địa Phương",
              description:
                "Thưởng thức các món ăn đặc sản của vùng quê Quảng Nam được chế biến từ nguyên liệu tươi ngon do chính người dân địa phương trồng trọt và chăn nuôi.",
              icon: null, // Will use default Utensils icon
              imageSrc:
                "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
              altText: "Ẩm thực đặc sản Quảng Nam",
            },
          ]}
        />
      </section>

      {/* Testimonial Section */}
      <section id="testimonial-section">
        <TestimonialSection />
      </section>

      {/* Contact Section */}
      <section id="contact-section">
        <ContactSection />
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Footer */}
      <Footer
        contactEmail="info@camdongtourism.vn"
        contactPhone="+84 123 456 789"
        contactAddress="Thôn Cẩm Đồng, xã Điện Phong, thị xã Điện Bàn, tỉnh Quảng Nam"
        socialLinks={{
          facebook: "https://facebook.com/camdongtourism",
          instagram: "https://instagram.com/camdongtourism",
        }}
      />
    </main>
  );
}
