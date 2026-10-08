import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import ImageCarousel from "./ImageCarrousel";

interface ProjectImageGalleryProps {
  images: string[];
  title: string;
}

function ImageGalleryDialog({ images, title, initialIndex, onClose }: ProjectImageGalleryProps & {
  initialIndex: number;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={`${title} image gallery`}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-4 text-white backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm sm:p-8"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="pointer-events-none flex h-full items-center justify-center">
        <div className="pointer-events-auto relative w-full max-w-6xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-lg font-medium sm:text-xl">{title}</h2>
            <button
              type="button"
              autoFocus
              onClick={onClose}
              aria-label="Close image gallery"
              className="cursor-pointer rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ImageCarousel images={images} initialIndex={initialIndex} expanded />
        </div>
      </div>
    </dialog>,
    document.body,
  );
}

export default function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <>
      <ImageCarousel images={images} onImageClick={setActiveImage} />
      {activeImage !== null && (
        <ImageGalleryDialog
          images={images}
          title={title}
          initialIndex={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}
