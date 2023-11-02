import React, { useCallback,useState ,memo,useEffect} from 'react'
import {Link} from 'react-router-dom'
import colors from '../colors'
import moxa_logo from './icons_images/moxa_logo.png'
import Select from 'react-select';

function Menu({screen}) {
    const [selectedOption, setSelectedOption] = useState(null);
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

    const edge = useCallback((str) => 
        <li key={str} style={{color:colors.cyan_300,marginLeft:"14%",textTransform:"uppercase",fontSize:16,letterSpacing:2
        }}>
        <Link to={str === "home" ? "/" : `/${str}`}>{str}</Link>
        </li>,[])

    const options = [
        { value: 'EN', label: 'EN' },
        { value: 'IT', label: 'IT' },
        { value: 'HU', label: 'HU' },
      ];

      console.log(scrollY);
    return (
    <div className={`flex flex-row fixed top-0 w-full h-[8%] bg-cyan_950 px-[14%] py-[1%] font-montserrat items-center`} style={{ top: scrollY > 0 ? '-100%' : '0', transition: 'top 0.2s ease-in-out' }}>
        <div className='w-[10%] h-[100%]'><img className='h-[100%]' src={moxa_logo} alt={"logo"}/></div>        
        <ul className='flex flex-row w-[50%]'>
            {edge("home")}
            {edge("products")}
            {edge("contact")}
        </ul>
        <div className='flex w-[30%] h-[80%] justify-center items-center' style={{color:colors.cyan_300}}>f / in /li</div>
        <div className='flex w-[10%] h-[80%] justify-end items-center' style={{color:colors.cyan_300}}>
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            placeholder={options[0].value}
            options={options}
            />
        </div>
    </div>
  )
}

export default memo(Menu)