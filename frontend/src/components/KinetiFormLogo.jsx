export default function KinetiFormLogo({ size = 40, color = "#ffffff" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle cx="100" cy="40" r="15" stroke={color} strokeWidth="3" fill="none"/>
      
      {/* Body segments with joints */}
      {/* Upper torso */}
      <line x1="100" y1="55" x2="85" y2="85" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="85" cy="85" r="4" fill={color}/>
      
      {/* Left arm upper */}
      <line x1="85" y1="85" x2="60" y2="75" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="60" cy="75" r="4" fill={color}/>
      
      {/* Left arm lower */}
      <line x1="60" y1="75" x2="45" y2="95" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      
      {/* Right arm upper */}
      <line x1="85" y1="85" x2="115" y2="65" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="115" cy="65" r="4" fill={color}/>
      
      {/* Right arm lower */}
      <line x1="115" y1="65" x2="135" y2="75" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      
      {/* Lower torso */}
      <line x1="85" y1="85" x2="90" y2="115" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="90" cy="115" r="4" fill={color}/>
      
      {/* Left thigh */}
      <line x1="90" y1="115" x2="75" y2="145" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="75" cy="145" r="4" fill={color}/>
      
      {/* Left shin */}
      <line x1="75" y1="145" x2="65" y2="175" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      
      {/* Right thigh */}
      <line x1="90" y1="115" x2="110" y2="135" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="110" cy="135" r="4" fill={color}/>
      
      {/* Right shin */}
      <line x1="110" y1="135" x2="125" y2="160" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
