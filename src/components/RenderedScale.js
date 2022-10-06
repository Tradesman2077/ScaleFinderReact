import React, { useRef, useEffect } from 'react'

const RenderedScale = (props) => {

    const canvasRef = useRef(null)
  
    const draw = ctx => {
        for(let i = 0; i< 300; i+=43){
            ctx.fillStyle = '#000000'
            ctx.strokeRect(i, 75, 42, 75);
            ctx.fill();
        }
        for(let i = 21.5; i< 257; i+=43){
            ctx.fillStyle = '#000000'
            ctx.strokeRect(i, 0, 42, 75);
            ctx.fill();
        }
        
    }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here
    draw(context)
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}
export default RenderedScale;