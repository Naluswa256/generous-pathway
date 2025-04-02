
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { FeatureCard } from '@/components/ui/feature-card';
import { School, Heart, Home, Users, LucideIcon, Activity, GraduationCap, HelpingHand } from 'lucide-react';

interface DonationUseData {
  name: string;
  value: number;
  color: string;
  icon: LucideIcon;
  description: string;
}

const donationUseData: DonationUseData[] = [
  { 
    name: 'Orphan Support',
    value: 35, 
    color: '#3b82f6', 
    icon: Heart,
    description: 'Provides education, healthcare, and daily necessities for orphaned children.'
  },
  { 
    name: 'Disabled Support',
    value: 25, 
    color: '#10b981', 
    icon: HelpingHand,
    description: 'Funds adaptive equipment, therapy, and vocational training for disabled individuals.'
  },
  { 
    name: 'Elderly Support',
    value: 20, 
    color: '#f59e0b', 
    icon: Home,
    description: 'Covers healthcare, food, and home repairs for elderly grandparents.'
  },
  { 
    name: 'Education',
    value: 15, 
    color: '#6366f1', 
    icon: GraduationCap,
    description: 'Builds schools, trains teachers, and provides learning materials.' 
  },
  { 
    name: 'Admin & Operations',
    value: 5, 
    color: '#64748b', 
    icon: Activity,
    description: 'Covers essential administrative costs to ensure efficient program delivery.'
  }
];

export function DonationUsageChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleMouseEnter = (data: any, index: number) => {
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={donationUseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
                stroke="white"
                strokeWidth={2}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {donationUseData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.7}
                    className="transition-opacity duration-300"
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Allocation']}
                contentStyle={{ borderRadius: '0.5rem', backgroundColor: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                formatter={(value, entry, index) => {
                  return (
                    <span className={`text-sm font-medium ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {value} ({donationUseData[index!].value}%)
                    </span>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <div className="space-y-4 max-w-lg">
            {donationUseData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className={`flex items-center p-4 rounded-lg border transition-all duration-300 ${
                    activeIndex === index ? 'shadow-md bg-white border-transparent' : 'bg-white/50'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center`} style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">{item.name} ({item.value}%)</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
