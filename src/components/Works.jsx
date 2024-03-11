import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import shopDesktopImg from '../assets/images/works/Screenshot 2023-11-14 104340.png';
import plantDesktopImg from '../assets/images/works/Screenshot 2024-03-06 200034.png';
import tofuDesktopImg from '../assets/images/works/Screenshot 2024-03-06 201510.png';
import plantMobileImg from '../assets/images/works/WhatsApp Image 2024-03-06 at 20.48.00_2722a517.jpg';
import tofuMobileImg from '../assets/images/works/WhatsApp Image 2024-03-06 at 20.56.54_2631ae1e.jpg';
import NoirDesktopImg from '../assets/images/works/noir-desktop.jpg';
import NoirMobileImg from '../assets/images/works/noir.jpg';
import { i18n } from '../locale/i18n';
import WorkElement from './WorkElement';

const Works = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section name='works' className='pt-12 md:pt-20 w-full text-theme-white'>
      <div className='flex flex-col w-full h-full max-w-[900px] mx-auto py-4 px-8'>
        <div className='pb-10'>
          <h1 className='font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1'>
            {i18n.t('worksSection.sectionName')}
          </h1>
          <p className='text-base 2xl:text-lg'>{i18n.t('worksSection.intro')}</p>
        </div>

        <>
          {/* Mobile Slider */}
          <div className='mx-auto w-full max-w-[400px] md:hidden'>
            <Slider {...settings}>
              <div>
                <WorkElement
                  img={plantMobileImg}
                  alt={i18n.t('worksSection.casaECor.alt')}
                  name={`${i18n.t('worksSection.casaECor.name')}`}
                  description={`${i18n.t('worksSection.casaECor.description')}`}
                  tools='React, Express, Mongo db'
                  link='https://plant-selling-mern-xf49.vercel.app/'
                  code='https://github.com/kushagr432/plant-selling-mern'
                />
              </div>
              <div>
                <WorkElement
                  img={tofuMobileImg}
                  alt={i18n.t('worksSection.lasso.alt')}
                  name={`${i18n.t('worksSection.lasso.name')}`}
                  description={`${i18n.t('worksSection.lasso.description')}`}
                  tools='React, Figma, Taiwind , MUI'
                  link='https://tofu-app.vercel.app/'
                  code=''
                />
              </div>
              <div>
                <WorkElement
                  img={NoirMobileImg}
                  alt={i18n.t('worksSection.noir.alt')}
                  name={`${i18n.t('worksSection.noir.name')}`}
                  description={`${i18n.t('worksSection.noir.description')}`}
                  tools='HTML5, CSS3, JavaScript'
                  link='https://noir-barbearia.vercel.app/'
                  code=''
                />
              </div>
              <div>
                <WorkElement
                  img={shopDesktopImg}
                  alt={i18n.t('worksSection.alugaFacil.alt')}
                  name={`${i18n.t('worksSection.alugaFacil.name')}`}
                  description={`${i18n.t('worksSection.alugaFacil.description')}`}
                  tools='React, Spring Boot, My SQL'
                  link=''
                  code='https://github.com/kushagr432/shopX'
                />
              </div>
            </Slider>
          </div>
          {/* Desktop */}
          <div className='hidden md:flex flex-col'>
            <WorkElement
              img={plantDesktopImg}
              alt={i18n.t('worksSection.casaECor.alt')}
              name={`${i18n.t('worksSection.casaECor.name')}`}
              description={`${i18n.t('worksSection.casaECor.description')}`}
              tools='React, Express, Mongo db'
              link='https://plant-selling-mern-xf49.vercel.app/'
              code='https://github.com/kushagr432/plant-selling-mern'
            />
            <WorkElement
              img={tofuDesktopImg}
              alt={i18n.t('worksSection.lasso.alt')}
              name={`${i18n.t('worksSection.lasso.name')}`}
              description={`${i18n.t('worksSection.lasso.description')}`}
              tools='React, Figma, Taiwind , MUI'
              link='https://tofu-app.vercel.app/'
              code=''
              reverse
            />
            <WorkElement
              img={NoirDesktopImg}
              alt={i18n.t('worksSection.noir.alt')}
              name={`${i18n.t('worksSection.noir.name')}`}
              description={`${i18n.t('worksSection.noir.description')}`}
              tools='HTML5, CSS3, JavaScript'
              link='https://noir-barbearia.vercel.app/'
              code=''
            />
            <WorkElement
              img={shopDesktopImg}
              alt={i18n.t('worksSection.alugaFacil.alt')}
              name={`${i18n.t('worksSection.alugaFacil.name')}`}
              description={`${i18n.t('worksSection.alugaFacil.description')}`}
              tools='React, Spring Boot, My SQL'
              link=''
              code='https://github.com/kushagr432/shopX'
              reverse
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default Works;
