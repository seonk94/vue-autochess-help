const cost1 = [
    {
        cost: '1$',
        name: 'Axe',
        color: '#adb5bd',
        class: 'Warrior',
        spec: 'Orc',
        level: 1,
        img: require('../assets/unit/Axe.png')
    },
    {
        cost: '1$',
        name: 'Enchantress',
        color: '#adb5bd',
        class: 'Druid',
        spec: 'Beast',
        level: 1,
        img: require('../assets/unit/Enchantress.png')
    },
    {
        cost: '1$',
        name: 'Ogre Magi',
        color: '#adb5bd',
        class: 'Mage',
        spec: 'Ogre',
        level: 1,
        img: require('../assets/unit/Ogre Magi.png')
    },
    {
        cost: '1$',
        name: 'Tusk',
        color: '#adb5bd',
        class: 'Warrior',
        spec: 'Beast',
        level: 1,
        img: require('../assets/unit/Tusk.png')
    },
    {
        cost: '1$',
        name: 'Drow Ranger',
        color: '#adb5bd',
        class: 'Hunter',
        spec: 'Undead',
        level: 1,
        img: require('../assets/unit/Drow Ranger.png')
    },
    {
        cost: '1$',
        name: 'Bounty Hunter',
        color: '#adb5bd',
        class: 'Assassin',
        spec: 'Goblin',
        level: 1,
        img: require('../assets/unit/Bounty Hunter.png')
    },
    {
        cost: '1$',
        name: 'Clockwerk',
        color: '#adb5bd',
        class: 'Mech',
        spec: 'Goblin',
        level: 1,
        img: require('../assets/unit/Clockwerk.png')
    },
    {
        cost: '1$',
        name: 'Tinker',
        color: '#adb5bd',
        class: 'Mech',
        spec: 'Goblin',
        level: 1,
        img: require('../assets/unit/Tinker.png')
    },
    {
        cost: '1$',
        name: 'Shadow Shaman',
        color: '#adb5bd',
        class: 'Shaman',
        spec: 'Troll',
        level: 1,
        img: require('../assets/unit/Shadow Shaman.png')
    },
    {
        cost: '1$',
        name: 'Bat Rider',
        color: '#adb5bd',
        class: 'Knight',
        spec: 'Troll',
        level: 1,
        img: require('../assets/unit/Bat Rider.png')
    },
    {
        cost: '1$',
        name: 'Anti-Mage',
        color: '#adb5bd',
        class: 'Demon Hunter',
        spec: 'Elf',
        level: 1,
        img: require('../assets/unit/Anti-Mage.png')
    },
    {
        cost: '1$',
        name: 'Tiny',
        color: '#adb5bd',
        class: 'Warrior',
        spec: 'Elementals',
        level: 1,
        img: require('../assets/unit/Tiny.png')
    },
]

