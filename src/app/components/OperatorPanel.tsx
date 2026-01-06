'use client';
import { Operator } from '../types/operator';
import { Noto_Sans } from 'next/font/google'
import { Card, CardHeader, CardContent,CardTitle,CardDescription } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface OperatorProps {
    operator: Operator;
    id: string;
  }

const notoSans = Noto_Sans({
  subsets: ['latin'],
})

export default function OperatorPanel({ operator, id}: OperatorProps){
    //let portraitURL = `https://raw.githubusercontent.com/PuppiizSunniiz/Arknight-Images/refs/heads/main/characters/${id}_1.png`
    let portraitURL = `https://raw.githubusercontent.com/PuppiizSunniiz/Arknight-Images/refs/heads/main/avatars/${id}.png`
    let classURL = `https://raw.githubusercontent.com/PuppiizSunniiz/Arknight-Images/refs/heads/main/classes/class_${operator.profession.toLowerCase()}.png`
    let skillURL = `https://raw.githubusercontent.com/PuppiizSunniiz/Arknight-Images/refs/heads/main/skills/skill_icon_skchr_accast_1.png`
    // console.log(operator);

    function skillsTable(){
      return(
        <table>
        </table>
          );
    }
    
    const [isOpen, setIsOpen] = useState(false)

    let rarityColor = "#d56f16"
    return(
        <Card className={`text-white overflow-hidden bg-zinc-900 hover:shadow-md transition-shadow border border-zinc-800 mx-auto ${notoSans.className}`}>
                <div className="relative h-[180px]">
                  <div className="flex items-center justify-between">
                      <div className='flex-col gap-3 justify-between'>
                        <div className="w-45 h-45 relative scale-[50%] border border-zinc-500">
                          <div className="absolute z-10 top-0 left-0 origin-top-left scale-[25%] bg-black/90 rounded p-1">
                            <img src={classURL}/>
                          </div>
                          {/* Linear gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d56f16]/30"></div>
                          <img className="object-none" src={portraitURL} alt="Logo"/>
                        </div>
                        <CardTitle className="text-center">{operator.name}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <CardDescription className="grid grid-cols-6 gap-4 p-4">
                          <div className="grid grid-rows-2 col-start-1 text-center flex items-center">
                            <h2 className="relative">Skills</h2>
                            <table className='border-collapse border border-gray-500 pr-4'>
                              <thead>
                                <tr>
                                  <th className='pr-1 border border-gray-300'>Skill</th>
                                  <th className='pr-1 border border-gray-300'>Mastery</th>
                                  <th className='pr-1 border border-gray-300'>Story</th>
                                  <th className='pr-1 border border-gray-300'>Advanced</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className='pr-1 border border-gray-300'><img src ={skillURL}/></td>
                                  <td className='pr-1 border border-gray-300'>S2M3</td>
                                  <td className='pr-1 border border-gray-300'>S</td>
                                  <td className='pr-1 border border-gray-300'>2</td>
                                </tr>
                              </tbody>
                              <tbody>
                                <tr>
                                  <td className='pr-1 border border-gray-300'><img src ={skillURL}/></td>
                                  <td className='pr-1 border border-gray-300'>S2M3</td>
                                  <td className='pr-1 border border-gray-300'>S</td>
                                  <td className='pr-1 border border-gray-300'>2</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>          
                        </CardDescription>          
                      </div>
                          <div className="flex items-center gap-1 px-4"
                          onClick={() => setIsOpen(!isOpen)}
                          >
                            Notes 
                            <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </div>
                  </div>
                </div>
                {isOpen && (<CardContent className="font-light">
                  <p>{operator.summary}</p>
                </CardContent>
                )}
        </Card>
    );

}