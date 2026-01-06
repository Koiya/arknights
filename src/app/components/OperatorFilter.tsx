'use client';
import { useState, ChangeEvent, Dispatch} from 'react';

import { Button } from "@/components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
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
    setPage?: Dispatch<React.SetStateAction<number>>;
};

type ClassButtonProps= {
    img: string;
    className: string;
}
export default function OperatorFilter({searchTerm, setSearchTerm, setPage}: OperatorFilterProps){
    // const [inputValue, setInputValue] = useState("");
    const [classFilter, setClassFilter] = useState("All");

    const arknightsClasses = [
        {
            name: "Vanguard",
            icon: vanguardIcon.src
        },
        {
            name: "Guard",
            icon: guardIcon.src
        },
        {
            name: "Sniper",
            icon: sniperIcon.src
        },
        {
            name: "Caster",
            icon: casterIcon.src
        },
        {
            name: "Medic",
            icon: medicIcon.src
        },
        {
            name: "Defender",
            icon: defenderIcon.src
        },
        {
            name: "Supporter",
            icon: supporterIcon.src
        },
        {
            name: "Specialist",
            icon: specialistIcon.src
        }
    ];



    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPage && setPage(1);
        setSearchTerm(event.target.value);
        // setInputValue(event.target.value);
        // console.log(event.target.value);
    };

    const handleClick = () => {
        console.log("Input value is: " + searchTerm);
    };


    const handleClassFilter = (className: string) => {
            console.log("Class filter clicked: " + className);
    }


    const handleRarityFilter = (rarity: string) => {
            console.log("Rarity filter clicked: " + rarity);
    }


    function ClassButtons({img, className}: ClassButtonProps){
        return(
            <Button className='bg-zinc-800'
                    onClick={() => handleClassFilter(className)}
            >
                <img src={img} alt={className} className="w-4 h-4 mr-2"/>
                {className}
            </Button>
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
            <ButtonGroup className="">
                <Button className='bg-zinc-800'>All</Button>
                {arknightsClasses.map((c) => (
                    <ClassButtons key={c.name} img={c.icon} className={c.name}/>
                ))}
            </ButtonGroup>
        </div>
    )
}