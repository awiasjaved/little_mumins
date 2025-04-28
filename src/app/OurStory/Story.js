import React from 'react'
import TopNav from '../TopBar/TopNav'
import Image from "next/image";
import Logo from "../assets/images/babybook.png"

const Story = () => {
    return (
        <div className="relative min-h-screen">

            {/* Content Section */}
            <div className="px-8 lg:px-32 py-20 text-black flex flex-col lg:flex-row justify-between gap-12">
                {/* Left side (Heading + Image) */}
                <div className="max-w-lg relative z-10">
                    <h3 className="text-sm font-light tracking-widest mb-2">OUR STORY</h3>
                    <h1 className="text-4xl font-bold font-[cursive] mb-4">
                        The Blossoming of Flowers of Jannah
                    </h1>

                    {/* Image below the heading */}
                    <div className="mb-6">
                        <Image
                            src={Logo}
                            alt="Flowers of Jannah Logo"
                            width={250}
                            height={250}
                            className="rounded"
                        />
                    </div>
                </div>

                {/* Right side (Paragraph) */}
                <div className="max-w-2xl text-gray-800 text-justify space-y-6">
                    <p>
                    Growing up, I was surrounded by the magic of stories. Every night, my mother would read to us — stories that were not just entertaining, but deeply rooted in Islamic teachings. Through tales of prophets and lessons from our faith,
                    </p>
                    <p>
                    we were introduced to the beauty of Islam from a young age. Those early memories instilled in me a lifelong love for reading and a deep connection to my religion.

                    </p>
                    <p>
                        It was then that a beautiful idea blossomed in her heart. She decided to create a world where faith and fun walked hand in hand, a world where the love for Allah and His teachings could be sown in young hearts through the magic of storytelling.
                    </p>
                    <p>
                    After getting married, I realized how much things had changed. The culture of book reading had declined, and there was a visible shortage of quality children’s books — books that not only entertained but also nurtured Islamic values, did tarbiyah, and helped shape a strong, faithful next generation.

                    </p>
                    <p>
                    It was then that, as a couple, we decided to start Little Mumins — a space dedicated to curating books that fulfill these needs. Our vision is to create an environment where children grow up surrounded by beautiful, meaningful literature that nourishes both the heart and mind. Through Little Mumins, we hope to bring back the love of reading into homes and play a small part in nurturing the future of our Ummah.

                    </p>
                    
                </div>
            </div>
            <div className="min-h-screen bg-white flex items-center justify-center px-4">
     

      <div className="max-w-3xl mx-auto text-center py-16">
        
        
        <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-8 px-4">
          As a mother, my journey with Little mumins started from a 
          deep desire to instill Iman in my children through stories that 
          captivate and educate. What began as a personal mission has 
          now grown into a publication cherished by families, bringing us 
          all closer to Allah in a delightful and meaningful way.
        </blockquote>
        
        <div className="text-center">
          <p className="text-lg font-medium text-gray-800">Umme Abdullah</p>
          <p className="text-sm text-gray-600">Author at Flowers of Jannah</p>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Story
