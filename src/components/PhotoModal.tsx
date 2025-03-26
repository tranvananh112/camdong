"use client";

import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface PhotoModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  photos?: string[];
  initialPhotoIndex?: number;
  photoDescriptions?: string[];
}

const PhotoModal = ({
  isOpen = false,
  onClose = () => {},
  photos = [
    "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1200&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
  ],
  initialPhotoIndex = 0,
  photoDescriptions = [
    "Bamboo bridge crossing the river in Thôn Cẩm Đồng",
    "Scenic rice fields during sunset",
    "Local villagers working in the fields",
    "Beautiful countryside landscape",
    "River view with traditional fishing boats",
  ],
}: PhotoModalProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(initialPhotoIndex);

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-5xl p-0 bg-black overflow-hidden"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="relative w-full h-full bg-black flex flex-col">
          {/* Close button */}
          <Button
            variant="ghost"
            className="absolute top-2 right-2 z-50 text-white hover:bg-black/50 rounded-full p-2"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Main image container */}
          <div className="flex-1 flex items-center justify-center p-4">
            <img
              src={photos[currentPhotoIndex]}
              alt={
                photoDescriptions[currentPhotoIndex] ||
                `Photo ${currentPhotoIndex + 1}`
              }
              className="max-h-[70vh] max-w-full object-contain"
            />
          </div>

          {/* Navigation and description */}
          <div className="bg-black/90 p-4 text-white">
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 rounded-full p-2"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <p className="text-center text-sm md:text-base">
                {photoDescriptions[currentPhotoIndex] ||
                  `Photo ${currentPhotoIndex + 1}`}
              </p>

              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 rounded-full p-2"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="mt-2 text-center text-sm text-gray-400">
              {currentPhotoIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoModal;
