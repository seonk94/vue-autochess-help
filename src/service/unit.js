const cost1 = [
    {
        cost: '1$',
        name: 'Axe',
        color: 'grey',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/72aa63333a857be1568a00b69072749812292f4d5830ed8a85ff437535adaf4791f589afd65e929bfaeed9e68748effd3569217abdd5bc849369892c17cbca12c92c538c435db3aba2b8be5e5f4f587c707e16535d5b2f20c58eedccc139bf41'
    },
    {
        cost: '1$',
        name: 'Enchantress',
        color: 'grey',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/a2eb156c506c08db8bab7a8851221b5052aaa267050d5f9a2fa0ba5bbcca59429467cd80dd6d733ad3ddb6bfd737a955e88f92a3b670607aa987da570529656e4337c7b907f06f6f1058f77d9cdd5b195a0d58cb583f06bfd7069cbfb8054c50'
    },
    {
        cost: '1$',
        name: 'Ogre Magi',
        color: 'grey',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/0c8907094f01cef5e0977447f4537ecc2dc8e9b1909bcd5dcc5005623eb8b2b3acac077210f75094f3404f3645ac2fa5cac9bfd1450f5cc088417baee3efe7237bf26f1ada8bdd1737576d0b417231932a696c9784f55247a9e0d0f2d104583f'
    },
    {
        cost: '1$',
        name: 'Tusk',
        color: 'grey',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/bfa9ab951c924fe394a82c5828cf0967034869ab8a6ffd516a6404e1fea90cfcde9b30213dce326248a2b3845bb072a48020d71130dcda76184af42d2152323cfb057473def721064a74d1369ccd67dbbbbca6a67eb7fa2a4df4c2e2c25ebe7f'
    },
    {
        cost: '1$',
        name: 'Drow Ranger',
        color: 'grey',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/42347f3fd4170c91ddbecd9da8a6725ee0323e6e32265b89cb55ee5a26bd8e9da02b4905b48479dfbf1d56ed0734d9d51b9583aa04276d3ef526b8570ad5d6c750c4b9edc5206e55570c3291474d5e3dfa9f8e39e5c6fb302976980744ad997e'
    },
]

const cost2 = [
    {
        cost: '2$',
        name: 'Crystal Maiden',
        color: 'black',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/bbebc4f9826c5dddce8d71c5856665ba3e1897d57ca261d87f85992a53a25ab24436d0ef27f14b3e75fa7dd59ad51605ba79b6af3a6c3b7507fd574189868691212e7ec3cd1b892d0d56945fd3ead916db7f83bfc6de7e3cd30645bdd7b2bdf7'
    },
]

const cost3 = [
    {
        cost: '3$',
        name: 'Abaddon',
        color: 'blue',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/4d57a880b9db5fb4d0e2c310b7900498f33b89c7aa322573ff8e58d7f7cee3b62adaf3bac78589b81c1e633d18822173f9242c11aa57b2fb090269968137ce6afae482c492d72ff61be48427443a4290c5078b1f69a76c9f63a08a4bed0376c3'
    },
    /* {
        cost: '3$',
        name: 'Abaddon',
        color: 'blue',
        level: 1,
        img: ''
    } */
]

const cost4 = [
    {
        cost: '4$',
        name: 'Dragon Knight',
        color: 'pink',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/ef91802d4f840f65ecd080e3a80f56a927281d0d3a2e920a1718753009fc6fc07b368884996674905bc688460b28b78072f7070dcd24c353a975483e7531ef560f8381f70585afab914d124267115a073ed4bdbf0c6d4e84b56e0f1783aa987b'
    }
]

const cost5 = [
    {
        cost: '5$',
        name: 'Lich',
        color: 'orange',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/72ac6d8458de13338478d875fadefdb370fc036048ec50171ef7a0b5d171b6b2af0beba113bfc9e04a8e170d74ace78e8db482b681655126433c8e1390fedd8f1ac3b469f54bb93396c49f8fee09758514ac884f283a81beffcf68a052ce3c1d'
    },
    {
        cost: '5$',
        name: 'Tidehunter',
        color: 'orange',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/53707d35b1e9b985e11c2a08e7a585afeecf22776879f460b4a94920274321e149f06c4c24ae748320a3a2b3c93996ef9e3c28bcb068f2adaa01d6555c9078fc03254d91a986467f63862bcb39ba0b5c665250bbac4a3aee19e707e514e49286'
    },
    {
        cost: '5$',
        name: 'Enigma',
        color: 'orange',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/89b82dc618df2c725526e2f5a0d82a42c6354200cf6023f320c3d4e16a330470040e38c5f3887956304fe9ce521ad19a73519e007a8239a8289e575e783832fbf8e360b69460c944c0e62f26d5ca4e0108ec1e39bea5ef2da632a71d2decece3'
    },
    {
        cost: '5$',
        name: 'Gyrocopter',
        color: 'orange',
        level: 1,
        img: 'https://w.namu.la/s/6c379336ab5bf6be228004d2c926c2d98e092c7462a01eae23d13f19cb24f95c02635095bd79446ae3b49e5f2d4e9d22db8d887243d7b838724045f8b7cde9db6dffc352ebb142a5ad5ac11053c4eb73b4c97a2b6878f4f1a3500b88bfe4c228'
    },
    {
        cost: '5$',
        name: 'Techies',
        color: 'orange',
        level: 1,
        img: 'https://s3.namuwikiusercontent.com/s/4259d60290b19ec2a04ba25d98835702ae64d50b1abab1a00d742371201f7b35626283a5816b634d6c4f1cf27d3c4bef2cb0991360e14ab575b3d9abb5e7da95dc36ad698b1df23d324ea0b628ec77ae528df784a14f91749f18d1d11862c340'
    },
]

export const units = [ ...cost1, ...cost2, ...cost3, ...cost4, ...cost5 ]