const cost2 = [
    {
        cost: '2$',
        name: 'Crystal Maiden',
        color: '#91a7ff',
        class: 'Mage',
        spec: 'Human',
        level: 1,
        img: require('../assets/unit/Crystal Maiden.png')
    },
    {
        cost: '2$',
        name: 'Beastmaster',
        color: '#91a7ff',
        class: 'Hunter',
        spec: 'Orc',
        level: 1,
        img: require('../assets/unit/Beastmaster.png')
    },
    {
        cost: '2$',
        name: 'Juggernaut',
        color: '#91a7ff',
        class: 'Warrior',
        spec: 'Orc',
        level: 1,
        img: require('../assets/unit/Juggernaut.png')
    },
    {
        cost: '2$',
        name: 'Timbersaw',
        color: '#91a7ff',
        class: 'Mech',
        spec: 'Goblin',
        level: 1,
        img: require('../assets/unit/Timbersaw.png')
    },
    {
        cost: '2$',
        name: 'Queen of Pain',
        color: '#91a7ff',
        class: 'Assassin',
        spec: 'Demon',
        level: 1,
        img: require('../assets/unit/Queen of Pain.png')
    },
    {
        cost: '2$',
        name: 'Puck',
        color: '#91a7ff',
        class: 'Mage',
        spec: ['Elf', 'Dragon'],
        level: 1,
        img: require('../assets/unit/Puck.png')
    },
    {
        cost: '2$',
        name: 'Witch Doctor',
        color: '#91a7ff',
        class: 'Warlock',
        spec: 'Troll',
        level: 1,
        img: require('../assets/unit/Witch Doctor.png')
    },
    {
        cost: '2$',
        name: 'Slardar',
        color: '#91a7ff',
        class: 'Warrior',
        spec: 'Naga',
        level: 1,
        img: require('../assets/unit/Slardar.png')
    },
    {
        cost: '2$',
        name: 'Chaos Knight',
        color: '#91a7ff',
        class: 'Knight',
        spec: 'Demon',
        level: 1,
        img: require('../assets/unit/Chaos Knight.png')
    },
    {
        cost: '2$',
        name: 'Treant Protector',
        color: '#91a7ff',
        class: 'Druid',
        spec: 'Elf',
        level: 1,
        img: require('../assets/unit/Treant Protector.png')
    },
    {
        cost: '2$',
        name: 'Luna',
        color: '#91a7ff',
        class: 'Knight',
        spec: 'Elf',
        level: 1,
        img: require('../assets/unit/Luna.png')
    },
    {
        cost: '2$',
        name: 'Nature\'s Prophet',
        color: '#91a7ff',
        class: 'Druid',
        spec: 'Elf',
        level: 1,
        img: require('../assets/unit/Nature\'s Prophet.png')
    },
    {
        cost: '2$',
        name: 'Morphling',
        color: '#91a7ff',
        class: 'Assassin',
        spec: 'Elementals',
        level: 1,
        img: require('../assets/unit/Morphling.png')
    },
    
]

const cost3 = [
    {
        cost: '3$',
        name: 'Abaddon',
        color: '#3b5bdb',
        class: 'Knight',
        spec: 'Undead',
        level: 1,
        img: require('../assets/unit/Abaddon.png')
    },
    {
        cost: '3$',
        name: 'Shadow Fiend',
        color: '#3b5bdb',
        class: 'Warlock',
        spec: 'Demon',
        level: 1,
        img: require('../assets/unit/Shadow Fiend.png')
    },
    {
        cost: '3$',
        name: 'Lycan',
        color: '#3b5bdb',
        class: 'Warrior',
        spec: ['Human', 'Beast'],
        level: 1,
        img: require('../assets/unit/Lycan.png')
    },
    {
        cost: '3$',
        name: 'Slark',
        color: '#3b5bdb',
        class: 'Assassin',
        spec: 'Naga',
        level: 1,
        img: require('../assets/unit/Slark.png')
    },
    {
        cost: '3$',
        name: 'Phantom Assassin',
        color: '#3b5bdb',
        class: 'Assassin',
        spec: 'Elf',
        level: 1,
        img: require('../assets/unit/Phantom Assassin.png')
    },
    {
        cost: '3$',
        name: 'Terrorblade',
        color: '#3b5bdb',
        class: 'Demon Hunter',
        spec: 'Demon',
        level: 1,
        img: require('../assets/unit/Terrorblade.png')
    },
    {
        cost: '3$',
        name: 'Sand King',
        color: '#3b5bdb',
        class: 'Assassin',
        spec: 'Beast',
        level: 1,
        img: require('../assets/unit/Sand King.png')
    },
    {
        cost: '3$',
        name: 'Razor',
        color: '#3b5bdb',
        class: 'Mage',
        spec: 'Elementals',
        level: 1,
        img: require('../assets/unit/Razor.png')
    },
    {
        cost: '3$',
        name: 'Lina',
        color: '#3b5bdb',
        class: 'Mage',
        spec: 'Human',
        level: 1,
        img: require('../assets/unit/Lina.png')
    },
    {
        cost: '3$',
        name: 'Viper',
        color: '#3b5bdb',
        class: 'Assassin',
        spec: 'Dragon',
        level: 1,
        img: require('../assets/unit/Viper.png')
    },
    {
        cost: '3$',
        name: 'Sniper',
        color: '#3b5bdb',
        class: 'Hunter',
        spec: 'Dwarf',
        level: 1,
        img: require('../assets/unit/Sniper.png')
    }
]

