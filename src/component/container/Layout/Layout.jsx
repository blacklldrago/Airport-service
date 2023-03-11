import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import logo from './logo.png'
import yata from './yata.png'
import cards from './cards.png'
import menu from './menu.png'
import menu4 from './menu4.png'
import menu2 from './menu2.jpg'
import { useTranslation } from 'react-i18next'
import Switcher from '../../../Switcher'
function Layout () {
  const [ lng, setLng ] = useState('ru')
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false)
  const [log, setLog] = useState(false)
  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }
  return (<div>
    <div className="container">
      <div className="navbar  pt-[30px] bg-[#0C51FD] dark:bg-[black] h-[100px] flex justify-evenly">
        <div className="start">
          <img className='h-[40px] w-[112px] pb-[10px]' src={logo} alt="" />
        </div>
        <div className='pop'>
          <ul className='flex gap-[30px]'>
            <li className='text-[white] font-[600] text-[20px]'><Link to={"/air"}>{t("text1")}</Link></li>
            <li className='text-[white] font-[600] text-[20px]'><Link to={"/hotels"}>{t("text2")}</Link></li>
            <li>
        <div className='pop pick'>
          <Switcher/>
        </div></li>
          </ul>
          
        </div>
        <div className="finish flex gap-[20px] " >
          <div className="sle pop">
          <select className=' h-[40px] w-[70px] bg-[#18EEF7] text-[white] dark:text-[black] font-[500] text-[20px]' name="" id="">
            <option value="ru">Rub</option>
            <option value="en">Usd</option>
          </select>
          <select className=' ml-[20px] h-[40px] w-[70px] bg-[#18EEF7] text-[white] dark:text-[black] font-[500] text-[20px]' value={lng} onChange = {handleChange}>
        <option value="ru">Ru</option>
        <option value="en">En</option>
          </select>
          </div>
          <div className="enter">
            <button onClick={()=>setLog(!log)} className='rounded-[10px] mb-[20px] h-[40px] w-[120px] bg-[#18EEF7] text-[white] dark:text-[black] font-[500] text-[20px]'>{t("text3")}</button>
            {
              log && <div className='login pt-[100px] bg-[#2727279f] dark:bg-[#f4f1f1c0]'> 
                  <div className="register  rounded-[20px] text-center pt-[30px] dark:bg-[black]">
                  <img className='h-[40px] w-[112px] mb-[20px] m-auto ' src={logo} alt="" />
                  <p className='pb-[40px] text-[20px] font-[600] dark:text-[white]'>{t("text21")}</p>
                  <div className='inputModal'>
                    <label className='dark:text-[white]' >{t("text22")}<br />
                    <input className='w-[330px] h-[40px] dark:text-[black]'  type="email" name="" id="" />
                    </label> <br /><br />
                    <label className='dark:text-[white]'>
                    {t("text23")} <br />
                    <input className='w-[320px] h-[40px] dark:text-[black]' type="password" name="" id="" />
                    </label><br /><br />
                    <button onClick={()=>setLog(!log)} className='w-[320px] h-[40px] bg-[#07AEE2] rounded-[10px] text-[white] font-[600]'>{t("text3")}</button>

                  </div>
                  <div className='forg flex justify-evenly pt-[20px]'>
                    <div>
                      <p className='dark:text-[white]'>{t("text24")}</p>
                    </div>
                    <div>
                      <p className='dark:text-[white]'>{t("text25")}</p>
                      <p className='dark:text-[white]'>{t("text26")}</p>
                    </div>
                  </div>
                  <div className='mini'>
                    <span onClick={()=>setLog(!log)} className='text-[60px] text-[black] float-right dark:text-[white] '>&times;</span>
                  </div>
                  </div>
              </div>
            }
          </div>
        </div>
        <div className='lines'>
            <img className='h-[40px] dark:hidden' onClick={()=>setModal(!modal)} src={menu}  alt="" />
            <img className='h-[40px] hidden dark:block' onClick={()=>setModal(!modal)} src={menu4}  alt="" />
            {
              modal && <div className='modal'>
              <div className='polo'>
                <ul >
                  <li onClick={()=>setModal(!modal)}  className='text-[white] font-[600] text-[20px]'><Link to={"/air"}>{t("text1")}</Link></li>
                  <li  onClick={()=>setModal(!modal)}   className='text-[white] font-[600] text-[20px]'><Link to={"/hotels"}>{t("text2")}</Link></li>
                </ul>
              </div>
              <div >
              <div >

                <select className=' h-[40px] w-[70px] bg-[#18EEF7] text-[white] dark:text-[black] font-[500] text-[20px]' name="" id="">
                  <option value="ru">Rub</option>
                  <option value="en">Usd</option>
                </select>
                <select className=' ml-[20px] h-[40px] w-[70px] bg-[#18EEF7] text-[white] dark:text-[black] font-[500] text-[20px]' value={lng} onChange = {handleChange}>
              <option value="ru">Ru</option>
              <option value="en">En</option>
              </select>
              </div>
              <div className="times">
                <span className='text-[60px]  text-[white]' onClick={()=>setModal(!modal)}>&times;</span>
              </div>
             </div>
            <div className='kola'>
              <Switcher/>
              </div>
          </div>}
          </div>
      </div>
      <Outlet/>
      <div className="footer bg-[#32ADFD]  dark:bg-[black] pt-[50px] dark:text-[white]">
        <div className='flex justify-evenly pb-[25px] flex-wrap'>
        <div className="first">
          <img src={logo} className='h-[40px] w-[112px]'  alt="" />
          <img src={yata} className = " dark:hidden" alt="" />
        </div>
        <div className='second'>
          <h1 className='mb-[15px] dark:text-[white]'>{t("text10")}</h1>
          <p className='mb-[15px] dark:text-[white]'>Don Avia Trans</p>
          <p className='mb-[15px] dark:text-[white]'>{t("text15")}</p>
        </div>
        <div className='third'>
          <h1 className='mb-[15px] dark:text-[white]' >{t("text11")}</h1>
          <p className='mb-[15px] dark:text-[white]'><Link to = {"https://top.uz/company/don-avia-trans-ooo-aviakassa-1"}>dat-tas@mail.ru</Link></p>
          <p className='mb-[15px] dark:text-[white]'><Link to = {"https://top.uz/company/don-avia-trans-ooo-aviakassa-1"}>dat-tas@mail.ru</Link></p>
        </div>
        <div className='last'>
          <h1 className='mb-[15px] dark:text-[white]'>{t("text12")}</h1>
          <ul>
            <li className='mb-[15px] dark:text-[white]'><Link to = {'/air'}>{t("text1")}</Link></li>
            <li className='mb-[15px] dark:text-[white]'><Link to = {'/hotels'}>{t("text2")}</Link></li>
            <li onClick={()=>setLog(!log)} className='dark:text-[white] cursor-pointer'>{t("text16")}</li>
          </ul>
        </div>
        </div>
        <hr className='f w-[1200px] m-auto' />
        <div className='flex justify-around pt-[20px] pb-[10px] flex-wrap'>
          <div  className = " dark:hidden">
            <img src={cards}  alt="" />
          </div>
          <div className='flex gap-[20px] flex-wrap '>
            <div><p className='dark:text-[white]'>{t("text13")}</p></div>
            
            <div><p className='dark:text-[white]'>{t("text14")}</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Layout