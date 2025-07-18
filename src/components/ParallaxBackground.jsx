import {motion, useTransform, useScroll, useSpring } from "motion/react";

const ParallaxBackground = () => {

const {scrollYProgress} = useScroll();
const x = useSpring(scrollYProgress, {damping:50})
const mountain3Y = useTransform(x, [0,0.5],["0%", "70%"])
const planetsX = useTransform(x, [0,0.5],["0%", "-20%"])
const mountain2Y = useTransform(x, [0,0.5],["0%", "30%"])
const mountain1Y = useTransform(x, [0,0.5],["0%", "0%"])


  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background */}
        <div className="absolute inset-0 w-full h-screen -z-50 bg-[url('/assets/sky.jpg')] bg-cover bg-bottom  " />
        {/* mountain layer-3 */}

        <motion.div className="absolute inset-0 -z-40 bg-[url('/assets/mountain-3.png')] bg-cover bg-bottom "  style= {{y: mountain3Y}} />

        {/* Planets */}

        <motion.div className=" absolute inset-0 -z-30 bg-[url('/assets/planets.png')] bg-cover bg-bottom  "  style= {{x: planetsX}} />

        {/* Mountain layer-2 */}

        <motion.div className=" absolute inset-0 -z-20 bg-[url('/assets/mountain-2.png')] bg-cover bg-bottom  "  style= {{y: mountain2Y}} />

        {/* Mountain layer-1 */}

        <motion.div className=" absolute inset-0 -z-10 bg-[url('/assets/mountain-1.png')] bg-cover bg-bottom  "  style= {{y: mountain1Y}}/>
      </div>
    </section>
  );
};

export default ParallaxBackground;