const cost4 = [
    {
        cost: '4$',
        name: 'Dragon Knight',
        color: '#e64980',
        class: 'Knight',
        spec: ['Human', 'Dragon'],
        level: 1,
        img: require('../assets/unit/Dragon Knight.png')
    },
    {
        cost: '4$',
        name: 'Lone Druid',
        color: '#e64980',
        class: 'Druid',
        spec: 'Beast',
        level: 1,
        img: require('../assets/unit/Lone Druid.png')
    },
    {
        cost: '4$',
        name: 'Kunkka',
        color: '#e64980',
        class: 'Warrior',
        spec: 'Human',
        level: 1,
        img: require('../assets/unit/Kunkka.png')
    },
    {
        cost: '4$',
        name: 'Medusa',
        color: '#e64980',
        class: 'Hunter',
        spec: 'Naga',
        level: 1,
        img: require('../assets/unit/Medusa.png')
    },
    {
        cost: '4$',
        name: 'Templar Assassin',
        color: '#e64980',
        class: 'Assassin',
        spec: 'Elf',
        level: 1,
        img: require('../assets/unit/Templar Assassin.png')
    },
    {
        cost: '4$',
        name: 'Disruptor',
        color: '#e64980',
        class: 'Shaman',
        spec: 'Orc',
        level: 1,
        img: require('../assets/unit/Disruptor.png')
    },
    {
        cost: '4$',
        name: 'Doom',
        color: '#e64980',
        class: 'Warrior',
        spec: 'Demon',
        level: 1,
        img: require('../assets/unit/Doom.png')
    },
    {
        cost: '4$',
        name: 'Alchemist',
        color: '#e64980',
        class: 'Warlock',
        spec: 'Goblin',
        level: 1,
        img: require('../assets/unit/Alchemist.png')
    },
    {
        cost: '4$',
        name: 'Necrophos',
        color: '#e64980',
        class: 'Warlock',
        spec: 'Undead',
        level: 1,
        img: require('../assets/unit/Necrophos.png')
    },
    {
        cost: '4$',
        name: 'Troll Warlord',
        color: '#e64980',
        class: 'Warrior',
        spec: 'Troll',
        level: 1,
        img: require('../assets/unit/Troll Warlord.png')
    },
    {
        cost: '4$',
        name: 'Keeper of the Light',
        color: '#e64980',
        class: 'Mage',
        spec: 'Human',
        level: 1,
        img: require('../assets/unit/Keeper of the Light.png')
    },
]

const cost5 = [
    {
        cost: '5$',
        name: 'Lich',
        color: '#fd7e14',
        class: 'Mage',
        spec: 'Undead',
        level: 1,
        img: require('../assets/unit/Lich.png')
    },
    {
        cost: '5$',
        name: 'Tidehunter',
        color: '#fd7e14',
        class: 'Hunter',
        spec: 'Naga',
        level: 1,
        img: require('../assets/unit/Tidehunter.png')
    },
    {
        cost: '5$',
        name: 'Enigma',
        color: '#fd7e14',
        class: 'Warlock',
        spec: 'Elementals',
        level: 1,
        img: require('../assets/unit/Enigma.png')
    },
    {
        cost: '5$',
        name: 'Gyrocopter',
        color: '#fd7e14',
        class: 'Mech',
        spec: 'Dwarf',
        level: 1,
        img: require('../assets/unit/Gyrocopter.png')
    },
    {
        cost: '5$',
        name: 'Techies',
        color: '#fd7e14',
        class: 'Mech',
        spec: 'Goblin',
        level: 1,
        img: require('../assets/unit/Techies.png')
    },
    {
        cost: '5$',
        name: 'Death Prophet',
        color: '#fd7e14',
        class: '',
        spec: '',
        level: 1,
        img: require('../assets/unit/Death Prophet.png')
    },
]

export const units = [ ...cost1, ...cost2, ...cost3, ...cost4, ...cost5 ]