import React,{useState,useEffect} from 'react';

function CustomComponent({ className,style, children,scrollPos1 = 0,reveal=false}) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const revealComp = {
    transition: 'transform 1s ease-in-out, opacity 2s ease-in-out',
    transform: reveal
      ? `translateY(${scrollY > scrollPos1 ? 0 : '100%'})`
      : 'translateY(0)', // Set transform to 0 if applyCustomStyle is false
    opacity: reveal ? (scrollY > scrollPos1 ? 1 : 0) : 1, // Set opacity to 1 if applyCustomStyle is false
  };

  return (
    <div className={` rounded-2xl p-2 ${className}`} style={{boxShadow:"rgba(0, 0, 0, 0.4) 2px 2px 4px, rgba(0, 0, 0, 0.3) 2px 7px 13px -3px, rgba(0, 0, 0, 0.2) 2px -3px 0px inset,rgba(0, 0, 0, 0.12) 1px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",...revealComp,...style}}>
      {children}
    </div>
  );
}

export default CustomComponent;
