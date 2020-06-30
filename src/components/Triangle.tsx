import React from 'react';
import {motion} from 'framer-motion';

export const TriangleBox = () => {
  return (<>
    <Triangle className="zelda-botw-triangle-up absolute top-0 left-0 -mx-1" animateParams={{
      rotate: "-45deg",
      x: [0, -6, 0],
      y: [0, -6, 0]
    }}/>
    <Triangle className="zelda-botw-triangle-up absolute top-0 right-0 -mx-1" animateParams={{
      rotate: "45deg",
      x: [0, 6, 0],
      y: [0, -6, 0]
    }}/>
    <Triangle className="zelda-botw-triangle-down absolute bottom-0 left-0 -mx-1" animateParams={{
      rotate: "45deg",
      x: [0, -6, 0],
      y: [0, 6, 0]
    }}/>
    <Triangle className="zelda-botw-triangle-down absolute bottom-0 right-0 z-10 -mx-1" animateParams={{
      rotate: "-45deg",
      x: [0, 6, 0],
      y: [0, 6, 0]
    }}/>
  </>);
}

interface TriangleProps {
  animateParams: {
    rotate: string,
    x: [number, number, number],
    y: [number, number, number]
  },
  className: string
}

export const Triangle = ({className, animateParams}: TriangleProps) => {
  return <motion.div initial={false} transition={{loop: Infinity, duration: 1, ease: "easeIn"}} className={className}
                     animate={animateParams}/>
}

export default TriangleBox;

