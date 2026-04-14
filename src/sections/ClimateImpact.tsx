import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Globe, BarChart3, Map as MapIcon, Calendar, Filter } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { cn } from "@/src/lib/utils";

const carbonData = [
  { year: '2020', reduction: 5 },
  { year: '2021', reduction: 12 },
  { year: '2022', reduction: 25 },
  { year: '2023', reduction: 45 },
  { year: '2024', reduction: 70 },
  { year: '2025', reduction: 98 },
];

const esgData = [
  { name: 'Energy', score: 85 },
  { name: 'Mining', score: 72 },
  { name: 'Gov', score: 90 },
  { name: 'Tech', score: 95 },
];

const emissionsDataByYear: Record<string, Record<string, string>> = {
  '2020': { na: '18.4 GT', eu: '10.2 GT', as: '24.5 GT', sa: '5.1 GT', af: '4.2 GT', oc: '1.5 GT' },
  '2022': { na: '16.8 GT', eu: '9.1 GT', as: '23.2 GT', sa: '4.8 GT', af: '4.0 GT', oc: '1.4 GT' },
  '2024': { na: '15.2 GT', eu: '8.4 GT', as: '22.1 GT', sa: '4.2 GT', af: '3.8 GT', oc: '1.2 GT' },
  '2026': { na: '13.5 GT', eu: '7.2 GT', as: '20.5 GT', sa: '3.8 GT', af: '3.5 GT', oc: '1.0 GT' },
};

const regions = [
  { id: 'na', name: 'North America', color: 'fill-blue-400' },
  { id: 'eu', name: 'Europe', color: 'fill-green-400' },
  { id: 'as', name: 'Asia', color: 'fill-red-400' },
  { id: 'sa', name: 'South America', color: 'fill-yellow-400' },
  { id: 'af', name: 'Africa', color: 'fill-orange-400' },
  { id: 'oc', name: 'Oceania', color: 'fill-purple-400' },
];

const scenarios = [
  {
    temp: "+1.5°C",
    impact: "Critical tipping point. AI-driven decarbonisation can mitigate 30% of global emissions through autonomous grid optimization and supply chain intelligence.",
    status: "Mitigable",
    color: "bg-blue-500",
  },
  {
    temp: "+2.0°C",
    impact: "Severe ecosystem collapse. Agentic AI required for rapid adaptation, extreme weather prediction, and autonomous resource reallocation.",
    status: "High risk",
    color: "bg-yellow-500",
  },
  {
    temp: "+4.0°C",
    impact: "Catastrophic global failure. Intelligence systems pivot to survival logistics, extreme climate engineering, and planetary-scale life support.",
    status: "Critical",
    color: "bg-red-500",
  }
];

