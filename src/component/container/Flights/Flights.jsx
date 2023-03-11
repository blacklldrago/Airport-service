import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Flights.css'
import plane from './plane.png'
function Flights  ()  {
  const [ lng, setLng ] = useState('ru')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }
  return (<div>
      <div className='sea h-[80vh]'>
        <div className='text-center'>
        <div className='w-[5%] m-auto pt-[20px] '></div>
        <h1 className='pt-[100px] font-[700] text-[35px] mt-[40px] text-[white] dark:text-[black] w-[812px] m-[auto]'>{t("text4")}</h1>
        </div>
        <div className='hey bg-[white] dark:bg-[black] w-[1260px] rounded-[20px] h-[150px] m-auto mt-[100px]'>
          <div className='w-[86%] m-auto'>
          <input className='on mt-[50px]w-[216px] h-[42px]' placeholder={t("text5")} type="text" name="" id="" />
          <input className='ml-[10px] mt-[50px] w-[216px] h-[42px] ' placeholder={t("text6")} type="text" name="" id="" />
          <input className='ml-[10px] mt-[50px] w-[216px] h-[42px] ' placeholder={t("text7")} type="text" name="" id="" />
          <input className='ml-[10px] mt-[50px] w-[216px] h-[42px] ' placeholder={t("text8")} type="text" name="" id="" />
          <button className='font-[600] ml-[10px] h-[43px] w-[151px] bg-[#08B9F0] text-[white] dark:text-[black]'>{t("text9")}</button>
          <p className='pt-[16px] text-[#90AEFA]'>{t("text27")}</p>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Flights