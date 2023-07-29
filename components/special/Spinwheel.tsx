import { useEffect, useRef } from 'react';

const SpinWheel = ({ data }:any) => {
  const scrollRef :any= useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition:any = scrollRef!.current?.scrollLeft;
      const wheelWidth:any = scrollRef.current.offsetWidth;

      const itemWidth = wheelWidth / data.length;
      const highlightedIndex = Math.floor(scrollPosition / itemWidth);

      // Remove previous highlights
      const highlightedElements = document.querySelectorAll('.highlighted');
      highlightedElements.forEach((element) => {
        element.classList.remove('highlighted');
      });

      // Add highlight to current item
      const currentItem = document.querySelector(`[data-index="${highlightedIndex}"]`);
      if (currentItem) {
        currentItem.classList.add('highlighted');
      }
    };

    scrollRef.current.addEventListener('scroll', handleScroll);
    return () => {
      scrollRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  return (
    <div className="relative w-full h-48 overflow-x-scroll">
      <div className="spin-wheel" ref={scrollRef}>
        {data.map(({item, index}:any) => (
          <div
            key={index}
            className="spin-item w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center"
            data-index={index}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpinWheel;
