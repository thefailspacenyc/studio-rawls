import { useState, useEffect, useCallback } from "react";

export default function MosaicGallery(props) {

    let images = props.data.Gallery
    console.log(images)
    
    const [columns, setColumns] = useState(2);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const isOpen = lightboxIndex !== null;

    const openLightbox = (i) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);

    const navigate = useCallback(
        (dir) => {
        setLightboxIndex((prev) => (prev + dir + images.length) % images.length);
        },
        []
    );
     

   

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, navigate]);

  return (
    <div>
     
      {/* Mosaic gallery */}
      <div
        style={{
          columns,
          gap: 10,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={img.alt}
            loading="lazy"
            onClick={() => openLightbox(i)}
            style={{
              width: "100%",
              marginBottom: 10,
              display: "block",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 20,
              right: 24,
              fontSize: 28,
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              opacity: 0.8,
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            style={{
              position: "fixed",
              top: "50%",
              left: 16,
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              fontSize: 22,
              padding: "12px 16px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            ←
          </button>

          {/* Image */}
          <img
            src={images[lightboxIndex].url}
            alt={images[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
            }}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            style={{
              position: "fixed",
              top: "50%",
              right: 16,
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              fontSize: 22,
              padding: "12px 16px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            →
          </button>

          {/* Counter */}
          <div
            style={{
              position: "fixed",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.6)",
              fontSize: 13,
            }}
          >
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
