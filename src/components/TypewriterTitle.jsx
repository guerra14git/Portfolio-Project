import React from 'react';

function TypewriterTitle({ text }) {
  return (
    <h3 className="mb-2 font-jetbrains text-[14px] font-medium text-cyber-accent">
      <span className="mr-2 text-cyber-gray">&gt;</span> 
      {text}
      <span className="animate-pulse">_</span>
    </h3>
  );
}

export default TypewriterTitle;