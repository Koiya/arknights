import casterIcon from '../images/class_caster.png';
import defenderIcon from '../images/class_defender.png';
import guardIcon from '../images/class_guard.png';
import medicIcon from '../images/class_medic.png';
import sniperIcon from '../images/class_sniper.png';
import supporterIcon from '../images/class_supporter.png';
import specialistIcon from '../images/class_specialist.png';
import vanguardIcon from '../images/class_vanguard.png';

//Class icon with black background
import casterIconb from '../images/black/icon_profession_caster_large.png';
import defenderIconb from '../images/black/icon_profession_defender_large.png';
import guardIconb from '../images/black/icon_profession_guard_large.png';
import medicIconb from '../images/black/icon_profession_medic_large.png';
import sniperIconb from '../images/black/icon_profession_sniper_large.png';
import supporterIconb from '../images/black/icon_profession_supporter_large.png';
import specialistIconb from '../images/black/icon_profession_specialist_large.png';
import vanguardIconb from '../images/black/icon_profession_vanguard_large.png';


export const akClassMap = [
        {
            name: "Vanguard",
            icon: vanguardIcon.src,
            iconb: vanguardIconb.src,
            internalID: "PIONEER"
        },
        {
            name: "Guard",
            icon: guardIcon.src,
            iconb: guardIconb.src,
            internalID: "WARRIOR"
        },
        {
            name: "Sniper",
            icon: sniperIcon.src,
            iconb: sniperIconb.src,
            internalID: "SNIPER"
        },
        {
            name: "Caster",
            icon: casterIcon.src,
            iconb: casterIconb.src,
            internalID: "CASTER"
        },
        {
            name: "Medic",
            icon: medicIcon.src,
            iconb: medicIconb.src,
            internalID: "MEDIC"
        },
        {
            name: "Defender",
            icon: defenderIcon.src,
            iconb: defenderIconb.src,
            internalID: "TANK"
        },
        {
            name: "Supporter",
            icon: supporterIcon.src,
            iconb: supporterIconb.src,
            internalID: "SUPPORT"
        },
        {
            name: "Specialist",
            icon: specialistIcon.src,
            iconb: specialistIconb.src,
            internalID: "SPECIAL"
        }
    ];

