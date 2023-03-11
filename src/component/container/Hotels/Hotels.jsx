import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './Hotel.css'
function Hotels  ()  {
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
      <div className='room h-[80vh]'>

        <div className='text-center'>
        <div className='w-[5%] m-auto pt-[20px] '></div>
        <h1 className='pt-[100px] font-[700] text-[35px] mt-[40px] text-[white] dark:text-[black] w-[812px] m-[auto]'>{t("text4")}</h1>
        </div>
        <div className='heyy bg-[white] dark:bg-[black] w-[1360px] rounded-[20px] h-[150px] m-auto mt-[100px]'>
          <div className='w-[70%] m-auto'>
          <input className='mr-[20px] mt-[50px]w-[216px] h-[42px]  ' placeholder = {t("text17")} type="text" name="" id="" />
          <input className='mr-[20px] mt-[50px] w-[216px] h-[42px] ' placeholder = {t("text18")} type="text" name="" id="" />
          <input className='mr-[20px] mt-[50px] w-[216px] h-[42px] ' placeholder={t("text19")} type="text" name="" id="" />
          <button className=' font-[600]  ml-[40px] h-[42px] w-[200px] bg-[#F1B93F] text-[white] dark:text-[black] text-[20px]'>{t("text20")}</button>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Hotels