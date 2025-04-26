import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import bgImage from '../assets/images/library.png'

const Flowers = () => {
  return (
    <div className="relative h-[60vh] w-full">
      <Head>
        <title>Flowers of Jannah</title>
        <meta name="description" content="Nurturing the seed of Iman in young hearts" />
      </Head>

      {/* Hero Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
        </div>
      </div>

      {/* Content Container */}
      <div className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center px-4">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider">
          FLOWERS OF JANNAH
          
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl italic text-pink-400 mb-8">
          &quot;Nurturing the seed of Iman in young hearts&quot;
        </p>

        {/* Shop Button */}
        <Link href="/shop">
          <span className="inline-flex items-center px-6 py-2 bg-pink-500 rounded-full text-white font-medium transition-all hover:bg-pink-600">
            SHOP NOW
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Flowers
