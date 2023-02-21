import { sandcastleBanner } from "../assets/images/shoppingBanners"

const shoppingPageData = {
        '0100' : {
            title:'Chairs',
            desc:'',
            filterOption:[
                {
                    name: 'Category',
                    type: 'checkbox',
                    sub: [
                        
                    ]
                }
            ]
        },
        '0101' : {
            title:'LuxuryChairs',
            desc:'',
        }
        ,
        '0102' : {
            title:"Kid's Chairs",
            desc:'',
        }
        ,
        '0103' : {
            title:'Canopy Chairs',
            desc:'',
        },
        '0104' : {
            title:'Chair Accessories',
            desc:'',
        },
        '0200' : {
            title: 'Shelters',
            desc: ''
        },
        '0201' : {
            name: 'Canopies',
            desc:''
        },
        '0202' : {
            name: 'Umbrellas',
            desc: ''
        },
        '0203' : {
            name:'Tents',
            desc:''
        },
        '0204' : {
            name:'Attachable',
            desc:''
        },
        '0300' :{
            name:'On the Beach',
            parent:null,
            desc:''
        }
        ,
        '0301' :{
            name:'Wagons',
            desc:''
        }
        ,
        '0302' :{
            name:'Coolers',
            parent: {name:'On the Beach', id:'0300'},
            desc:"Looking to make the most of your vacation? Don't let warm weather and outdoor activities get in the way of enjoying cool beverages and snacks. We offer only high-quality coolers that are perfect for keeping everything cold and fresh.",
            img: sandcastleBanner,
            relatedCategories:[
                {name: 'Wagons',id: '0301'},
                {name: 'Fishing',id: '0406'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Speakers',id: '0304'},
                {name: 'Drinking',id: '0407'},
                {name: 'Water & Pool',id: '0700'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        'Hardshell' : true,
                        'Softshell': true,
                        'Floating' : true,
                        'Wheeled' : true,
                    },
                },  
                {
                    name: 'Brand',
                    tags: {
                        'Yeti' : true,
                        'RTIC' : true,
                        'Igloo' : true,
                    }
                },
                {
                    name: 'Capacity',
                    tags:{
                        '0-20 Cans' :  true,
                        '20-30 Cans':  true,
                        '31-40 Cans':  true,
                        '40-50 Cans':  true,
                        '50+ Cans' : true
                    }
                },
                {
                    name: 'Deals',
                    tags: {
                        'Standard' : true,
                        'On Sale' : true
                    }
                },
            ]
        }
        ,
        '0303' :{
            name:'Beach & Dry Bags',
            desc:''
        },
        '0304' :{
            name:'Speakers',
            desc:''
        },
        '0305' :{
            name:'Mats',
            desc:''
        },
        '0306' :{
            name:'Shovels & Buckets',
            desc:''
        },
        '0400' :{
            name:'Fun',
            desc:''
        },
        '0401' :{
            name:'Sports',
            desc:''
        },
        '0402' :{
            name:'Games',
            desc:''
        },
        '0403' :{
            name:'Sandcastles',
            desc:''
        },
        '0404' :{
            name:'Bikes',
            desc:''
        },
        '0405' :{
            name:'Bonefire',
            desc:''
        },
        '0406' :{
            name:'Fishing',
            desc:''
        },
        '0407' :{
            name:'Drinking',
            desc:''
        },
        '0500' :{
            name:'Kids',
            desc:''
        },
        '0501' :{
            name:'Infant',
            desc:''
        },
        '0502' :{
            name:'Toddlers',
            desc:''
        },
        '0503' :{
            name:'Shelter',
            desc:''
        },
        '0504' :{
            name:'Stroller & Carriers',
            desc:''
        },
        '0505' :{
            name:'Changing Station',
            desc:''
        },
        '0600' :{
            name:'Electronics',
            desc:''
        },
        '0601' :{
            name:'Speakers',
            desc:''
        },
        '0602' :{
            name:'Fans',
            desc:''
        },
        '0603' :{
            name:'Metal Detectors',
            desc:''
        },
        '0604' :{
            name:'Water Proof Headphones',
            desc:''
        },
        '0700' :{
            name:'Water & Pool',
            desc:''
        },
        '0701' :{
            name:'Surfboards',
            desc:''
        },
        '0709' :{
            name:'Paddleboards',
            desc:''
        },
        '0702' :{
            name:'Skimboards & Boogieboards',
            desc:''
        },
        '0703' :{
            name:'Snorkeling',
            desc:''
        },
        '0704' :{
            name:'Kayaks & Boats',
            desc:''
        },
        '0705' :{
            name:'Inflatables',
            desc:''
        },
        '0706' :{
            name:'Mats & Lounge',
            desc:''
        },
        '0707' :{
            name:'Pool Toys',
            desc:''
        },
        '0708' :{
            name:'Swim Accessories',
            desc:''
        },
        '0800' :{
            name:'Home',
            desc:''
        },
        '0801' :{
            name:'Kitchen',
            desc:''
        },
        '0802' :{
            name:'Bedroom',
            desc:''
        },
        '0803' :{
            name:'Forgot at Home',
            desc:''
        },
        '0804' :{
            name:'Entertainment',
            desc:''
        },
        '0000' : {
            name: 'All Categories',
            desc:'',
        }
     
}

export {
    shoppingPageData,
}