export function ClimateImpact() {
  const [activeRegionId, setActiveRegionId] = useState('na');
  const [timePeriod, setTimePeriod] = useState('2024');

  const activeRegion = regions.find(r => r.id === activeRegionId)!;
  
  // Dynamic data based on filters
  const getFilteredCarbonData = () => {
    const baseData = [
      { year: '2020', reduction: 5 },
      { year: '2021', reduction: 12 },
      { year: '2022', reduction: 25 },
      { year: '2023', reduction: 45 },
      { year: '2024', reduction: 70 },
      { year: '2025', reduction: 98 },
    ];
    
    // Simulate data changes based on region and time period
    const multiplier = activeRegionId === 'as' ? 0.8 : activeRegionId === 'eu' ? 1.2 : 1;
    const offset = parseInt(timePeriod) - 2024;
    
    return baseData.map(d => ({
      ...d,
      reduction: Math.min(100, Math.max(0, d.reduction * multiplier + offset * 2))
    }));
  };

  const getFilteredScenarios = () => {
    const baseScenarios = [
      {
        temp: "+1.5°C",
        impact: "Critical tipping point. AI-driven decarbonisation can mitigate 30% of global emissions through autonomous grid optimization and supply chain intelligence.",
        status: "Mitigable",
        color: "bg-blue-500",
        potential: 85
      },
      {
        temp: "+2.0°C",
        impact: "Severe ecosystem collapse. Agentic AI required for rapid adaptation, extreme weather prediction, and autonomous resource reallocation.",
        status: "High risk",
        color: "bg-yellow-500",
        potential: 60
      },
      {
        temp: "+4.0°C",
        impact: "Catastrophic global failure. Intelligence systems pivot to survival logistics, extreme climate engineering, and planetary-scale life support.",
        status: "Critical",
        color: "bg-red-500",
        potential: 35
      }
    ];

    // Adjust potential based on region and time
    const regionMultiplier = activeRegionId === 'eu' ? 1.1 : activeRegionId === 'as' ? 0.85 : 1;
    const timeOffset = (parseInt(timePeriod) - 2024) * 3;
    
    const regionContext = activeRegionId === 'as' ? " High industrial density in Asia requires aggressive agentic deployment." : 
                          activeRegionId === 'eu' ? " European regulatory frameworks accelerate autonomous adoption." : 
                          activeRegionId === 'na' ? " North American grid modernization drives intelligence integration." : "";

    return baseScenarios.map(s => ({
      ...s,
      impact: s.impact + regionContext,
      potential: Math.round(Math.min(100, Math.max(5, s.potential * regionMultiplier + timeOffset)))
    }));
  };

  const filteredCarbonData = getFilteredCarbonData();
  const filteredScenarios = getFilteredScenarios();

  return (
    <section id="impact" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <span className="text-brand-primary font-medium tracking-[0.3em] text-[10px] uppercase">The evidence</span>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter text-brand-text leading-[1.1]">
            Climate scenarios & <br /> <span className="gradient-text">AI-driven decarbonisation</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            The correlation between ESG performance and carbon emissions is undeniable. 
            Our agents leverage deep climate data to navigate the transition to net zero with scholarly precision.
          </p>
        </div>

        {/* Interactive Filters */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-10 px-12 rounded-[3rem] bg-white/80 backdrop-blur-xl shadow-[20px_20px_40px_#d1d9e6,-20px_-20px_40px_#ffffff] border border-white/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="flex flex-col items-center md:items-start gap-4 relative z-10">
            <span className="text-[8px] font-medium tracking-[0.3em] text-brand-muted uppercase flex items-center gap-2">
              <Globe className="w-3 h-3" /> Select Region
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegionId(region.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-[8px] font-medium tracking-widest uppercase transition-all border",
                    activeRegionId === region.id 
                      ? "bg-brand-primary text-white border-brand-primary shadow-lg scale-105" 
                      : "bg-white text-brand-muted border-brand-border hover:border-brand-primary/30 hover:shadow-md"
                  )}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-px h-16 bg-brand-border hidden md:block relative z-10" />

          <div className="flex flex-col items-center md:items-start gap-4 relative z-10">
            <span className="text-[8px] font-medium tracking-[0.3em] text-brand-muted uppercase flex items-center gap-2">
              <Calendar className="w-3 h-3" /> Time Period
            </span>
            <div className="flex gap-2">
              {['2020', '2022', '2024', '2026'].map((year) => (
                <button
                  key={year}
                  onClick={() => setTimePeriod(year)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-[8px] font-medium tracking-widest uppercase transition-all border",
                    timePeriod === year 
                      ? "bg-brand-secondary text-white border-brand-secondary shadow-lg scale-105" 
                      : "bg-white text-brand-muted border-brand-border hover:border-brand-secondary/30 hover:shadow-md"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {filteredScenarios.map((scenario, index) => (
            <motion.div 
              key={`${index}-${activeRegionId}-${timePeriod}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-12 rounded-[3.5rem] bg-white shadow-[16px_16px_32px_#d1d9e6,-16px_-16px_32px_#ffffff] hover:shadow-[24px_24px_48px_#d1d9e6,-24px_-24px_48px_#ffffff] transition-all duration-500 group relative flex flex-col min-h-[500px] border border-transparent hover:border-brand-primary/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                <Globe className="w-full h-full" />
              </div>
              
              <div className={cn("inline-flex px-5 py-2 rounded-xl text-[10px] font-medium tracking-[0.2em] mb-10 text-white shadow-lg", scenario.color)}>
                {scenario.status}
              </div>
              <h3 className="text-7xl font-display font-medium mb-8 text-brand-text tracking-tighter">{scenario.temp}</h3>
              <p className="text-brand-muted leading-relaxed mb-12 text-[10px] font-normal tracking-widest flex-grow">{scenario.impact}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-medium tracking-[0.3em] text-brand-muted uppercase">
                  <span>Mitigation potential</span>
                  <span className="text-brand-primary">{scenario.potential}%</span>
                </div>
                <div className="h-4 w-full bg-white rounded-xl overflow-hidden p-1 shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${scenario.potential}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className={cn("h-full rounded-lg shadow-lg", scenario.color)} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-12 rounded-[3rem] bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] flex flex-col space-y-10">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-display font-medium text-brand-text tracking-tighter">Carbon reduction trends</h3>
              <p className="text-brand-muted leading-relaxed text-[10px] font-normal tracking-widest uppercase">
                Projected cumulative carbon reduction (%) through the implementation of Agentic AI 
                across global industrial operations.
              </p>
            </div>
            <div className="h-[350px] w-full p-6 bg-white rounded-[2rem] shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredCarbonData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorReduction" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis 
                    dataKey="year" 
                    stroke="#64748b" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10} 
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `${value}%`} 
                    dx={-10} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', border: 'none', borderRadius: '16px', boxShadow: '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff' }}
                    itemStyle={{ color: '#10b981', fontWeight: 'normal', fontSize: '10px' }}
                    formatter={(value: number) => [`${value}%`, 'Reduction']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="reduction" 
                    stroke="#10b981" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorReduction)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="p-12 rounded-[3rem] bg-white shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] flex flex-col space-y-10">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff]">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-display font-medium text-brand-text tracking-tighter">ESG performance by sector</h3>
              <p className="text-brand-muted leading-relaxed text-[10px] font-normal tracking-widest uppercase">
                Comparative ESG scores across key industries following AI-driven 
                strategic transformation and autonomous monitoring.
              </p>
            </div>
            <div className="h-[350px] w-full p-6 bg-white rounded-[2rem] shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={esgData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#64748b" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10} 
                  />
                  <YAxis 
                    stroke="#64748b" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    dx={-10} 
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ backgroundColor: '#ffffff', border: 'none', borderRadius: '16px', boxShadow: '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff' }}
                    itemStyle={{ fontSize: '10px', fontWeight: 'normal' }}
                    formatter={(value: number) => [value, 'ESG score']}
                  />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]} animationDuration={1500}>
                    {esgData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 3 ? '#3b82f6' : '#e2e8f0'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
