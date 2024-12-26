import productImage from '../assets/product-image.png';
import Image from 'next/image';
import pyramid from '../assets/pyramid.png';
import tubeImage from '../assets/tube.png';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className="section-heading">
        <div className='flex justify-center'>
        <div className='tag '>Boost your productivity</div>
        </div>        
        <h2 className='section-title mt-5'>A more effective to track progress</h2>
        <p className='section-description mt-5'>Effortlessly turn your ideas into a fully functional, responsive,
           SaaS Website in just minutes with this template.</p>
           </div>
           <div className="relative">
           <Image src={productImage} alt="Product Image" className='mt-10' />
           <Image src={pyramid} alt="Pyramid" height={262} width={262} className=' hidden md:block absolute -right-36 -top-32 ' />
           <Image src={tubeImage} alt="Tube Image" height={248}  className='hidden md:block absolute bottom-24  -left-36' />
           </div>
      </div>
    </section>
  )
};
