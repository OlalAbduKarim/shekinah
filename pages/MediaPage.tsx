
import React, { useState } from 'react';
import { MOCK_GALLERY } from '../constants';
import { GalleryImage } from '../types';

const PageHeader = () => (
    <div className="relative h-64 bg-sg-purple flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://picsum.photos/id/106/1200/400" alt="Youth group" className="w-full h-full object-cover"/>
        <div className="relative z-10">
            <h1 className="text-5xl font-serif font-bold">Media Gallery</h1>
            <p className="text-xl mt-2">A glimpse into our church family life.</p>
        </div>
    </div>
);

const ImageModal: React.FC<{ image: GalleryImage | null; onClose: () => void }> = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute -top-2 -right-2 text-white bg-sg-purple rounded-full p-2 z-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <img src={image.src} alt={image.alt} className="rounded-lg max-w-full max-h-full object-contain" />
            </div>
        </div>
    );
};

const MediaPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return (
        <div>
            <PageHeader />
            <section className="py-20 bg-sg-light">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {MOCK_GALLERY.map((image) => (
                            <div key={image.id} className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg" onClick={() => setSelectedImage(image)}>
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                                    <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
    );
};

export default MediaPage;
