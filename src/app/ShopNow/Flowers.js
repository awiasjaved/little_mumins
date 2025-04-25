import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import bgImage from '../assets/images/baali.jpg'

const Flowers = () => {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Flowers of Jannah</title>
        <meta name="description" content="Nurturing the seed of Iman in young hearts" />
      </Head>

      {/* Hero Background */}
      <div className="absolute inset-0">
        <div
          className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >

</div>
        </div>

        {/* Content Container */}
        <div className="relative h-screen flex flex-col items-center justify-center text-center px-4">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wider">
            FLOWERS OF JANNAH
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl italic text-pink-400 mb-12">
            "Nurturing the seed of Iman in young hearts"
          </p>

          {/* Shop Button */}
          <Link href="/shop">
            <span className="inline-flex items-center px-8 py-3 bg-pink-500 rounded-full text-white font-medium transition-all hover:bg-pink-600">
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