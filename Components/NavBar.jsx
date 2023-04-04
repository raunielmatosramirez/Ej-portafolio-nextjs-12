import React from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-primary'>
        <div className='container' style={{width:"70%"}}>
					<Link href='/'>
          <a className='navbar-brand' style={{color:"#18bc9c"}}>
            RaW-Developer
          </a>
					</Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav' style={{ marginLeft: "auto" }}>
              <li className='nav-item'>
                <Link href='/'>
                  <a className='nav-link' aria-current='page'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/blog'>
                  <a className='nav-link' aria-current='page'>
                    Blog
                  </a>
                </Link>
              </li>
							<li className='nav-item'>
                <Link href='/github'>
                  <a className='nav-link' aria-current='page'>
                    GitHub
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
