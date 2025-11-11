import React from 'react';

const PartnersSection: React.FC = () => {
  const logo1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABCCAMAAACF4e8/AAAAFVBMVEXtHCn7vAD/zAD0Qyz2SS/5nwD8xADb2tAxAAABzklEQVR42u3c226CQAyAYZUSG8v//+ia06a2tMJuQ5v3A881lA/pQ+Q0GDAYDAYDA4RhI03wzaf1JGTlUD/1/y03bTjYg1+N+LwQ0A6YJ5z5T0/2t4vYJgA95kP5d+A5fQeATgl4Rk6/yQcg5BMAv/O3P08/gG/gL968gScIcg5Azi0Y8034b2I+gH7i6wQYg5e/gX/QLz75K+Qh/gH08+AfwP99fgQ4gn2I+A/4A/Qf0h+g/yH+AfwH9F+AP8B+RvyG+AP0H+IfgH9A/iH6D/Af0H9H/iH6D/AP0H+I/gP8B/RfgD9A/iH6D/AP0H8x/gD9h+A/oP8h/gH8B/RfgD/AfkT8hvgD9B/iH4B/QP4h+g/wH9B/R/4h+g/wD9B/iP4D/Af0X4A/QP4h+g/wD9B/Mf4A/YfgP6D/If4B/Afsn4R/AP2X+G3xByBfM/4B/KP4D/Cf0P8G/if4D/K/iP8B/jfQH8J/AP0n/AfwH8J/M/4D/EfyX+G/wH8B/wH+t9A/gP8J/QPyX+A/gP8L/G/wf4B/K/xP8B/jfQH8J/AP0n/AfwH8J/M/4D/EfyX+G/wH8B/wH+t9A/gP8J/QPyX+A/gP8L/G/wf4B/q/8h+A/wP8N/F9B/oP8B/ifgH9A/iH6D/AP0H9H/iH6D/AP0H+I/gP8B/RfgD9A/iH6D/AP0H8x/gD9h+A/oP8h/gH8B/RfgD/AfkT8hvgD9B/iH4B/QP4h+g/wH9B/R/4h+g/wD9B/iP4D/Af0X4A/QP4h+g/wD9B/Mf4A/YfgP6D/If4B/Af0X4A/wH5E/Ib4A/Qf4h+A/wD+g/gH+A/oP4B/gP8r/n8E9Qf0v8G/iX5M8I+jPAB+DPhj4h+c/8F+L96+A/kG/APx56M/xP8L+Afgz8c/QP/+/gP0HzI0DAYD+gGf6nOQj9oQgwAAAABJRU5ErkJggg==";
  const logo2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABXCAMAAABpL/pWAAAAElBMVEX///8AAAB2dnZ7e3t/f3+Dg4N7/1uhAAAAxklEQVR42u3TQQ0AAAwCoNP/p+1dYUCv0RVEP4cDBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQxLgAAVo/CqgAAAAASUVORK5CYII=";
  const logo3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABkCAMAAAAh/56jAAAAFVBMVEXtHCn///+AgIB2dnZ7e3t/f3/o6OjyP67BAAACTklEQVR42u3c25KCQAwA0c2i+1+1F1sM6mS2qYJmP835L7Mh4Gz/21ar1Wq1Wq1Wq9VqtfpftbrY6A/b41iFwz3Yp5+C2A/B+r3m8N/M98tqTq274O6h28/T/9B14O6Z2T5v0P3J5wM/gT+F712DHzD5pB+A91/5d3yDPz/x7P3v4B3Y+R77D+B09p8Sj7H/AF6i79/g7x8z/AHePkb4N33iA/wzP/MD8Cds/BviTwz/CP9NmvEP8B/hnx//A/6D/D/xv4f/D/4H+M/h+zP+A/sD8X+L/E/4D+g/pP8D/N/gf4X8G/y/ifw7/J/yH8G/S/+l/hP8E/sP4j/CfAP+Z/C/xP4v/N/gf4D+B/zP8/+A/AP+j+P/E/wD+E/wP8F/A/wD+M/wf4z+A/w/8T/i/x/wD+Q/p/8P/N/wf8f/D/gP8M/m/hf4P/hP4R/Jv0//o/wv4B/CP+M+H/9f7f4L+N/jP8/+L/E/wL85/L/gP8z/P/gv0X/P/jf6H8E/4n8X+J/jv8U/qP4z+L/gP4H+M/h+zP+A/sD8X+L/E/4D+g/pP8D/N/gf4X8G/y/ifw7/J/yH8G/S/+l/hP8E/sP4j/CfAP+Z/C/xP4v/N/gf4D+B/zP8/+A/AP+j+P/E/wD+E/wP8F/A/wD+M/wf4z+A/w/8T/i/xf8D+A/p/8P/N/wT8/3S1B5l9z4x3e5j1z/T5N+7dM9sP3/3Z61eY2+f808N+y+q0Wq1Wq9VqtVqtVqv1H/UNB5M/s27S1WkAAAAASUVORK5CYII=";

  return (
    <section id="partners" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
           <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Engaging with Industry Leaders</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">We are engaging with partners to build a connected and intelligent ecosystem.</p>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <img src={logo1} alt="Partner Logo 1" className="h-20 object-contain" />
            <img src={logo2} alt="Harvard University Logo" className="h-14 object-contain filter invert" />
            <img src={logo3} alt="Life Logo" className="h-20 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
