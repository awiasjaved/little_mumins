import React from 'react'
import Image from "next/image";
import Remove from "../assets/images/remove-removebg-preview.png"
import cap from "../assets/images/cap.jpg"
import Container from '../Container';
import { motion } from "framer-motion";
const Story = () => {
  return (
    <>
      <div
        className="max-h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/desktop_background.png')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >

          {/* Content Section */}
          <div className="px-8 lg:px-32 py-20 text-black flex flex-col lg:flex-row justify-between gap-12">
            {/* Left side (Heading + Image) */}
            <div className="max-w-lg relative z-10">
              <h3 className="text-sm font-light tracking-widest mb-2">OUR STORY</h3>

              <h1 className="text-4xl font-bold font-[cursive] mb-4">
                The Blossoming of Little Mumins
              </h1>

              {/* Logo Image */}
              <div className="w-[250px]">
                <Image
                  src={Remove}
                  alt="Flowers of Jannah Logo"
                  width={250}
                  className="rounded object-contain h-auto w-full"
                />
              </div>
            </div>

            {/* Right side (Paragraph) */}
            <div className="max-w-2xl text-gray-800 text-2xl space-y-6 leading-relaxed lg:pt-10">
              <p>
                Growing up, I was surrounded by the magic of stories. Every night, my mother would read to us — stories that were not just entertaining, but deeply rooted in Islamic teachings. Through tales of prophets and lessons from our faith,
              </p>
              <p>
                I was introduced to the beauty of Islam from a young age. Those early memories instilled in me a lifelong love for reading and a deep connection to my religion.
              </p>
              <p>
                After getting married, I realized how much things had changed. The culture of book reading had declined, and there was a visible shortage of quality children’s books — books that not only entertained but also nurtured Islamic values, did tarbiyah, and helped shape a strong, faithful next generation.
              </p>
              <p>
                It was then that, as a couple, we decided to start Little Mumins — a space dedicated to curating books that fulfill these needs. Our vision is to create an environment where children grow up surrounded by beautiful, meaningful literature that nourishes both the heart and mind. Through Little Mumins, we hope to bring back the love of reading into homes and play a small part in nurturing the future of our Ummah.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="   text-center  bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${cap.src})`,
        }}>

        <div className='min-h-screen w-full inset-0 bg-[#FBDFB0]/80 flex items-center justify-center'>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 2, y: 20 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="pb-20"
            >
              <blockquote className="text-sm md:text-xl lg:text-2xl text-gray-700 font-medium mb-8 px-4 text-center">
                <p className="mb-6 font-semibold">About Little Mumins</p>
                <p>
                  Some of my sweetest childhood memories are of my mother reading to us every night — stories woven with faith, love, and lessons from the lives of the prophets.
                  Growing up in a Muslim home, these stories were my first doorway into the beauty of Islam.
                  <br /><br />
                  After marriage, I saw how the culture of reading had faded, and how rare it was to find books that nurtured a child’s heart with Islamic values.
                  Together, my husband and I dreamed of changing that — for our children, and for every little heart around us.
                  <br /><br />
                  Little Mumins was born from that dream: to fill homes with books that inspire faith, character, and love for Allah from the earliest years.
                  We pray this small effort helps raise a generation rooted in deen — InshaAllah.
                </p>
              </blockquote>
            </motion.div>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-800">Umm-e-Rumaisa</p>
              <p className="text-sm text-gray-600">Little Mumins</p>
            </div>
          </Container>
        </div>


      </div>
    </>

  )
}

export default Story
