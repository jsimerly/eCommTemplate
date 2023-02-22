import { sandcastleBanner } from "../assets/images/shoppingBanners"

const shoppingPageData = {
        '0100' : {
            title:'Chairs',
            parent: {name: 'All Categories', id:'0000'},
            desc:"Rent our comfy beach chairs for a stress-free vacation. Lightweight and easy to carry, they're available for daily or weekly rental at affordable rates. Book now and enjoy your beach trip hassle-free!",
            img: '',
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
            desc:'Looking for the ultimate beach relaxation experience? Our luxury rental chairs are the perfect solution. Enjoy high-quality, stylish chairs with features like adjustable headrests, cup holders, and more. Available for daily or weekly rental, our chairs are lightweight and easy to carry.',
            img: '',
            relatedCategories:[
                {name: 'Chairs', id:''}
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
            desc:"Don't let uncomfortable chairs ruin your family's beach day. Our rental kid's chairs are perfect for young beachgoers. Our chairs are lightweight and easy to carry, making it simple for families to enjoy a comfortable day at the beach. Available for daily or weekly rental, our kid's chairs are designed with your little ones in mind.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Worried about too much sun on your beach vacation? Our canopy chairs provide the perfect solution. With adjustable canopies to keep you cool and protected, our rental chairs are the perfect way to enjoy your day at the beach without worrying about sunburn.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Looking to take your beach day to the next level? Our rental chair accessories provide the perfect solution. From umbrellas and canopies to cup holders and side tables, we have everything you need to make your day at the beach as comfortable as possible. Our accessories are designed to fit our rental chairs and are available for daily or weekly rental.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            img: '',
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
            desc:'Our adjustable canopies provide the perfect solution to protect you from too much sun on your beach vacation. Rent our chairs with canopies for a shady and comfortable beach experience.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Stay cool on your beach vacation with our rental umbrellas. Perfect for protecting you from the sun's rays, our umbrellas are easy to set up and adjust. Daily and weekly rentals are available. Rent now and enjoy a comfortable and relaxed beach day!",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Take your beach day to the next level with our rental tents. Our tents provide shade and protection from the sun and wind, allowing you to enjoy your day at the beach in comfort. Lightweight and easy to set up, our tents are available for daily or weekly rental. Rent now and elevate your beach experience!',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            img: '',
            relatedCategories:[
                {name: 'Wagons', id:'0301'},
                {name: 'Coolers', id:'0302'},
                {name: 'Beach & Dry Bags', id:'0303'},
                {name: 'Speakers', id:'0304'},
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
            desc:"Our rental beach wagons are the perfect solution to make your next beach day easier. Designed to carry all your beach gear, including chairs, coolers, towels, and more, our wagons are high-quality and easy to use. You won't have to worry about lugging everything to and from the beach by hand. ",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0302' :{
            name:'Coolers',
            parent: {name: 'All On the Beach Gear', id:'0300'},
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
        '0303' : {
            title:'Beach & Dry Bags',
            parent: {name: 'All On the Beach Gear', id:'0300'},
            desc:'Our rental beach and dry bags are high-quality and durable, designed to keep your belongings safe and dry during your beach day. Enjoy a worry-free day at the beach with our rental bags.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0304' : {
            title:'Speakers',
            parent: {name: 'All On the Beach Gear', id:'0300'},
            desc:"Our rental speakers are the perfect way to enhance your beach day with high-quality sound. They're easy to use and deliver crystal-clear audio for your favorite tunes. Bring the party to the beach with our rental speakers.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Our rental mats are the perfect addition to your beach day. They're designed to keep you comfortable and sand-free while enjoying the sun, surf, and sand. Made of high-quality materials, our rental mats are durable and easy to use.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Make your little ones' beach day even more fun with our rental shovels and buckets. Our high-quality beach toys are perfect for building sandcastles and creating memories. Easy to use and durable, our rental shovels and buckets are the perfect addition to your beach day.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'',
            img: '',
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
            desc:'Looking to stay active on your beach vacation? Our rental sports equipment has everything you need to have fun in the sun, including frisbees, footballs, and more. Our sports equipment is high-quality and easy to use, making it the perfect addition to your beach day. Get moving and make the most of your beach vacation with our rental sports equipment.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Our rental sandcastle equipment is the perfect addition to your beach day. With a variety of shovels, buckets, and molds available, you and your family can create your own beachfront masterpiece. Our equipment is made of high-quality materials, ensuring durability and easy use for all ages.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Our rental bikes are the perfect way to explore the beach and its surroundings. With high-quality bikes available for rent, you can enjoy a leisurely ride along the shoreline or take a more adventurous path through the dunes. Our bikes are easy to rent and use, so you can spend more time enjoying your beach day.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Rent our high-quality beach bonfire equipment for the perfect beach evening. Our rental equipment includes everything you need, from fire pits to chairs, and we make it easy for you to enjoy a beautiful beach bonfire with your family and friends.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Our fishing gear is the perfect addition to your beach day. We offer high-quality fishing rods and reels that are perfect for catching fish in the ocean or on the shore. Our gear is easy to use and suitable for both beginners and experienced anglers. With our rental fishing gear, you can enjoy the excitement of fishing without the hassle of bringing your own equipment.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Our rental party equipment is the perfect addition to your beach day. We have everything you need to make your gathering a success, from tables and chairs to coolers and speakers. Our equipment is high-quality and easy to use, so you can enjoy your day in the sun without worrying about the details.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Looking for ways to keep the kids entertained during your vacation? Our rental items for kids will do just that! We have a variety of games, toys, and sports equipment that will keep them busy and active. And don't forget about our water and pool day items, perfect for a day of fun in the sun. We also have a selection of indoor entertainment items for those rare rainy days. Plus, we have all the necessary items for babies and toddlers, including high chairs, playpens, and strollers, to make your vacation stress-free.",
            img: '',
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
            desc:"We have a range of items for infants to make your vacation more comfortable and enjoyable. Our rental cribs and pack n' plays provide a safe and comfortable place for your baby to sleep. We also have high chairs and strollers to make dining and exploring your vacation destination easier. Our baby gates and playpens provide a secure area for your little one to play and explore without worry. All of our infant items are high-quality and thoroughly cleaned and sanitized after each use.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Planning a beach day with your toddler? We've got you covered with our rental gear. Our wagons, beach mats, and sun shelters will provide a comfortable and safe spot for your little one to play and relax. We also offer life jackets in various sizes, so your toddler can safely explore the water. And don't forget the sand toys and kiddie pools for endless hours of fun!",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0503' :{
            title:'Shelter',
            parent: {name: 'All Kids', id:'0500'},
            desc:"Make your child's outdoor adventures more enjoyable with our rental kids' shelters. Designed with your child's comfort and safety in mind, our shelters offer protection from the sun and rain, while providing a fun and interactive space for your child to play and rest. Our shelters are easy to set up and take down, making them the perfect addition to any family outing. With a variety of sizes and styles to choose from, you can find the perfect shelter for your child's next outdoor adventure.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Our rental strollers and carriers make it easy to travel with your little one. Designed with both comfort and convenience in mind, our strollers are lightweight and easy to maneuver, perfect for navigating busy theme parks or sightseeing. Our carriers are also comfortable for both parent and baby, allowing you to explore hands-free. Plus, with our rentals, you won't have to worry about the hassle of bringing your own stroller or carrier on your trip.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0600' :{
            title:'Electronics',
            parent: {name: 'All Categories', id:'0000'},
            desc:'Looking to enhance your beach day with some electronics? Our rental electronic equipment, including portable speakers and charging packs, are the perfect addition to your beach day. Made with high-quality materials, our equipment is designed to withstand the sand and surf, and provide hours of entertainment.',
            img: '',
            relatedCategories:[
                {name: 'Speakers', id:'0601'},
                {name: 'Cameras', id:'0602'},
                {name: 'Fans', id:'0603'},
                {name: 'Metal Detectors', id:'0604'},
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
            desc:'Looking for a way to enhance your beach experience? Our rental speakers are the perfect addition to your beach gear. Designed to provide high-quality sound and easy to use, our speakers are the perfect choice for a day at the beach.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Looking to capture all the memories of your beach vacation? Our rental cameras are the perfect solution. High-quality and easy to use, our cameras will help you document your time in the sun and sand. Whether you're a professional photographer or a novice, we have cameras to suit all levels of experience.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0603' :{
            title:'Fans',
            parent: {name: 'All Electronics', id:'0600'},
            desc:"Don't let the heat ruin your beach day. Our rental fans are the perfect solution to keep you cool and comfortable. Designed to be portable and easy to use, our fans are a great addition to your beach setup. With our high-quality fans, you can enjoy the sun, sand, and surf without breaking a sweat.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            title:'Metal Detectors',
            parent: {name: 'All Electronics', id:'0600'},
            desc:"Looking to take your beach experience to the next level? Rent one of our metal detectors and search for buried treasure in the sand. Our metal detectors are high-quality and easy to use, making them the perfect addition to your beach day. Don't miss out on the excitement of finding something valuable and memorable.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Make a splash with our rental water and pool gear! Whether you're planning a relaxing day by the pool or an action-packed day at the water park, we have everything you need. Our rental pool toys and floats are perfect for lounging, while our water sports equipment is ideal for the adventurous. We also have a range of swimming accessories, including goggles, swim caps, and towels, to make your day in the water even better. And don't forget to check out our rental coolers, beach chairs, and umbrellas to keep you comfortable and refreshed all day long. With our high-quality rental gear, your water and pool day is sure to be a success!",
            img: '',
            relatedCategories:[
                {name: 'Surfboards', id:'0701'},
                {name: 'Other Boards',  id:'0709' },
                {name: 'Ocean', id:'0703'},
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
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'Our rental boards are perfect for the adventurous beach-goer. Whether you want to surf, paddleboard, or bodyboard, we have the gear to make your beach day unforgettable. Made of high-quality materials and available in a variety of sizes, our rental boards are designed to provide a fun and safe experience on the water.',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0703' :{
            title:'Ocean',
            parent: {name: 'All Water & Pool', id:'0700'},
            desc:'',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Looking for a fun way to enjoy the water without a lot of hassle? Our rental inflatables and mats are perfect for your next beach vacation. Made of high-quality materials, our rental inflatables and mats are durable and easy to use. Whether you want to float on the waves, play games in the water, or just relax in the sun, we have the perfect inflatable or mat for you. With our wide selection, you're sure to find the perfect fit for your beach day.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Our rental pool toys are the perfect way to add some extra fun to your pool day. From inflatable toys to dive games, we have everything you need for a great time in the pool. Made of high-quality materials, our pool toys are durable and easy to use. Whether you're looking for something to keep the kids entertained or just want to relax in the pool with some fun accessories, we have you covered.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Looking for the perfect accessories to make your next swimming experience enjoyable? Our rental swimming accessories have everything you need, from goggles and swim caps to kickboards and pool noodles. Made with high-quality materials, our rental swimming accessories will provide you with a comfortable and fun swimming experience. Whether you're training for a competition or just want to enjoy a leisurely swim, our rental swimming accessories are a great addition to any swimmer's toolkit.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:'',
            img: '',
            relatedCategories:[
                {name: 'Kitchen', id:'0801'},
                {name: 'Bedroom', id:'0802'}, 
                {name: 'Forgot at Home', id:'0803'},
                {name: 'Entertainment', id:'0804'}
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
            desc:"No beach vacation is complete without some delicious food and drinks! We offer a variety of rental items that will make your time in the kitchen a breeze. From blenders to coffee makers and everything in between, our high-quality rental kitchen items are designed to make your beach vacation as relaxing and enjoyable as possible. Just imagine sipping a fresh margarita on your balcony, watching the sun go down, knowing that everything you need for your culinary creations is right at your fingertips!",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Get the perfect night's sleep on your beach vacation with our high-quality rental bedroom items. Our selection includes comfortable mattress toppers and bedding sets that are sure to provide a restful night's sleep. We also offer fans to keep you cool on warm summer nights. With our rental bedroom items, you'll feel right at home in your beach rental.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Don't let a forgotten item ruin your vacation. Our rental inventory includes all the items you may have left behind, from phone chargers to toothbrushes and everything in between. Whether you're looking for a travel-sized iron or a hair dryer, we've got you covered. Don't let a missing item bring your vacation down, let us help you enjoy your stay to the fullest.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            desc:"Looking for something fun to do on a rainy day or during some downtime on your beach vacation? Our rental indoor entertainment items have got you covered. From board games and card games to video game consoles and movies, we have something for everyone. Our rental items are high-quality and easy to use, ensuring that you have a fun and stress-free indoor entertainment experience.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0900' : {
            title:'Pets',
            parent: {name: 'All Categories', id:'0000'},
            desc:"Whether you're going on a road trip or staying in a rental house, don't forget your furry friend! Our rental pet items will ensure that your pet is comfortable and happy during your vacation. We offer high-quality pet beds, feeding dishes, and toys to keep your pet entertained. With our pet items, you won't have to worry about packing bulky items or bringing your pet's entire setup with you on vacation. Just choose the items you need and leave the rest to us!",
            img: '',
            relatedCategories:[
                {name: 'Dogs', id:'0901'},
                {name: 'Cats', id:'0902'}, 
                {name: 'Toys', id:'0903'},
                {name: 'Cages & Pens', id:'0904'}
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
        '0901' : {
            title:'Dogs',
            parent: {name: 'All Pets', id:'0900'},
            desc:"Make sure your furry friend has the best time on your beach vacation with our rental dog items. We have everything you need to keep your dog happy and comfortable while you enjoy the sun and surf. Our rental items include dog beds, portable water bowls, and toys, all made of high-quality materials to ensure your dog's safety and enjoyment. With our dog rental items, you can relax and focus on making memories with your furry companion.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0902' : {
            title:'Cats',
            parent: {name: 'All Pets', id:'0900'},
            desc:'',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0903' : {
            title:'Toys',
            parent: {name: 'All Pets', id:'0900'},
            desc:"Our rental pet toys are perfect for keeping your furry friend entertained during your vacation. From frisbees and tennis balls to chew toys and puzzle feeders, we have a variety of toys to suit any pet's play style. Our rental toys are made of high-quality materials and are thoroughly cleaned and sanitized before each rental. You won't have to worry about bringing along bulky pet toys in your luggage or having to buy new toys at your destination. With our rental pet toys, your pet will be happy and entertained all vacation long.",
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
        '0904' : {
            title:'Cages & Pens',
            parent: {name: 'All Pets', id:'0900'},
            desc:'',
            img: '',
            relatedCategories:[
                {name: '', id:''}
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
            parent: {name: '', id:''},
            desc:"Planning your next vacation? Make sure you have everything you need with our selection of rental vacation items. From beach gear to kitchen essentials, we have everything to make your stay comfortable and convenient. Our rental items include beach chairs, umbrellas, wagons, coolers, and beach games, as well as kitchen items like coffee makers, blenders, and toasters. For indoor entertainment, we have DVD players, board games, and video game consoles. We also offer pet-friendly items, such as crates, playpens, and pet beds, so you can bring your furry friend along. All of our rental items are high-quality and well-maintained, so you can enjoy your vacation worry-free. Book now and start planning your perfect getaway!",
            img: '',
            relatedCategories:[
                {name: 'Chairs', id:'0100'},
                {name: 'Shelters', id:'0200'},
                {name: 'On the Beach', id:'0300'},
                {name: 'Fun', id:'0400'},
                {name: 'Kids', id:'0500'},
                {name: 'Electronics', id:'0600'},
                {name: 'Water & Pool', id:'0700'},
                {name: 'Home', id:'0800'},
                {name: 'Pets', id:'0900'},
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