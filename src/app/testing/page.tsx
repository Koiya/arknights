'use client';
import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';

// Sample data
const operators = [
  {
    name: "Magallan",
    class: "Supporter",
    rarity: "6",
    avatar: "M",
    skills: [
      { name: "S1M3", ranks: { general: "C", is: "C+", cc: "--" } },
      { name: "S3M3", ranks: { general: "C-", is: "C-", cc: "--" } },
      { name: "S2M3", ranks: { general: "None", is: "None", cc: "None" } }
    ],
    summary: "The non-Ling Summoners are a bit of an oddity when it comes to general consideration. What they bring to the table comes at a high cost (deployment slots) which has always meant they've always leaned more towards niche clears. In Magallan's case, she's had a pretty rough go of it. Her summons don't block, don't renew, and also don't have great DPS."
  },
  {
    name: "Texas",
    class: "Vanguard",
    rarity: "6",
    avatar: "T",
    skills: [
      { name: "S1M1", ranks: { general: "S", is: "S", cc: "A" } },
      { name: "S1M3", ranks: { general: "A", is: "A+", cc: "B" } },
      { name: "S2M3", ranks: { general: "B", is: "A", cc: "C" } }
    ],
    summary: "Texas is a versatile Vanguard who excels in early game deployment with strong DP generation and crowd control capabilities. S1M1 represents exceptional value for the minimal investment required."
  },
  {
    name: "SilverAsh",
    class: "Guard",
    rarity: "6",
    avatar: "S",
    skills: [
      { name: "S3M3", ranks: { general: "S", is: "S", cc: "A+" } }
    ],
    summary: "SilverAsh's S3M3 (Truesilver Slash) is one of the most iconic and powerful skills in the game, providing massive AoE physical damage that can clear entire waves of enemies."
  },
  {
    name: "Eyjafjalla",
    class: "Caster",
    rarity: "6",
    avatar: "E",
    skills: [
      { name: "S2M1", ranks: { general: "A+", is: "A+", cc: "A" } },
      { name: "S3M3", ranks: { general: "S", is: "S", cc: "A+" } }
    ],
    summary: "Eyjafjalla is the premier Arts damage dealer with exceptional burst potential. Her S3M3 provides devastating AoE damage, while S2M1 offers an excellent early breakpoint."
  },
  {
    name: "Blaze",
    class: "Guard",
    rarity: "6",
    avatar: "B",
    skills: [
      { name: "S2M3", ranks: { general: "A+", is: "A", cc: "B" } }
    ],
    summary: "Blaze's S2 provides unmatched lane-holding capability with her permanent duration and block-3. She's the gold standard for set-and-forget damage dealers."
  }
];

const getRankVariant = (rank) => {
  const variants = {
    'S': 'bg-gradient-to-r from-pink-500 to-rose-500 text-white',
    'A+': 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white',
    'A': 'bg-gradient-to-r from-emerald-500 to-teal-400 text-white',
    'B': 'bg-gradient-to-r from-amber-500 to-yellow-400 text-white',
    'C+': 'bg-gradient-to-r from-orange-300 to-amber-300 text-gray-800',
    'C': 'bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800',
    'C-': 'bg-gradient-to-r from-pink-300 to-yellow-200 text-gray-800',
    'None': 'bg-gray-200 text-gray-600',
    '--': 'bg-gray-100 text-gray-400 border-2 border-dashed border-gray-300'
  };
  return variants[rank] || 'bg-gray-100 text-gray-400';
};

const OperatorRow = ({ operator }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                {operator.avatar}
              </div>
              <div>
                <CardTitle className="text-lg">{operator.name}</CardTitle>
                <CardDescription>{operator.rarity}★ {operator.class}</CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {operator.skills.map((skill, idx) => (
                  <Badge key={idx} className={`${getRankVariant(skill.ranks.general)} font-semibold`}>
                    {skill.ranks.general}
                  </Badge>
                ))}
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        </CardHeader>
      </div>

      {isExpanded && (
        <CardContent className="pt-0 border-t">
          <div className="space-y-3 mt-4">
            {operator.skills.map((skill, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-bold text-sm min-w-[60px]">{skill.name}</span>
                  <div className="flex gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 uppercase font-medium min-w-[50px]">General</span>
                      <Badge className={`${getRankVariant(skill.ranks.general)} font-semibold`}>
                        {skill.ranks.general}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 uppercase font-medium min-w-[50px]">IS</span>
                      <Badge className={`${getRankVariant(skill.ranks.is)} font-semibold`}>
                        {skill.ranks.is}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 uppercase font-medium min-w-[50px]">CC</span>
                      <Badge className={`${getRankVariant(skill.ranks.cc)} font-semibold`}>
                        {skill.ranks.cc}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              {/*operator.summary*/}
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default function Testing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredOperators = useMemo(() => {
    return operators.filter(op => {
      const matchesFilter = filter === 'all' || 
        op.rarity === filter || 
        op.class.toLowerCase() === filter.toLowerCase();
      
      const matchesSearch = searchTerm === '' || 
        op.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        op.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        op.skills.some(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesFilter && matchesSearch;
    });
  }, [searchTerm, filter]);

  const filters = [
    { label: 'All', value: 'all' },
    { label: '6★', value: '6' },
    { label: '5★', value: '5' },
    { label: 'Vanguards', value: 'vanguard' },
    { label: 'Supporters', value: 'supporter' },
    { label: 'Guards', value: 'guard' },
    { label: 'Casters', value: 'caster' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="mx-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-2xl">📊 Operator Mastery Database</CardTitle>
            <CardDescription>
              Search and filter through operator mastery recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search operators, classes, or skills (e.g., Magallan, S1M3)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <Button
                  key={f.value}
                  variant={filter === f.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(f.value)}
                >
                  {f.label}
                </Button>
              ))}
            </div>

            <p className="text-sm text-gray-500">
              Showing {filteredOperators.length} of {operators.length} operators
            </p>
          </CardContent>
        </Card>

        <div className="space-y-2">
          {filteredOperators.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500">No operators found</p>
              </CardContent>
            </Card>
          ) : (
            filteredOperators.map((op, idx) => (
              <OperatorRow key={idx} operator={op} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}