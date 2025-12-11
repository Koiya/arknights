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
    const [isOpen, setIsOpen] = useState(false)

    let classURL = `https://raw.githubusercontent.com/PuppiizSunniiz/Arknight-Images/refs/heads/main/classes/class_${operator.profession.toLowerCase()}.png`
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
                                <th className='pr-1 border border-gray-300'>General</th>
                                <th className='pr-1 border border-gray-300'>CC</th>
                              </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className='pr-1 border border-gray-300'>S</td>
                                  <td className='pr-1 border border-gray-300'>2</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>          
                          <div className="grid grid-rows-2 col-start-2 text-center flex items-center">
                            <h2>Skills 2</h2>
                            <table>
                              <thead>
                                <tr>
                                <th>General</th>
                                <th>CC</th>
                              </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>S</td>
                                  <td>2</td>
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
                  "Shu is an extremely powerful support unit. She brings a variety of strong buff effects, massive healing, two game breaking features, and that's all built into a reasonably bulky frame. Guardian's have always been one of the strongest support archetypes in the game, and Shu elevates that to a new level.
Due to that elevation, her Masteries are different from most other Guardians. The non-Blemishine Guardians typically rely on their S1 for strong consistency while their S2/S3s are reserved for more situational moments when their utility is particularly applicable. However, for Shu, a lot of her consistency comes from her sown tiles which are more easily and quickly applied by her S3. In addition, it gives absolutely ridiculous healing, range, buffs, AND a game-breaking stall. It makes it one of the best support oriented skills in the game.
Unusually though, Shu's S3's Mastery gains are notably poor. From SL7 to S3M3 she only gets 16% more personal ATK, 5 ASPD and ATK to her buff, and a 10% reduction to SP costs. Compared to other top skills in the game (especially DPS skills) those upgrades are extremely poor. The big gain across Mastery is actually improving her stall potential, but the difference will rarely matter outside of especially advanced situations. As one of the best skills in the game, it is still extremely worth Mastery. However, if you're early on in your Masteries, it's better to focus on your primary DPS skills first.
Looking beyond that, her S1 is still valuable. It goes by a new name, but is identical to Saria/Nearl/Bassline's S1. However, the value of its Mastery is reduced a bit in comparison since her S3 is so much more important. While S1 is the main go to for the other three, it's a secondary option for Shu. The 50% threshold (which, to be clear, is a good thing) means the application of sown tiles is slower, nor can she extend them as far. As with the other units, be sure to grab the cheap and very valuable breakpoint at S1M1 at least though.
Finally is Shu's S2. It's a worthy skill if you're interested in maximizing your fertile fields, but isn't really necessary otherwise. While Saria's S2 makes her a very worthy M9 as it provides a middle ground between her skills, Shu's S3's SP cost is low enough and the sown tiles strong enough that the middle ground isn't really necessary. S3 is just far more impactful, which leaves her S2 without any special place to shine."
                </CardContent>
                )}
        </Card>
    );

}