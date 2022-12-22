import React from 'react'

 const Header=({title,props1,prop2,prop3})=> {
  return (
    <header className='header'>
        <h1 className='title'>{title}</h1>
        <ul className='subMenu'>
           <a href="#"><li>{props1}</li></a> 
            <a href="#"><li>{prop2}</li></a>
            <a href="#"><li>{prop3}</li></a>
        </ul>
    </header>
  )
}
export default Header;