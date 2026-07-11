import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = ({ to, label, children }) => (
  <Link 
    to={to} 
    className="group relative flex items-center justify-center rounded-full p-2.5 text-cyber-gray transition-all duration-300 hover:scale-120 hover:bg-[#334155]/50 hover:text-white"
    aria-label={label}
  >
    {children}
    
    <span className="pointer-events-none absolute top-14 scale-0 whitespace-nowrap rounded-md border border-[#334155]/50 bg-cyber-black px-3 py-1.5 text-xs font-medium tracking-widest text-white opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
      {label}
    </span>
  </Link>
)

function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 z-50 max-w-2xl -translate-x-1/2">
      
      <nav className="flex items-center justify-between rounded-full border border-[#334155]/50 bg-cyber-black/60 px-6 py-3 backdrop-blur-md">
    
        <div className="flex w-full items-center justify-between gap-3">
          
          <IconLink to="/about" label="ABOUT ME">
            <svg className="h-5.5 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </IconLink>

          <IconLink to="/projects" label="PROJECTS">
            <svg className="h-5.5 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
            </svg>
          </IconLink>

          <IconLink to="/resume" label="RESUME">
            <svg className="h-5.5 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </IconLink>

          <IconLink to="/contact" label="CONTACT">
            <svg className="h-5.5 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </IconLink>

        </div>
      </nav>

    </div>
  );
}

export default Navbar;