import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
        

<footer class="bg-black shadow ">
    <div class="w-full max-w-screen-xl mx-auto md:py-2">
        <div class="">
            <ul class="justify-center gap-5 flex flex-wrap items-center  text-sm font-medium  ">
                <li>
                    <Image className='w-8' width={100} height={100} src="/google-play-store-logo-A9F117BED5-seeklogo.com.png" alt="" />
                </li>
                <li>
                <Image className='w-8' width={100} height={100} src="/Instagram_logo_2016.svg.webp" alt="" />

                </li>
                <li>
                <Image className='w-8' width={100} height={100} src="/2062095_application_chat_communication_logo_whatsapp_icon.svg.png" alt="" />
                </li>
            </ul>
        </div>
    </div>
        <p class="py-2 bg-blue-800 block text-sm text-white sm:text-center ">© 2023<a href="https://flowbite.com/" class="hover:underline">2023 Copyrights: Hyra</a></p>
</footer>


    </>
  )
}

export default Footer