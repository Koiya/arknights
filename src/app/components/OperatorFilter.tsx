'use client';
import { useState, ChangeEvent, Dispatch} from 'react';

import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ButtonGroup } from "@/components/ui/button-group"
import { Search } from "lucide-react";

import casterIcon from '../images/class_caster.png';
import defenderIcon from '../images/class_defender.png';
import guardIcon from '../images/class_guard.png';
import medicIcon from '../images/class_medic.png';
import sniperIcon from '../images/class_sniper.png';
import supporterIcon from '../images/class_supporter.png';
import specialistIcon from '../images/class_specialist.png';
import vanguardIcon from '../images/class_vanguard.png';

type OperatorFilterProps = {
    searchTerm?: string;
    setSearchTerm: Dispatch<React.SetStateAction<string>>;
    setSelectedRarity: Dispatch<React.SetStateAction<string>>;
    setSelectedClass: Dispatch<React.SetStateAction<string>>;
    setPage: Dispatch<React.SetStateAction<number>>;
};

type ClassButtonProps= {
    img: string;
    className: string;
    internalID: string;
}
export default function OperatorFilter({searchTerm, setSearchTerm, setSelectedRarity, setSelectedClass, setPage}: OperatorFilterProps){
    // const [inputValue, setInputValue] = useState("");
    const [classFilter, setClassFilter] = useState("All");

    const arknightsClasses = [
        {
            name: "Vanguard",
            icon: vanguardIcon.src,
            internalID: "PIONEER"
        },
        {
            name: "Guard",
            icon: guardIcon.src,
            internalID: "WARRIOR"
        },
        {
            name: "Sniper",
            icon: sniperIcon.src,
            internalID: "SNIPER"
        },
        {
            name: "Caster",
            icon: casterIcon.src,
            internalID: "CASTER"
        },
        {
            name: "Medic",
            icon: medicIcon.src,
            internalID: "MEDIC"
        },
        {
            name: "Defender",
            icon: defenderIcon.src,
            internalID: "TANK"
        },
        {
            name: "Supporter",
            icon: supporterIcon.src,
            internalID: "SUPPORT"
        },
        {
            name: "Specialist",
            icon: specialistIcon.src,
            internalID: "SPECIAL"
        }
    ];



    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setPage(1);
        // setInputValue(event.target.value);
        // console.log(event.target.value);
    };
    const handleRarityFilter = (rarity: string) => {
        setSelectedRarity(rarity);
        setPage(1);
    };

    const handleClassFilter = (className: string)=> {
        setSelectedClass(className);
        setPage(1);
    };
    

    function ClassButtons({img, className, internalID}: ClassButtonProps){
        return(
            <ToggleGroupItem value={internalID} className='bg-zinc-800'
                    onClick={() => handleClassFilter(internalID)}
            >
                <img src={img} alt={className} className="w-4 h-4 mr-2"/>
                {className}
            </ToggleGroupItem>
        )

    }

    return(
        <div className="flex flex-row justify-between items-center mb-2">
            <InputGroup className="max-w-sm">
                <InputGroupInput 
                    className="text-white" 
                    placeholder="Search operators..." 
                    value={searchTerm} 
                    onChange={handleInputChange}
                />
                <InputGroupAddon>
                    <Search/>
                </InputGroupAddon>
            </InputGroup>
            <ButtonGroup>
                <Button className="bg-zinc-800"
                        onClick={() => handleRarityFilter("All")}
                >
                    All
                    </Button>
                <Button className="bg-zinc-800"
                        onClick={() => handleRarityFilter("TIER_4")}
                >
                    4★
                </Button>
                <Button className="bg-zinc-800"
                        onClick={() => handleRarityFilter("TIER_5")}
                >
                    5★
                </Button>
                <Button className="bg-zinc-800"
                        onClick={() => handleRarityFilter("TIER_6")}
                >
                    6★
                </Button>
            </ButtonGroup>
            <ToggleGroup type="single" className='text-white'>
                <ToggleGroupItem className='bg-zinc-800'
                value='All'
                        onClick={() => handleClassFilter("All")}
                >
                    All
                </ToggleGroupItem>
                {arknightsClasses.map((c) => (
                    <ClassButtons key={c.name} img={c.icon} className={c.name} internalID={c.internalID}/>
                ))}
            </ToggleGroup>
        </div>
    )
}