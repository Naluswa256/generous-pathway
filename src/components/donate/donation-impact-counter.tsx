import React, { useState, useEffect } from 'react';

interface ImpactMetric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  increment: number;
  duration: number; // in milliseconds
}

const impactMetrics: ImpactMetric[] = [
  {
    label: "Lives Impacted",
    value: 20,
    prefix: "",
    suffix: "+",
    increment: 1,
    duration: 2000
  },
  {
    label: "Donations Received",
    value: 0,
    prefix: "$",
    suffix: "",
    increment: 1,
    duration: 2000
  },
  {
    label: "Communities Served",
    value: 1,
    prefix: "",
    suffix: "",
    increment: 1,
    duration: 2000
  },
  {
    label: "Clean Water Wells",
    value: 0,
    prefix: "",
    suffix: "",
    increment: 1,
    duration: 2000
  }
];

export function DonationImpactCounter() {
  const [counts, setCounts] = useState<number[]>(impactMetrics.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('impact-counter');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const timers = impactMetrics.map((metric, index) => {
      const step = Math.ceil(metric.value / (metric.duration / 50));
      
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          const newValue = newCounts[index] + step;
          
          if (newValue >= metric.value) {
            newCounts[index] = metric.value;
            clearInterval(timers[index]);
          } else {
            newCounts[index] = newValue;
          }
          
          return newCounts;
        });
      }, 50);
    });
    
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible]);
  
  return (
    <section id="impact-counter" className="py-16 bg-charity-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Impact in Numbers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-3xl md:text-5xl font-bold mb-2">
                {metric.prefix}{Math.floor(counts[index]).toLocaleString()}{metric.suffix}
              </div>
              <div className="text-lg text-white/80">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
