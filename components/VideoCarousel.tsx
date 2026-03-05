import React, { useEffect, useRef, useState } from "react";

const VideoCarousel = () => {
  const base = "";

  const videos = [
    { src: `${base}videos/Recepcao-site-1.webm`, title: "Vídeo Exemplo 1" },
    { src: `${base}videos/Recepcao-site-2.webm`, title: "Vídeo Exemplo 2" },
    { src: `${base}videos/Recepcao-site-3.webm`, title: "Vídeo Exemplo 3" },
    { src: `${base}videos/Recepcao-site-5.webm`, title: "Vídeo Exemplo 4" },
    { src: `${base}videos/Recepcao-site-6.webm`, title: "Vídeo Exemplo 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const getItemsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 480) return 2;
    return 1;
  };

  const updateCarousel = () => {
    const itemsPerView = getItemsPerView();
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;

    const items = Array.from(track.children) as HTMLElement[];
    items.forEach((item) => {
      item.style.width = `${100 / itemsPerView}%`;
    });

    const itemWidth = (track.children[0] as HTMLElement).getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  useEffect(() => {
    updateCarousel();
    const handleResize = () => updateCarousel();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const next = () => {
    const itemsPerView = getItemsPerView();
    if (currentIndex < videos.length - itemsPerView) setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div id="video-carousel" className="max-w-6xl w-full mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
      <div className="relative w-full group">

        {/* Botão Anterior */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 bg-white border border-gray-200 text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all disabled:opacity-30"
          disabled={currentIndex === 0}
          aria-label="Vídeo anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Trilha de vídeos */}
        <div className="overflow-hidden w-full rounded-xl">
          <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out">
            {videos.map((video, idx) => (
              <div key={idx} className="flex-none p-2">
                <div className="bg-black rounded-xl overflow-hidden shadow-md aspect-[9/16] relative">
                  <video
                    className="w-full h-full object-cover pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate noremoteplayback"
                  >
                    <source src={video.src} type="video/webm" />
                  </video>

                  {/* Overlay pega clique e impede interação */}
                  <div className="absolute inset-0 z-10 cursor-default" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 bg-white border border-gray-200 text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all disabled:opacity-30"
          disabled={currentIndex >= videos.length - getItemsPerView()}
          aria-label="Próximo vídeo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default VideoCarousel;