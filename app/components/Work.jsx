import { useState } from "react";
import Image from "next/image";
import React from "react";
import { workData, assets } from "@/assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Work = ({ isDarkMode }) => {
  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // handlers
  const openModal = (images, index = 0) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex(
      (currentIndex - 1 + currentImages.length) % currentImages.length
    );

  const nextImage = () =>
    setCurrentIndex((currentIndex + 1) % currentImages.length);

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">My Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        A selection of my creative work and technical expertise.
      </p>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workData.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-5 bg-white dark:bg-darkHover/40 shadow-sm"
          >
            {/* Swiper Carousel with Navigation */}
            <div className="relative group">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  nextEl: `.next-btn-${index}`,
                  prevEl: `.prev-btn-${index}`,
                }}
                className="rounded-md overflow-hidden"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide
                    key={i}
                    onClick={() => openModal(project.images, i)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={img}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-md object-cover h-64 w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Outside Nav Buttons - show only on hover */}
              <button
                className={`prev-btn-${index} absolute top-1/2 left-2 -translate-y-1/2 
                            bg-black/50 text-white p-2 rounded-full z-10 
                            opacity-0 group-hover:opacity-100 transition`}
              >
                ‹
              </button>
              <button
                className={`next-btn-${index} absolute top-1/2 right-2 -translate-y-1/2 
                            bg-black/50 text-white p-2 rounded-full z-10 
                            opacity-0 group-hover:opacity-100 transition`}
              >
                ›
              </button>
            </div>

            {/* Project Details */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-white/80 mt-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-5">
                {project.links?.figma && (
                  <a
                    href={project.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-md bg-pink-500 text-white text-sm hover:bg-pink-600"
                  >
                    View on Figma
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-md bg-purple-500 text-white text-sm hover:bg-purple-600"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              {/* If links is an array (optional extra support) */}
              {Array.isArray(project.links) && project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`min-w-[120px] text-center px-5 py-2 rounded-md 
                                  text-white text-sm font-medium shadow-sm transition ${link.color}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <Image
            src={currentImages[currentIndex]}
            alt="Full view"
            width={1000}
            height={700}
            className="max-h-[85vh] object-contain rounded-md"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
