// import "./Background.css";

// const test = () => {
//   const testArr = [];
//   for (let i = 0; i < 50; i++) {
//     testArr.push(Math.floor(Math.random() * i) + 1);
//   }
//   return testArr;
// };
// const Background = () => {
//   return (
//     <div className="Container">
//       <div className="Bubbles">
//         {test().map((i, index) => (
//           <span style={{ "--i": i } as any} key={`${i}-${index}`}></span>
//         ))}

      
//       </div>
//     </div>
//   );
// };

// export default Background;








import { useEffect, useRef } from "react";

// نفس دالة test اللي عندك
const test = () => {
  const testArr = [];
  for (let i = 0; i < 200; i++) {
    testArr.push(Math.floor(Math.random() * i) + 1);
  }
  return testArr;
};

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;                 // نحصل على عنصر الـ canvas
    const ctx = canvas.getContext("2d")!;              // نحصل على أداة الرسم 2D
    const DPR = window.devicePixelRatio || 1;          // نستخدم دقة الشاشة الحقيقية

    function resize() {
      canvas.width = window.innerWidth * DPR;          // نضبط عرض canvas حسب الشاشة
      canvas.height = window.innerHeight * DPR;        // نضبط ارتفاع canvas
      ctx.scale(DPR, DPR);                             // نضبط مقياس الرسم
    }
    resize();
    window.addEventListener("resize", resize);

    const values = test();                             // نجيب نفس قيم i

    // إنشاء الفقاعات
    const bubbles = values.map((i) => ({
      i,                                               // قيمة i
      x: Math.random() * window.innerWidth,            // موقع X عشوائي
      y: window.innerHeight + Math.random() * 200,     // تبدأ من أسفل الشاشة
      r: 1,                                           // نفس width/height = 20px
      speed: 0.01 + i * 0.01,                           // السرعة تعتمد على i

      // اللون: أبيض أو أخضر نيون
      color: i % 2 === 0 ? "#ffffff" : "#02ff45",
    }));

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      // نمسح الشاشة كل frame

      for (const b of bubbles) {
        b.y -= b.speed;                                // نحرك الفقاعة للأعلى

        if (b.y < -50) {                               // إذا خرجت من الشاشة
          b.y = window.innerHeight + 50;               // نرجعها للأسفل
          b.x = Math.random() * window.innerWidth;     // نغير موقعها
        }

        // ----------- تأثير التوهج مثل CSS -----------
        ctx.shadowBlur = 40;                           // قوة التوهج
        ctx.shadowColor = b.color + "88";              // لون التوهج (شفاف قليلًا)

        // ----------- رسم الفقاعة -----------
        ctx.beginPath();
        ctx.fillStyle = b.color;                       // لون الفقاعة نفسها
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);        // نرسم دائرة
        ctx.fill();                                    // نلوّنها
      }

      requestAnimationFrame(draw);                     // نعيد الرسم 60fps
    }

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "220vh",
        zIndex: '-1'
      }}
    />
  );
};

export default Background;