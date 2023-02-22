import { sandcastleBanner, chairsBanner, funBanner, homeBanner, kidsBanner, petsBanner, shelterBanner, electBanner, waterBanner, allBanner} from "../assets/images/shoppingBanners"

const shoppingPageData = {
        '0100' : {
            title:'Chairs',
            parent: {name: 'All Categories', id:'0000'},
            desc:"Relax and soak up the sun in style with our high-quality beach chairs. Our chairs are designed for maximum comfort and convenience, with adjustable features to accommodate different people and positions.",
            img: chairsBanner,
            relatedCategories:[
                {name: 'Luxury Chairs', id:'0101'},
                {name: "Kid's Chairs", id:'0102'},
                {name: 'Canopy Chairs', id:'0103'},
                {name: 'Chair Accessories', id:'0104'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0101' : {
            title:'Luxury Chairs',
            parent: {name: 'All Chairs', id:'0100'},
            desc:'Looking for the ultimate beach relaxation experience? Our luxury rental chairs are the perfect solution. Enjoy high-quality, stylish chairs with features like adjustable headrests, cup holders, and more.',
            img: chairsBanner,
            relatedCategories:[
                {name: 'Canopies', id:'0201'},
                {name: 'Umbrellas', id: '0202'},
                {name: 'Wagons', id: '0301'},
                {name: 'Coolers', id: '0302'},
                {name: "Kid's Chairs", id:'0102'},
                {name: 'Chair Accessories', id:'0104'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0102' : {
            title:"Kid's Chairs",
            parent: {name: 'All Chairs', id:'0100'},
            desc:"Don't let uncomfortable chairs ruin your family's beach day. Our rental kid's chairs are perfect for young beachgoers. Our chairs are lightweight and easy to carry, making it simple for families to enjoy a comfortable day at the beach.",
            img: chairsBanner,
            relatedCategories:[
                {name: 'Luxury Chairs', id:'0101'},
                {name: 'Toddlers', id:'0502'},
                {name: 'Strollers', id:'0504'},
                {name: 'Sandcastles', id:'0403'},
                {name: 'Games', id:'0402'},
                {name: 'Changing Station', id:'0505'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0103' : {
            title:'Canopy Chairs',
            parent: {name: 'All Chairs', id:'0100'},
            desc:'Worried about too much sun on your beach vacation? Our canopy chairs provide the perfect solution. With adjustable canopies to keep you cool and protected, our chairs are the perfect way to enjoy your day at the beach without worrying about sunburn.',
            img: chairsBanner,
            relatedCategories:[
                {name: 'Luxury Chairs', id:'0101'},
                {name: 'Canopies', id:'0201'},
                {name: 'Umbrellas', id:'0202'},
                {name: 'Coolers', id:'0302'},
                {name: 'Games', id:'0402'},
                {name: 'Speakers', id:'0601'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0104' : {
            title:'Chair Accessories',
            parent: {name: 'All Chairs', id:'0100'},
            desc:'Looking to take your beach day to the next level? Our chair accessories provide the perfect solution. From umbrellas and canopies to cup holders and side tables, we have everything you need to make your day at the beach as comfortable as possible.',
            img: chairsBanner,
            relatedCategories:[
                {name: 'Luxury Chairs', id:'0101'},
                {name: 'Attachable Shelter', id:'0204'},
                {name: 'Coolers', id:'0302'},
                {name: 'Mats', id:'0305'},
                {name: 'Fishing', id:'0406'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0200' : {
            title:'Shelters',
            parent: {name: 'All Categories', id:'0000'},
            desc:'Want to stay out of the sun and wind on your beach vacation? Our beach shelters are the perfect solution. Our rental shelters provide shade and protection from the elements, giving you a comfortable and enjoyable beach experience.',
            img: shelterBanner,
            relatedCategories:[
                {name: 'Canopies', id:'0201'},
                {name: 'Umbrellas', id:'0202'},
                {name: 'Tents', id:'0203'},
                {name: 'Attachable', id:'0204'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0201' : {
            title:'Canopies',
            parent: {name: 'All Shelters', id:'0200'},
            desc:'Our beach canopies provide the perfect shade on a hot summer day. Designed with ease of use in mind, our canopies are easy to set up and take down. Rent our chairs with canopies for a shady and comfortable beach experience.',
            img: shelterBanner,
            relatedCategories:[
                {name: 'Tents', id:'0203'},
                {name: 'Umbrellas', id:'0202'},
                {name: 'Beachbags', id:'0303'},
                {name: 'Tables', id:'0307'},
                {name: 'Games', id:'0402'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0202' : {
            title:'Umbrellas',
            parent: {name: 'All Shelters', id:'0200'},
            desc:"Stay cool on your beach vacation with our rental umbrellas. Perfect for protecting you from the sun's rays, our umbrellas are easy to set up and adjust. Don't let the sun ruin your day at the beach – bring one of our umbrellas and stay cool and comfortable all day long.",
            img: shelterBanner,
            relatedCategories:[
                {name: 'Tents', id:'0203'},
                {name: 'Canopies', id:'0201'},
                {name: 'Beachbags', id:'0303'},
                {name: 'Tables', id:'0307'},
                {name: 'Games', id:'0402'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0203' : {
            title:'Tents',
            parent: {name: 'All Shelters', id:'0200'},
            desc:'Take your beach day to the next level with our rental tents. Our tents provide shade and protection from the sun and wind, allowing you to enjoy your day at the beach in comfort.',
            img: shelterBanner,
            relatedCategories:[
                {name: 'Canopies', id:'0201'},
                {name: 'Umbrellas', id:'0202'},
                {name: 'Beachbags', id:'0303'},
                {name: 'Tables', id:'0307'},
                {name: 'Games', id:'0402'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0204' : {
            title:'Attachable',
            parent: {name: 'All Shelters', id:'0200'},
            desc:"Our attachable umbrellas and canopies are the perfect solution to protect you from the sun during your beach day. Designed to attach easily to your beach chair or lounge, our umbrellas and canopies provide shade and comfort, allowing you to enjoy the sun without the worry of harmful UV rays.",
            img: shelterBanner,
            relatedCategories:[
                {name: 'Tents', id:'0203'},
                {name: 'Umbrellas', id:'0202'},
                {name: 'Canopies', id:'0201'},
                {name: 'Tables', id:'0307'},
                {name: 'Games', id:'0402'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0300' : {
            title:'On the Beach',
            parent: {name: 'All Categories', id:'0000'},
            desc:'Looking for the perfect gear to make the most of your beach day? Our rental beach gear has everything you need, from wagons to speakers and coolers. Our gear is high-quality and perfect for your beach day. ',
            img: sandcastleBanner,
            relatedCategories:[
                {name: 'Wagons', id:'0301'},
                {name: 'Coolers', id:'0302'},
                {name: 'Beach & Dry Bags', id:'0303'},
                {name: 'Mats', id:'0305'},
                {name: 'Shovels & Buckets', id:'0306'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0301' : {
            title:'Wagons',
            parent: {name: 'All On the Beach Gear', id:'0300'},
            desc:"Our beach wagons are the perfect solution to make your next beach day easier. Designed to carry all your beach gear, including chairs, coolers, towels, and more, our wagons are easy to use. You won't have to worry about lugging everything to and from the beach by hand. ",
            img: sandcastleBanner,
            relatedCategories:[
                {name: 'Water Toys',id: '0707'},
                {name: 'Strollers',id: '0504'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Bikes',id: '0404'},
                {name: 'Sandcastles',id: '0403'},
                {name: 'Water & Pool',id: '0700'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        'Wagon' : true
                    }
                },
            ]
        },
        '0302' :{
            title:'Coolers',
            parent: {name: 'All On the Beach Gear', id:'0300'},
            desc:"Looking to make the most of your vacation? Don't let warm weather and outdoor activities get in the way of enjoying cool beverages and snacks. We offer only high-quality coolers that are perfect for keeping everything cold and fresh.",
            img: sandcastleBanner,
            relatedCategories:[
                {name: 'Wagons',id: '0301'},
                {name: 'Fishing',id: '0406'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Speakers',id: '0601'},
                {name: 'Party',id: '0407'},
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
                }
            ]
        }
        ,
        '0303' : {
            title:'Beach & Dry Bags',
            parent: {name: 'All On the Beach Gear', id:'0300'},
            desc:'Our beach and dry bags are high-quality and durable, designed to keep your belongings safe and dry during your beach day. Enjoy a worry-free day at the beach with our beach & dry bags.',
            img: sandcastleBanner,
            relatedCategories:[
                {name: 'Wagons',id: '0301'},
                {name: 'Kids',id: '0500'},
                {name: 'Games',id: '0402'},
                {name: 'Speakers',id: '0601'},
                {name: 'Sports',id: '0401'},
                {name: 'Water & Pool',id: '0700'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0305' : {
            title:'Mats',
            parent: {name: 'All On the Beach Gear', id:'0300'},
            desc:"Our mats are the perfect addition to your beach day. They're designed to keep you comfortable and sand-free while enjoying the sun, surf, and sand. Made of high-quality materials, our mats are durable and comfortable.",
            img: sandcastleBanner,
            relatedCategories:[
                {name: 'Wagons',id: '0301'},
                {name: 'Shelters',id: '0200'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Speakers',id: '0601'},
                {name: 'Games',id: '0402'},
                {name: 'Canopies',id: '0201'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0306' :{
            title:'Shovels & Buckets',
            parent: {name: 'All On the Beach Gear', id:'0300'},
            desc:"Make your little ones' beach day even more fun with our shovels and buckets. Our high-quality beach toys are perfect for building sandcastles and creating memories. Easy to use and durable, our rental shovels and buckets are the perfect addition to your beach day.",
            img: sandcastleBanner,
            relatedCategories:[
                {name: 'Wagons',id: '0301'},
                {name: 'Sandcasltes',id: '0403'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Fishing',id: '0406'},
                {name: 'Tables',id: '0307'},
                {name: 'Water Toys',id: '0707'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },  '0307' :{
            title:'Tables',
            parent: {name: 'All On the Beach Gear', id:'0300'},
            desc:"Our beach tables provide a convenient and practical solution for enjoying your day on the beach. These sturdy tables are perfect for holding food, drinks, and other belongings, and are easy to set up and take down. With adjustable heights and various sizes available, our beach tables are versatile enough to accommodate any beachgoer.",
            img: sandcastleBanner,
            relatedCategories:[
                {name: 'Wagons',id: '0301'},
                {name: 'Games',id: '0402'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Shelters',id: '0200'},
                {name: 'Coolers',id: '0302'},
                {name: 'Coolers',id: '0302'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0400' :{
            title:'Fun',
            parent: {name: 'All Categories', id:'0000'},
            desc:"Enjoy your next beach adventure to the fullest with our high-quality rental gear. Whether you're looking for some fun with for a game of volleyball or a late night bonefire, we have everything you need for a memorable day at the beach.",
            img: funBanner,
            relatedCategories:[
                {name:'Sports', id:'0401'},
                {name:'Games',  id:'0402'},
                {name:'Sandcastles', id:'0403'},
                {name:'Bikes',  id:'0404'},
                {name:'Bonefires',  id:'0405'},
                {name:'Fishing', id:'0406'},
                {name:'Party', id:'0407'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0401' :{
            title:'Sports',
            parent: {name: 'All Fun', id:'0400'},
            desc:'Looking to stay active on your beach vacation? Our sports equipment has everything you need to have fun in the sun, including volleyball, football, and more. Our sports equipment is high-quality making it the perfect addition to your beach day. Get moving and make the most of your beach vacation with our sports equipment.',
            img: funBanner,
            relatedCategories:[
                {name: 'Games',id: '0402'},
                {name: 'Fishing',id: '0406'},
                {name: 'Speakers',id: '0601'},
                {name: 'Kayaks',id: '0704'},
                {name: 'Hobbies',id: '0604'},
                {name: 'Swim Accessories', id:'0708'},
                {name: 'Surfboards', id:'0701'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0402' :{
            title:'Games',
            parent: {name: 'All Fun', id:'0400'},
            desc:'Our rental beach games are the perfect addition to your day at the beach. From frisbees to paddleball, we have everything you need to stay active and entertained on the sand. Our beach games are high-quality and durable, designed to withstand the wear and tear of a day in the sun. Make the most of your beach day by renting our fun and exciting games.',
            img: funBanner,
            relatedCategories:[
                {name: 'Sports',id: '0401'},
                {name: 'Mats',id: '0406'},
                {name: 'Tables',id: '0307'},
                {name: 'Kids',id: '0500'},
                {name: 'Canopies',id: '0201'},
                {name: 'Hobbies',id: '0700'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0403' :{
            title:'Sandcastles',
            parent: {name: 'All Fun', id:'0400'},
            desc:'Our sandcastle equipment is the perfect addition to your beach day. With a variety of shovels, buckets, and molds available, you and your family can create your own beachfront masterpiece. Our equipment is made of high-quality materials, ensuring durability and easy use for all ages.',
            img: funBanner,
            relatedCategories:[
                {name: 'Games',id: '0402'},
                {name: 'Shovels & Buckets',id: '0306'},
                {name: 'Kids',id: '0500'},
                {name: 'Wagons',id: '0301'},
                {name: 'Hobbies',id: '0700'},
                {name: 'Water Toys', id:'0707'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0404' :{
            title:'Bikes',
            parent: {name: 'All Fun', id:'0400'},
            desc:'Our bikes are the perfect way to explore the beach and its surroundings. With only the best bikes available, you can enjoy a leisurely ride along the shoreline or take a more adventurous path through the dunes. Our bikes are easy to rent and use, so you can spend more time enjoying your beach day.',
            img: funBanner,
            relatedCategories:[
                {name: 'Beachbags',id: '0303'},
                {name: 'Strollers',id: '0504'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Hobby Electronics',id: '0603'},
                {name: 'Home',id: '0403'},
                {name: 'Water & Pool',id: '0700'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0405' :{
            title:'Bonefires',
            parent: {name: 'All Fun', id:'0400'},
            desc:'Check out our beach bonfire equipment for the perfect beach evening. Our bonefire items includes everything you need, from fire pits to chairs, and we make it easy for you to enjoy a beautiful beach bonfire with your family and friends.',
            img: funBanner,
            relatedCategories:[
                {name: 'Beachbags',id: '0303'},
                {name: 'Party',id: '0407'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Wagons',id: '0301'},
                {name: 'Cameras',id: '0602'},
                {name: 'Games',id: '0402'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0406' :{
            title:'Fishing',
            parent: {name: 'All Fun', id:'0400'},
            desc:'Our fishing gear is the perfect addition to your beach day. We offer the high-quality fishing rods and reels that are perfect for catching fish in the ocean or on the shore. Our gear is easy to use and suitable for both beginners and experienced anglers. Enjoy the excitement of fishing without the hassle of bringing your own equipment.',
            img: funBanner,
            relatedCategories:[
                {name: 'Wagons',id: '0301'},
                {name: 'Electronic Hobbies',id: '0602'},
                {name: 'Luxury Chairs',id: '0101'},
                {name: 'Speakers',id: '0601'},
                {name: 'Kitchen',id: '0801'},
                {name: 'Water & Pool',id: '0700'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0407' :{
            title:'Party',
            parent: {name: 'All Fun', id:'0400'},
            desc:'Our rental party equipment is the perfect addition to your beach day. We have everything you need to make your gathering a success, from beerpong tables to backyard games like cornhole.',
            img: funBanner,
            relatedCategories:[
                {name: 'Wagons',id: '0301'},
                {name: 'Sports',id: '0401'},
                {name: 'Games',id: '0402'},
                {name: 'Speakers',id: '0601'},
                {name: 'Tables',id: '0307'},
                {name: 'Coolers',id: '0302'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0500' :{
            title:'Kids',
            parent: {name: 'All Categories', id:'0000'},
            desc:"Looking for ways to keep the kids entertained during your vacation? We have a variety of games, toys, and sports equipment that will keep them busy and active. Plus, we have all the necessary items for babies and toddlers, including high chairs, playpens, and strollers, to make your vacation stress-free.",
            img: kidsBanner,
            relatedCategories:[
                {name: 'Infant', id:'0501'},
                {name: 'Toddlers', id:'0502'},
                {name: 'Shelter', id:'0503'},
                {name: 'Stroller & Carriers ', id:'0504'},
                {name: 'Changing Station', id:'0505'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0501' :{
            title:'Infant',
            parent: {name: 'All Kids', id:'0500'},
            desc:"We have a range of items for infants to make your vacation more comfortable and enjoyable. Our cribs and pack n' plays provide a safe and comfortable place for your baby to sleep. We also have high chairs and strollers to make dining and exploring your vacation destination easier. All of our infant items are high-quality and thoroughly cleaned and sanitized after each use.",
            img: kidsBanner,
            relatedCategories:[
                {name: 'Toddlers', id:'0502'},
                {name: 'Changing Stations', id:'0505'},
                {name: 'Strollers', id:'0504'},
                {name: 'Beachbags', id: '0303'},
                {name: 'Coolers', id:'0302'},
                {name: 'Canopies', id:'0201'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0502' :{
            title:'Toddlers',
            parent: {name: 'All Kids', id:'0500'},
            desc:"Planning a beach day with your toddler? Our toys and sun shelters will provide a comfortable and safe spot for your little one to play and relax. We also offer life jackets in various sizes, so your toddler can safely explore the water.",
            img: kidsBanner,
            relatedCategories:[
                {name: 'Infants', id:'0501'},
                {name: 'Games', id:'0402'},
                {name: 'Water Toys', id:'0707'},
                {name: 'Beachbags', id: '0303'},
                {name: 'Inflateables', id:'0705'},
                {name: "Kid's Chairs", id:'0102'},
                {name: 'Cameras', id:'0602'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0504' :{
            title:'Stroller & Carriers',
            parent: {name: 'All Kids', id:'0500'},
            desc:"Our strollers and carriers make it easy to travel with your little one. Designed with both comfort and convenience in mind, our strollers are lightweight and easy to maneuver, perfect for navigating busy beaches or sightseeing.",
            img: kidsBanner,
            relatedCategories:[
                {name: 'Infants', id:'0501'},
                {name: 'Toddlers', id:'0502'},
                {name: 'Strollers', id:'0504'},
                {name: 'Beachbags', id: '0303'},
                {name: 'Coolers', id:'0302'},
                {name: "Kid's Chairs", id:'0102'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0505' :{
            title:'Changing Station',
            parent: {name: 'All Kids', id:'0500'},
            desc:"A portable changing station for babies is a must-have for families with young children. It provides a clean, safe, and comfortable space for diaper changes, wherever you are. Our rental changing stations are easy to set up and take down, making them perfect for use at the beach, park, or any outdoor location.",
            img: kidsBanner,
            relatedCategories:[
                {name: 'Infants', id:'0501'},
                {name: 'Toddlers', id:'0502'},
                {name: 'Strollers', id:'0504'},
                {name: 'Beachbags', id: '0303'},
                {name: "Kid's Chairs", id:'0102'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        'Empty' : true
                    }
                }
            ]
        },
        '0600' :{
            title:'Electronics',
            parent: {name: 'All Categories', id:'0000'},
            desc:'Looking to enhance your beach day with some electronics? Our rental electronic equipment, including portable speakers and charging packs, are the perfect addition to your beach day. Waterproofed, our equipment is designed to withstand the sand and surf, and provide hours of entertainment.',
            img: electBanner,
            relatedCategories:[
                {name: 'Speakers', id:'0601'},
                {name: 'Cameras', id:'0602'},
                {name: 'Hobbies', id:'0604'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0601' :{
            title:'Speakers',
            parent: {name: 'All Electronics', id:'0600'},
            desc:'Looking for a way to enhance your beach experience? Our speakers are the perfect addition to your beach gear. Designed to provide high-quality sound and easy to use, our speakers are the perfect choice for a day at the beach.',
            img: electBanner,
            relatedCategories:[
                {name: 'Wagons', id:'0301'},
                {name: 'Coolers', id:'0302'},
                {name: 'Sports', id:'0401'},
                {name: 'Games', id:'0402'},
                {name: 'Home', id:'0800'},
                {name: 'Cameras', id:'0800'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0602' :{
            title:'Cameras',
            parent: {name: 'All Electronics', id:'0600'},
            desc:"Looking to capture all the memories of your beach vacation? Our cameras are the perfect solution. High-quality and easy to use, our cameras will help you document your time in the sun and sand. Whether you're a professional photographer or a novice, we have cameras to suit all levels of experience.",
            img: electBanner,
            relatedCategories:[
                {name: 'Sports', id:'0401'},
                {name: 'Home Entertainment', id:'0704'},
                {name: 'Surfboards', id:'0701'},
                {name: 'Other Boards', id:'0709'},
                {name: 'Inflatables', id:'0800'},
                {name: 'Party', id:'0407'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0604' :{
            title:'Hobbies',
            parent: {name: 'All Electronics', id:'0600'},
            desc:"Looking to take your beach experience to the next level? Rent one of our metal detectors and search for buried treasure in the sand. Our metal detectors are high-quality and easy to use, making them the perfect addition to your beach day. Don't miss out on the excitement of finding something valuable and memorable.",
            img: electBanner,
            relatedCategories:[
                {name: 'Wagons', id:'0301'},
                {name: 'Coolers', id:'0302'},
                {name: 'Sports', id:'0401'},
                {name: 'Games', id:'0402'},
                {name: 'Speakers', id:'0601'},
                {name: 'Fishing', id:'0406'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0700' :{
            title:'Water & Pool',
            parent: {name: 'All Categories', id:'0000'},
            desc:"Make a splash with our rental water and pool gear! Whether you're planning a relaxing day by the pool or an action-packed day on the wave, we have everything you need. Our rental pool toys and floats are perfect for lounging, while our water sports equipment is ideal for the adventurous.",
            img: waterBanner,
            relatedCategories:[
                {name: 'Surfboards', id:'0701'},
                {name: 'Other Boards',  id:'0709' },
                {name: 'Kayaks & Boats', id:'0704'},
                {name: 'Inflatables & Mats',  id:'0705'},
                {name: 'Pool Toys',  id:'0707'},
                {name: 'Swim Accessories', id:'0708'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0701' :{
            title:'Surfboards',
            parent: {name: 'All Water & Pool', id:'0700'},
            desc:"Looking for some fun in the waves on your next beach vacation? Our rental surfboards are perfect for riders of all skill levels. Made of high-quality materials and available in a variety of sizes, our surfboards are perfect for catching waves and enjoying the ocean. You'll love the fun and excitement that comes with surfing on your beach vacation.",
            img: waterBanner,
            relatedCategories:[
                {name: 'Other Boards', id:'0709'},
                {name: 'Kayaks & Boats', id:'0704'},
                {name: 'Swim Accessories', id:'0708'},
                {name: 'Bonefires', id:'0405'},
                {name: 'Dry Bags', id:'0303'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0709' :{
            title:'Other Boards',
            parent: {name: 'All Water & Pool', id:'0700'},
            desc:'Our rental boards are perfect for the adventurous beach-goer. Whether you want to paddleboard, or bodyboard, we have the gear to make your beach day unforgettable. Made of high-quality materials and available in a variety of sizes, our boards are designed to provide a fun and safe experience on the water.',
            img: waterBanner,
            relatedCategories:[
                {name: 'Surfboards', id:'0709'},
                {name: 'Kayaks & Boats', id:'0704'},
                {name: 'Swim Accessories', id:'0708'},
                {name: 'Bonefires', id:'0405'},
                {name: 'Dry Bags', id:'0303'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0704' :{
            title:'Kayaks & Boats',
            parent: {name: 'All Water & Pool', id:'0700'},
            desc:"Looking for a fun and exciting way to explore the water during your beach vacation? Our rental kayaks and boats are the perfect solution. Our high-quality rental options are easy to use and perfect for all skill levels. You'll be able to take in the beauty of the ocean and make memories that will last a lifetime.",
            img: waterBanner,
            relatedCategories:[
                {name: 'Surfboards', id:'0709'},
                {name: 'Other Boards', id:'0709'},
                {name: 'Bikes', id:'0404'},
                {name: 'Swim Accessories', id:'0708'},
                {name: 'Fishing', id:'0406'},
                {name: 'Dry Bags', id:'0303'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0705' :{
            title:'Inflatables & Mats',
            parent: {name: 'All Water & Pool', id:'0700'},
            desc:"Looking for a fun way to enjoy the water without a lot of hassle? Our rental inflatables and mats are perfect for your next beach vacation. Whether you want to float on the waves, play games in the water, or just relax in the sun, we have the perfect inflatable or mat for you.",
            img: waterBanner,
            relatedCategories:[
                {name: 'Water Toys', id:'0707'},
                {name: 'Speakers', id:'0601'},
                {name: 'Chairs', id:'0100'},
                {name: 'Swim Accessories', id:'0708'},
                {name: 'Coolers', id:'0302'},
                {name: 'Dry Bags', id:'0303'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0707' :{
            title:'Pool Toys',
            parent: {name: 'All Water & Pool', id:'0700'},
            desc:"Our pool toys are the perfect way to add some extra fun to your pool day. From inflatable toys to dive games, we have everything you need for a great time in the pool. Whether you're looking for something to keep the kids entertained or just want to relax in the pool with some fun accessories, we have you covered.",
            img: waterBanner,
            relatedCategories:[
                {name: 'Games', id:'0402'},
                {name: 'Kids', id:'0500'},
                {name: 'Inflatables & Mats', id:'0705'},
                {name: 'Swim Accessories', id:'0708'},
                {name: 'Coolers', id:'0302'},
                {name: 'Wagons', id:'0301'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0708' :{
            title:'Swim Accessories',
            parent: {name: 'All Water & Pool', id:'0700'},
            desc:"Looking for the perfect accessories to make your next swimming experience enjoyable? Our rental swimming accessories have everything you need, from goggles and swim caps to kickboards and lifejackets.",
            img: waterBanner,
            relatedCategories:[
                {name: 'Pool Toys', id:'0700'},
                {name: 'Kids', id:'0500'},
                {name: 'Inflatables & Mats', id:'0705'},
                {name: 'Other Boards', id:'0701'},
                {name: 'Wagons', id:'0301'},
                {name: 'Dry Bags', id:'0303'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0800' :{
            title:'Home',
            parent: {name: 'All Categories', id:'0000'},
            desc:"When you're on vacation, having the right home goods can make all the difference. From comfortable bedding to kitchen essentials, having the comforts of home in a new place can help you feel relaxed and at ease.",
            img: homeBanner,
            relatedCategories:[
                {name: 'Kitchen', id:'0801'},
                {name: 'Bedroom', id:'0802'}, 
                {name: 'Forgot at Home', id:'0803'},
                {name: 'Entertainment', id:'0804'},
                {name: 'Pets', id:'0805'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0801' :{
            title:'Kitchen',
            parent: {name: 'All Home', id:'0800'},
            desc:"No beach vacation is complete without some delicious food and drinks! We offer a variety of rental items that will make your time in the kitchen a breeze. From Margarita Makers to Kitchen Aides and everything in between. Our kitchen items are designed to make your beach vacation as fun and enjoyable as possible.",
            img: homeBanner,
            relatedCategories:[
                {name: 'Forgot at Home', id:'0801'},
                {name: 'Bedroom', id:'0802'}, 
                {name: 'Fishing', id:'0803'},
                {name: 'Games', id:'0804'},
                {name: 'Party', id:'0407'},
                {name: 'Beachbags', id:'0303'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0802' :{
            title:'Bedroom',
            parent: {name: 'All Home', id:'0800'},
            desc:"Get the perfect night's sleep on your beach vacation with our rental bedroom items. Our selection includes comfortable mattress toppers and standing fans that are sure to provide a restful night's sleep. With our rental bedroom items, you'll feel right at home in your beach rental.",
            img: homeBanner,
            relatedCategories:[
                {name: 'Forgot at Home', id:'0801'},
                {name: 'Bedroom', id:'0802'}, 
                {name: 'Fishing', id:'0803'},
                {name: 'Games', id:'0804'},
                {name: 'Party', id:'0407'},
                {name: 'Beachbags', id:'0303'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0803' :{
            title:'Forgot at Home',
            parent: {name: 'All Home', id:'0800'},
            desc:"Don't let a forgotten item ruin your vacation. Our rental inventory includes all the items you may have left behind, from phone chargers to hairdryers and everything in between. Don't let a missing item bring your vacation down, let us help you enjoy your stay to the fullest.",
            img: homeBanner,
            relatedCategories:[
                {name: 'Kitchen', id:'0801'},
                {name: 'Bedroom', id:'0802'}, 
                {name: 'Pets', id:'0805'},
                {name: 'Swim Accessories', id:'0708'},
                {name: 'Beachbags', id:'0303'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0804' :{
            title:'Entertainment',
            parent: {name: 'All Home', id:'0800'},
            desc:"Looking for something fun to do on a rainy day or during some downtime on your beach vacation? Our indoor entertainment items have got you covered. From board games and card games to video game consoles and movies, we have something for everyone.",
            img: homeBanner,
            relatedCategories:[
                {name: 'Games', id:'0402'},
                {name: 'Forgot at Home', id:'0703'},
                {name: 'Speaker', id:'0601'},
                {name: 'Pets', id:'0900'},
                {name: 'Hobby Electronics', id:'0604'},
                {name: 'Party', id:'0407'}
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
        '0805' : {
            title:'Pets',
            parent: {name: 'All Categories', id:'0000'},
            desc:"Don't forget your furry friend! We offer high-quality pet beds, feeding dishes, and toys to keep your pet entertained. With our pet items, you won't have to worry about packing bulky items or bringing your pet's entire setup with you on vacation. Just choose the items you need and leave the rest to us!",
            img: petsBanner,
            relatedCategories:[
                {name: 'On the Beach', id:'0300'},
                {name: 'Home', id:'0800'},
                {name: 'Fun', id:'0400'},
                {name: 'Wagons', id:'0301'},
                {name: 'Bikes', id:'0404    '},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },

        '0000' : {
            title:'All Categories',
            parent: {name: 'All Categories', id:'0000'},
            desc:"Planning your next vacation? Make sure you have everything you need with our selection of rental vacation items. From beach gear to kitchen essentials, we have everything to make your stay comfortable and convenient. All of our rental items are high-quality and well-maintained, so you can enjoy your vacation worry-free.",
            img: allBanner,
            relatedCategories:[
                {name: 'Chairs', id:'0100'},
                {name: 'Shelters', id:'0200'},
                {name: 'On the Beach', id:'0300'},
                {name: 'Fun', id:'0400'},
                {name: 'Kids', id:'0500'},
                {name: 'Electronics', id:'0600'},
                {name: 'Water & Pool', id:'0700'},
                {name: 'Home', id:'0800'},
            ],
            checkboxOptions:[
                {
                    name: 'Category',
                    tags: {
                        '' : true
                    }
                }
            ]
        },
}

export {
    shoppingPageData,
}