import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/Relatedproducts';

const Product = () => {
  const {productId}=useParams();
  const {products,currency}=useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('')

  const fetchProductData=async()=>{

    products.map((item)=>{
      if(item._id===productId){
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId,products])
  return productData?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }

          </div>
          <div className='w-full sm:w-[50%]'>
            <img onClick={()=>setImage(item)} className='w-full h-auto' src={image} alt="" />

          </div>
          <div>
            {/* Product Info */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap1 mt-2'>
                <img src={assets.star_icon} alt="" className='w-3 5'/>
                <img src={assets.star_icon} alt="" className='w-3 5'/>
                <img src={assets.star_icon} alt="" className='w-3 5'/>
                <img src={assets.star_icon} alt="" className='w-3 5'/>
                <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-3 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-2 text-gray-500 md:w-4/5'>{productData.description}</p>
              {/* <div className='flex flex-col gap-4 my-8'>
                <p>Select </p>

              </div> */}
              <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-2'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5 '/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product</p>
                <p>Cash on delivery is available on this product</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          </div>
          {/* Description & Review section */}
          

        </div>

      </div>
      <div className='mt-20'>
            <div className="flex">
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam atque numquam, quos dolores sint quae ullam ea eaque ab!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam unde tempora beatae, ea perspiciatis!</p>

            </div>

          </div>
          {/* display related product */}
          <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
              </div>
  ):<div className='opacity-0'></div>
}

export default Product