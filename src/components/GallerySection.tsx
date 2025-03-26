"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GallerySectionProps {
  images?: {
    id: string;
    src: string;
    alt: string;
    category: "bamboo-bridge" | "rice-fields" | "local-life";
  }[];
}

const GallerySection = ({
  images = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80",
      alt: "Bamboo bridge crossing a river",
      category: "bamboo-bridge",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1464638681273-0962e9b53566?w=800&q=80",
      alt: "Traditional bamboo bridge",
      category: "bamboo-bridge",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      alt: "Rice fields in the morning",
      category: "rice-fields",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      alt: "Green rice terraces",
      category: "rice-fields",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=80",
      alt: "Local farmer working in the field",
      category: "local-life",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
      alt: "Village market scene",
      category: "local-life",
    },
  ],
}: GallerySectionProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredImages = filter
    ? images.filter((image) => image.category === filter)
    : images;

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length,
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 px-4 md:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-amber-900">
          Khám Phá Vẻ Đẹp Thôn Cẩm Đồng
        </h2>
        <p className="text-center text-amber-800 mb-8 max-w-3xl mx-auto">
          Những hình ảnh sống động về cầu tre, đồng ruộng xanh mát và cuộc sống
          thường ngày của người dân địa phương.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            className="bg-amber-700 hover:bg-amber-800 text-white"
          >
            Tất cả
          </Button>
          <Button
            variant={filter === "bamboo-bridge" ? "default" : "outline"}
            onClick={() => setFilter("bamboo-bridge")}
            className={
              filter === "bamboo-bridge"
                ? "bg-amber-700 hover:bg-amber-800 text-white"
                : "border-amber-700 text-amber-700 hover:bg-amber-100"
            }
          >
            Cầu Tre
          </Button>
          <Button
            variant={filter === "rice-fields" ? "default" : "outline"}
            onClick={() => setFilter("rice-fields")}
            className={
              filter === "rice-fields"
                ? "bg-amber-700 hover:bg-amber-800 text-white"
                : "border-amber-700 text-amber-700 hover:bg-amber-100"
            }
          >
            Đồng Ruộng
          </Button>
          <Button
            variant={filter === "local-life" ? "default" : "outline"}
            onClick={() => setFilter("local-life")}
            className={
              filter === "local-life"
                ? "bg-amber-700 hover:bg-amber-800 text-white"
                : "border-amber-700 text-amber-700 hover:bg-amber-100"
            }
          >
            Đời Sống
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white w-full bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={selectedImage !== null}
          onOpenChange={(open) => !open && handleClose()}
        >
          <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 bg-black/95 border-none">
            <div className="relative h-[80vh] w-full">
              {selectedImage !== null && (
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              )}
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 rounded-full"
                  onClick={handleClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
            {selectedImage !== null && (
              <div className="p-4 bg-black text-white">
                <p className="text-lg">{filteredImages[selectedImage].alt}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
