"use client"
import { useState } from 'react';
import './header.css';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <section className="navbar flex justify-between">
      <div className="logo pl-4 pt-4">
       <a href="/">
       <Image
          src="/images/Logo.png"
          alt="Logo"
          width={69}
          height={42}
        /></a>
      </div>
      <div className="burger " onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`nav-items ${isOpen ? 'active' : ''}`}>
        <ul className="flex justify-between pr-8 pt-5 gap-9">
          <Link href="/"><li>Home</li></Link>
          <Link href="/Gallery"><li>GALLERY</li></Link>
          <Link href="/Gallery"><li>PROJECTS</li></Link>
          <Link href="/Components/Contact"><li>CONTACT US</li></Link>
        </ul>
      </div>
    </section>
  );
}

export default Header;
