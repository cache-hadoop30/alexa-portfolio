import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Screenshot {
  image: string;
  title: string;
  description: string;
}

interface ProjectCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  screenshots: Screenshot[];
}

const ProjectCarouselModal = ({ isOpen, onClose, projectTitle, screenshots }: ProjectCarouselModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-none w-full h-full md:max-w-5xl md:h-auto md:max-h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-accent/20">
        <div className="relative flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-accent/10">
            <h2 className="text-2xl font-display font-semibold text-accent">
              {projectTitle}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-accent/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col"
              >
                {/* Screenshot */}
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="relative max-w-full max-h-full">
                    <img
                      src={screenshots[currentSlide]?.image}
                      alt={screenshots[currentSlide]?.title}
                      className="w-full h-full object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                </div>

                {/* Caption */}
                <div className="p-6 bg-glass-card border-t border-accent/10">
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {screenshots[currentSlide]?.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {screenshots[currentSlide]?.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {screenshots.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm border border-accent/20 hover-scale z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm border border-accent/20 hover-scale z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {screenshots.length > 1 && (
            <div className="flex justify-center gap-2 p-4">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-accent scale-110"
                      : "bg-accent/30 hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCarouselModal;