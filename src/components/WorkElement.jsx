import { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { FiExternalLink, FiMaximize2, FiMinimize2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const gallerySliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: false,
  accessibility: true,
};

const WorkElement = ({
  img,
  alt,
  gallery,
  name,
  problem,
  solution,
  tools,
  link,
  code,
  results,
}) => {
  const hasGallery = Array.isArray(gallery) && gallery.length > 0;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const lightboxItems = useMemo(() => {
    if (hasGallery && gallery.length) return gallery;
    if (img) return [{ src: img, alt: alt || name || 'Project screenshot' }];
    return [];
  }, [hasGallery, gallery, img, alt, name]);

  const openLightbox = useCallback((index) => {
    if (lightboxItems.length === 0) return;
    setLightboxIndex(Math.max(0, Math.min(index, lightboxItems.length - 1)));
  }, [lightboxItems.length]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || lightboxItems.length <= 1) return i;
      return i > 0 ? i - 1 : lightboxItems.length - 1;
    });
  }, [lightboxItems.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || lightboxItems.length <= 1) return i;
      return i < lightboxItems.length - 1 ? i + 1 : 0;
    });
  }, [lightboxItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
        return;
      }
      if (lightboxItems.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, lightboxItems.length, closeLightbox, goPrev, goNext]);

  const currentItem =
    lightboxIndex !== null && lightboxItems[lightboxIndex]
      ? lightboxItems[lightboxIndex]
      : null;

  const lightboxPortal =
    currentItem &&
    createPortal(
      <div
        className='fixed inset-0 z-[200] flex flex-col'
        role='dialog'
        aria-modal='true'
        aria-label={`${name} — full size image`}>
        <div
          className='absolute inset-0 bg-black/95'
          onClick={closeLightbox}
          aria-hidden='true'
        />
        <div className='relative z-10 flex flex-col h-full min-h-0 pointer-events-none'>
          <div className='flex items-center justify-between gap-3 px-4 py-3 shrink-0 pointer-events-auto border-b border-white/10 bg-black/60 backdrop-blur-sm'>
            <p className='text-sm text-theme-white/80 truncate'>
              <span className='font-semibold text-theme-white'>{name}</span>
              {lightboxItems.length > 1 && (
                <span className='text-theme-white/50 ml-2'>
                  {lightboxIndex + 1} / {lightboxItems.length}
                </span>
              )}
            </p>
            <button
              type='button'
              onClick={closeLightbox}
              className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-theme-white text-sm font-medium border border-white/15 transition-colors shrink-0'
              aria-label='Minimize and return to project card'>
              <FiMinimize2 size={18} aria-hidden />
              Minimize
            </button>
          </div>

          <div className='flex-1 flex items-center justify-center min-h-0 p-4 md:p-8 pointer-events-auto relative'>
            {lightboxItems.length > 1 && (
              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className='absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-accent flex items-center justify-center transition-colors'
                aria-label='Previous image'>
                <FiChevronLeft size={22} />
              </button>
            )}
            {lightboxItems.length > 1 && (
              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className='absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-accent flex items-center justify-center transition-colors'
                aria-label='Next image'>
                <FiChevronRight size={22} />
              </button>
            )}
            <img
              src={currentItem.src}
              alt={currentItem.alt || `${name} full size`}
              className='max-w-full max-h-[calc(100vh-7rem)] w-auto h-auto object-contain shadow-2xl rounded-sm select-none'
              draggable={false}
            />
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <div className='bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden mb-5 hover:border-accent/30 duration-300 group'>
      {lightboxPortal}

      <div className='flex flex-col md:flex-row'>
        {/* Image(s) */}
        <div className='md:w-[42%] overflow-hidden flex-shrink-0'>
          {hasGallery ? (
            <div className='project-gallery px-1 pb-10 pt-2 md:px-2 md:pb-10'>
              <Slider {...gallerySliderSettings}>
                {gallery.map((item, i) => (
                  <div key={`${name}-shot-${i}`} className='px-1 outline-none'>
                    <div className='relative overflow-hidden rounded-lg border border-white/10 bg-black/20 aspect-[4/3]'>
                      <button
                        type='button'
                        onClick={() => openLightbox(i)}
                        className='absolute inset-0 z-[1] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset'
                        aria-label={`View ${item.alt || 'screenshot ' + (i + 1)} full screen`}>
                        <span className='sr-only'>View full screen</span>
                      </button>
                      <img
                        src={item.src}
                        alt={item.alt || `${name} screenshot ${i + 1}`}
                        className='w-full h-full object-cover object-top pointer-events-none'
                      />
                      <div className='absolute bottom-2 right-2 z-[2] pointer-events-none flex gap-2'>
                        <span className='pointer-events-auto'>
                          <button
                            type='button'
                            onClick={(e) => {
                              e.stopPropagation();
                              openLightbox(i);
                            }}
                            className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-black/75 hover:bg-black/90 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-colors shadow-lg'
                            aria-label='Open full screen'>
                            <FiMaximize2 size={14} aria-hidden />
                            Full screen
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className='relative w-full h-52 md:h-full min-h-[13rem] md:min-h-[280px]'>
              <button
                type='button'
                onClick={() => openLightbox(0)}
                className='absolute inset-0 z-[1] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-none'
                aria-label={`View ${alt || name} full screen`}>
                <span className='sr-only'>View full screen</span>
              </button>
              <img
                src={img}
                alt={alt}
                className='w-full h-full object-cover object-top group-hover:scale-[1.02] duration-500 pointer-events-none'
              />
              <div className='absolute bottom-3 right-3 z-[2]'>
                <button
                  type='button'
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(0);
                  }}
                  className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-black/75 hover:bg-black/90 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-colors shadow-lg'
                  aria-label='Open full screen'>
                  <FiMaximize2 size={14} aria-hidden />
                  Full screen
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='flex-1 p-6 md:p-8 flex flex-col justify-between'>
          <div>
            <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-1'>
              Featured Project
            </p>
            <h3 className='text-xl md:text-2xl font-bold text-theme-white mb-5'>{name}</h3>

            <div className='space-y-4 mb-5'>
              <div>
                <span className='text-[10px] font-bold text-theme-white/40 uppercase tracking-widest'>
                  Problem
                </span>
                <p className='text-sm text-theme-white/75 mt-1 leading-relaxed'>{problem}</p>
              </div>
              {solution && (
                <div>
                  <span className='text-[10px] font-bold text-theme-white/40 uppercase tracking-widest'>
                    Solution
                  </span>
                  <p className='text-sm text-theme-white/75 mt-1 leading-relaxed'>{solution}</p>
                </div>
              )}
            </div>

            {Array.isArray(results) && results.length > 0 && (
              <div className='mb-5'>
                <span className='text-[10px] font-bold text-theme-white/40 uppercase tracking-widest block mb-2'>
                  Results
                </span>
                <div className='flex flex-wrap gap-2'>
                  {results.map((r) => (
                    <span
                      key={r}
                      className='inline-flex items-center bg-accent/10 border border-accent/25 text-accent text-xs font-semibold rounded-full px-3 py-1.5'>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className='text-xs text-theme-white/40 font-medium tracking-wide'>{tools}</p>
          </div>

          <div className='flex flex-wrap gap-3 mt-6'>
            {link && (
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='h-9 px-5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg flex items-center gap-2 duration-200'>
                Live Demo <FiExternalLink size={14} />
              </a>
            )}
            {code && (
              <a
                href={code}
                target='_blank'
                rel='noreferrer'
                className='h-9 px-5 border border-white/20 hover:border-accent hover:text-accent text-theme-white text-sm font-semibold rounded-lg flex items-center gap-2 duration-200'>
                View Code <AiFillGithub size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkElement;
