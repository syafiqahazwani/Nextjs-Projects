import React from 'react'
import { FaFingerprint } from 'react-icons/fa';
import { HiOutlineChat } from 'react-icons/hi';
import { IoAppsOutline, IoWifiOutline } from 'react-icons/io5';
import { MdNotifications, MdOutlineTouchApp } from 'react-icons/md'

const featureData = [
    {
        title: "Touch to buy",
        description: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        icon: <MdOutlineTouchApp className='w-12 h-12 text-pink-600 mx-auto' />
    },
    {
        title: "Touch to buy",
        description: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        icon: <FaFingerprint className='w-12 h-12 text-pink-600 mx-auto' />
    },
    {
        title: "Touch to buy",
        description: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        icon: <HiOutlineChat className='w-12 h-12 text-pink-600 mx-auto' />
    },
    {
        title: "Touch to buy",
        description: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        icon: <MdNotifications className='w-12 h-12 text-pink-600 mx-auto' />
    },
    {
        title: "Touch to buy",
        description: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        icon: <IoAppsOutline className='w-12 h-12 text-pink-600 mx-auto' />
    },
    {
        title: "Touch to buy",
        description: 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        icon: <IoWifiOutline className='w-12 h-12 text-pink-600 mx-auto' />
    },
];

const Features = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {featureData.map((feature, index) => {
                return (
                <div 
                 data-aos="fade-up" 
                 data-aos-delay={index * 100}
                 data-aos-ancor-placement="top-center"
                 key={index} className='text-center mx-auto'>
                    {/* Icon */}
                    <div className='mx-auto text-center'>{feature.icon}</div>
                    {/* Title */}
                    <h1 className='mt-4 text-lg font-semibold text-gray-900 dark:text-white'>
                        {feature.title}
                    </h1>
                    {/* Description */}
                    <p className='text-sm text-gray-600 dark:text-gray-300 mt-4'>
                        {feature.description}
                    </p>
                </div>
                );
            })}
        </div>
    </div>
  )
}


export default Features
