import React, { useEffect, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { MdClose } from "react-icons/md";

export interface ImagesProps {
    src: string;
    title: string;
    description: string;
}

export const ProjectImagesCarousel: React.FC<{ images: ImagesProps[] }> = ({ images }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollAmount = 150;

    const goToNextSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const goToPreviousSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const goToNextImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const goToPreviousImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isModalOpen) {
                if (event.key === 'ArrowRight') {
                    goToNextImage();
                } else if (event.key === 'ArrowLeft') {
                    goToPreviousImage();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, goToNextImage, goToPreviousImage]);

    return (
        <div className="relative m-auto max-w-3xl pr-0">
            <div ref={carouselRef} className="w-[85%] m-auto  flex items-center justify-start max-h-fit overflow-x-hidden scrollbar-hide">
                {images.map((image: ImagesProps, index: number) => (
                    <div key={index} className="flex-none m-1 w-1/6 transition-transform transform scale-100 hover:scale-105 cursor-pointer"
                        onClick={() => openModal(index)}>
                        <img
                            src={image.src}
                            alt={`${image.description}`}
                            className="w-20 h-10 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
            <button onClick={goToPreviousSlide} className="absolute top-1/2 transform -translate-y-1/2 left-0 brightness-200
        p-2 text-4xl text-white hover:text-gray-300 active:text-3xl">
                <SlArrowLeft color="#3b27535b" />
            </button>
            <button onClick={goToNextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 brightness-200
        text-4xl text-white hover:text-gray-300 active:text-3xl">
                <SlArrowRight color="#3b27535b" />
            </button>

            {isModalOpen && selectedImageIndex !== null && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closeModal}>
                    <div className="bg-BG p-4 rounded-lg relative max-h-[150vh] overflow-y-hidden top-20 " onClick={e => e.stopPropagation()}>
                        <div className="grid justify-center my-2 brightness-200">
                            <h1 className="m-auto text-T1 brightness-150 n4:text-2xl n7:text-xl">{images[selectedImageIndex].title}</h1>
                            <p className="PP brightness-75">{images[selectedImageIndex].description}</p>
                        </div>
                        <img src={images[selectedImageIndex].src} alt="Selected" className="w- m-auto h-auto" />

                        <button onClick={goToPreviousImage} className="text-T2 absolute top-1/2 left-5 text-2xl">
                            <SlArrowLeft color="#ffffff85" />
                        </button>
                        <button onClick={goToNextImage} className="text-T2 absolute top-1/2 right-5 text-2xl">
                            <SlArrowRight color="#ffffff85" />
                        </button>
                        <button onClick={closeModal} className="text-T2 absolute top-8  right-5 text-2xl">
                            <MdClose color="#ffffff85" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};