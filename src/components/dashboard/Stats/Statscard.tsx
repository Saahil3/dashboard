
interface StatsCardProps {
  svgPath: string; 
  title: string;
  value: string | number;
  change: {
    value: number;
    trend: 'increase' | 'decrease';
  };
  increaseSVG: string; 
  decreaseSVG: string;  
}

const Statscard = ({ svgPath, title, value, change, increaseSVG, decreaseSVG }: StatsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-[20px] border-gray-100 border-2 shadow-[0px_5px_22px_0px_rgba(0,0,0,0.06)] font-inter">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="currentColor" className="mt-0.5 mr-2 text-gray-500" viewBox="0 0 18 16">
          <path d={svgPath} />
        </svg>
        <p className="text-xs text-gray-500 uppercase tracking-wider">{title}</p>
      </div>

      <p className="text-3xl font-semibold mt-2">{value}</p>

      <div className={`flex items-center mt-2 text-sm ${change.trend === 'increase' ? 'text-emerald-600' : 'text-red-600'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2 mt-1">
          <path d={change.trend === 'increase' ? increaseSVG : decreaseSVG} />
        </svg>
        <span>{change.value}% {change.trend}</span>
      </div>
    </div>
  );
};

export default Statscard;
