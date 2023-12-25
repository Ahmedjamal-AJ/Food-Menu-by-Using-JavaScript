const menu = [
    {
        sn: 1,
        title: "Halwa Puri",
        price: "$100.00",
        desc: "Halwa Puri is a unique comfort food in Indian and Pakistani cuisines. The name is for the sweet Halwa, made of semolina, and the savory Puri, a fried flatbread. What is this? Traditionally, this combo menu is often for breakfast, brunch, or snacks.",
        image:"Assets/halwapuri.jpg",
        category: "BreakFast",
    },

    {
        sn: 2, 
        title: "Murgh Chana Lacha dar Paratha",
        price: "$190.00",
        desc: "Punjabi dish meaning “mixed spice chickpeas.” Its signature spiced tang is thanks to coriander, amchoor powder (a tangy dried green mango powder), and a combination of fresh and powdered chilies.",
        image: "Assets/Murgh-Chana-Lacha-dar-Paratha.webp",
        category: "BreakFast",
    },

    {
        sn: 3, 
        title: "Channa Lacha dar Paratha",
        price: "$130.00",
        desc: "The high vitamin, mineral, and fibre content of chana may have numerous health benefits, including improving digestion, lowering disease risk, and aiding in weight management..",
        image: "Assets/ChannaLachadarParatha.jpg",
        category: "BreakFast",
    },
    
    // {
    //     sn: 4, 
    //     title: "Phaja Kay Paiye Lacha dar Paratha",
    //     price: "$260.00",
    //     desc: "Slow-cooked overnight, this dish boasts a tantalizing flavor. Infused with garlic and gelatin derived from the bones to enrich the taste, while a secret blend of spices.",
    //     image: "Assets/",
    //     category: "BreakFast",
    // },

    // {
    //     sn: 5, 
    //     title: "Fry Egg Lacha dar Paratha",
    //     price: "$90.00",
    //     desc: "A fried egg is an egg cooked in oil or fat. Would you like your fried eggs over easy? To make fried eggs, put a small amount of oil in a pan and crack the eggs into it.",
    //     image: "Assets/",
    //     category: "BreakFast",
    // },

    // {
    //     sn: 6, 
    //     title: "Dodh Pati Chai Lacha dar Paratha",
    //     price: "$70.00",
    //     desc: "Chai paratha is a delicious, flaky paratha you relish with a steaming cup of hot chai. Taza Chai Paratha Homestyle serves as the perfect breakfast, lunch, or dinner for anyone who loves Pakistani cuisine. It is also an excellent option for vegetarians and vegans..",
    //     image: "Assets/",
    //     category: "BreakFast",
    // },

    // {
    //     sn: 7, 
    //     title: "Beef Nehari Lacha dar Paratha",
    //     price: "$200.00",
    //     desc: "Nihari is a rich, slow-cooked meat stew flavored with spices and thickened with atta, or Pakistani & Indian-style durum whole wheat flour. Pakistani versions of Nihari are typically made with beef, but Nihari can be made with Beef.",
    //     image: "Assets/",
    //     category: "BreakFast",
    // },

    {
        sn: 8, 
        title: "Beef Biryani",
        price: "$190.00",
        desc: "Beef Biryani is a rice-based dish made with spices, rice (usually basmati) and beef Apart from family and friends, the 'one' thing that make any occasion extra special is food, glorious food. This beef biryani is one of my all-time favourites.",
        image: "Assets/Beef-Biryani.jpg",
        category: "Lunch",
    },


    {
        sn: 9, 
        title: "Chicken Biryani",
        price: "$160.00",
        desc: "Biryani is a classic layered rice dish in Indian cuisine. Roasted nuts. Toasted spices. Fluffy basmati rice. Often the star of the show at holidays and family celebrations, biryani captures the mouthwatering sensations of Indian comfort food..",
        image: "Assets/ChickenBiryani.jpg",
        category: "Lunch",
    },

    // {
    //     sn: 10, 
    //     title: "Beef Pilow",
    //     price: "$190.00",
    //     desc: "Beef Pilow is a rice-based dish made with spices, rice (usually basmati) and beef Apart from family and friends, the 'one' thing that make any occasion extra special is food, glorious food. This beef Pilow is one of my all-time favourites, and I can hardly wait to make it again this Easter. It's so flavorful and unique, this biryani isthe best way to celebrate any special occasion.",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 11, 
    //     title: "Chicken Pilow",
    //     price: "$170.00",
    //     desc: "Chicken Pilow is a classic layered rice dish in Indian cuisine. Roasted nuts. Toasted spices. Fluffy basmati rice. Often the star of the show at holidays and family celebrations, Pilow captures the mouthwatering sensations of Indian comfort food..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 12, 
    //     title: "Kurma",
    //     price: "$100.00",
    //     desc: "So basically korma is a dish where meat is braised in fats like ghee, oil &/or yogurt. Based on this braising technique, you will find zillion versions across the South Asian Countries, made with varying ingredients like spices, nuts, seeds, yogurt, coconut, and fried onion paste.",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 13, 
    //     title: "Haleem",
    //     price: "$100.00",
    //     desc: "Haleem is a stew composed of meat, lentil and pounded wheat made into a thick paste. It originated as an Arabic dish and was introduced to the Hyderabad state (India) by the Arab diaspora during the Nizam of Hyderabad's rule..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 14, 
    //     title: "Dal Chanwal",
    //     price: "$70.00",
    //     desc: "Dal Chawal, which translates to “lentil rice,” is a hearty and wholesome meal that combines cooked lentils with rice. It's a very forgiving dish when it comes to experimentation, so feel free to try different types of lentils or beans, or to adjust the spices to your liking..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 15, 
    //     title: "Chicken Karachi",
    //     price: "$100.00",
    //     desc: "As a general rule, Karahis are made from a base of ginger, garlic and tomatoes and also contain fresh green chillis, julienne-cut raw ginger and coriander. .",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 16, 
    //     title: "Bhagara Begun",
    //     price: "$70.00",
    //     desc: "Brinjal (Solanum melongena), also known as eggplant or aubergine, is an easily cultivated plant belonging to the family Solanaceae. Its fruit is high in nutrition and commonly consumed as a vegetable. The fruit and other parts of the plant are used in traditional medicine..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 17, 
    //     title: "Anda Chana",
    //     price: "$70.00",
    //     desc: "Anda Chana masala is a North Indian curried dish made with white chickpeas, onions, tomatoes, spices and herbs..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 18, 
    //     title: "Daal Makhani",
    //     price: "$90.00",
    //     desc: "Dal makhani is a popular North Indian dish where whole black lentils & red kidney beans are slow cooked with spices, butter & cream..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 19, 
    //     title: "Daal Fry",
    //     price: "$90.00",
    //     desc: "Dal Fry is a delicious and popular Indian lentil recipe that is made with tuvar dal (pigeon pea lentils), onions, tomatoes and spices. Relish this flavorful, mildly-spiced, creamy lentil dish with roti, naan or your favorite steamed rice..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 20, 
    //     title: "Mircho bhara Qeema",
    //     price: "$100.00",
    //     desc: "Like much of Northern India's cuisine, keema or queema has Persian roots and was brought to India by the Mughals. It is believed to have been first mentioned as a recipe in writings about Emperor Akbar. The word itself can be traced back to an ancient Turkish word kiyma meaning ground or minced meat.",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 21, 
    //     title: "Karahi Gosht",
    //     price: "$100.00",
    //     desc: "The best cuts of lamb for Mutton Karahi are the shoulder and ribs. If you choose a fattier portion, use a little less ghee, if you choose a leaner portion, use the entire cup..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 22, 
    //     title: "Mutton Karachi",
    //     price: "$200.00",
    //     desc: "The best cuts of lamb for Mutton Karahi are the shoulder and ribs. If you choose a fattier portion, use a little less ghee, if you choose a leaner portion, use the entire cup..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 23, 
    //     title: "Murgh Chana Lacha dar Paratha",
    //     price: "$190.00",
    //     desc: "Punjabi dish meaning “mixed spice chickpeas.” Its signature spiced tang is thanks to coriander, amchoor powder (a tangy dried green mango powder), and a combination of fresh and powdered chilies..",
    //     image: "Assets/",
    //     category: "Lunch",
    // },

    // {
    //     sn: 24, 
    //     title: "Beef Biryani",
    //     price: "$190.00",
    //     desc: "Beef Biryani is a rice-based dish made with spices, rice (usually basmati) and beef Apart from family and friends, the 'one' thing that make any occasion extra special is food, glorious food. This beef biryani is one of my all-time favourites, and I can hardly wait to make it again this Easter. It's so flavorful and unique, this biryani isthe best way to celebrate any special occasion..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    // {
    //     sn: 25, 
    //     title: "Chicken Biryani",
    //     price: "$160.00",
    //     desc: "Biryani is a classic layered rice dish in Indian cuisine. Roasted nuts. Toasted spices. Fluffy basmati rice. Often the star of the show at holidays and family celebrations, biryani captures the mouthwatering sensations of Indian comfort food...",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    // {
    //     sn: 26, 
    //     title: "Beef Pilow",
    //     price: "$190.00",
    //     desc: "Beef Pilow is a rice-based dish made with spices, rice (usually basmati) and beef Apart from family and friends, the 'one' thing that make any occasion extra special is food, glorious food. This beef Pilow is one of my all-time favourites, and I can hardly wait to make it again this Easter. It's so flavorful and unique, this biryani isthe best way to celebrate any special occasion..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    // {
    //     sn: 27, 
    //     title: "Chicken Pilow",
    //     price: "$160.00",
    //     desc: "Chicken Pilow is a classic layered rice dish in Indian cuisine. Roasted nuts. Toasted spices. Fluffy basmati rice. Often the star of the show at holidays and family celebrations, Pilow captures the mouthwatering sensations of Indian comfort food..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    {
        sn: 28, 
        title: "Kurma",
        price: "$100.00",
        desc: "So basically korma is a dish where meat is braised in fats like ghee, oil &/or yogurt. Based on this braising technique, you will find zillion versions across the South Asian Countries, made with varying ingredients like spices, nuts, seeds, yogurt, coconut, and fried onion paste..",
        image: "Assets/Kurma.jpg",
        category: "Dinner",
    },
    
    // {
    //     sn: 29, 
    //     title: "Haleem",
    //     price: "$100.00",
    //     desc: "Haleem is a stew composed of meat, lentil and pounded wheat made into a thick paste. It originated as an Arabic dish and was introduced to the Hyderabad state (India) by the Arab diaspora during the Nizam of Hyderabad's rule..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    // {
    //     sn: 30, 
    //     title: "Dal Chanwal",
    //     price: "$70.00",
    //     desc: "Dal Chawal, which translates to “lentil rice,” is a hearty and wholesome meal that combines cooked lentils with rice. It's a very forgiving dish when it comes to experimentation, so feel free to try different types of lentils or beans, or to adjust the spices to your liking..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    {
        sn: 31, 
        title: "Chicken Karahi",
        price: "$100.00",
        desc: "As a general rule, Karahis are made from a base of ginger, garlic and tomatoes and also contain fresh green chillis, julienne-cut raw ginger and coriander.",
        image: "Assets/ChickenKarahi.jpg",
        category: "Dinner",
    },

    // {
    //     sn: 32, 
    //     title: "Bhagara Begun",
    //     price: "$70.00",
    //     desc: "Brinjal (Solanum melongena), also known as eggplant or aubergine, is an easily cultivated plant belonging to the family Solanaceae. Its fruit is high in nutrition and commonly consumed as a vegetable. The fruit and other parts of the plant are used in traditional medicine..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },
    
    // {
    //     sn: 33, 
    //     title: "Anda Chana",
    //     price: "$70.00",
    //     desc: "Anda Chana masala is a North Indian curried dish made with white chickpeas, onions, tomatoes, spices and herbs..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    // {
    //     sn: 34, 
    //     title: "Daal Makhani",
    //     price: "$90.00",
    //     desc: "Dal makhani is a popular North Indian dish where whole black lentils & red kidney beans are slow cooked with spices, butter & cream..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    // {
    //     sn: 35, 
    //     title: "Mircho bhara Qeema",
    //     price: "$100.00",
    //     desc: "Like much of Northern India's cuisine, keema or queema has Persian roots and was brought to India by the Mughals. It is believed to have been first mentioned as a recipe in writings about Emperor Akbar. The word itself can be traced back to an ancient Turkish word kiyma meaning ground or minced meat..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    {
        sn: 36, 
        title: "Karahi Gosht",
        price: "$100.00",
        desc: "The best cuts of lamb for Mutton Karahi are the shoulder and ribs. If you choose a fattier portion, use a little less ghee, if you choose a leaner portion, use the entire cup..",
        image: "Assets/KarahiGosht.jpg",
        category: "Dinner",
    },

    {
        sn: 37, 
        title: "Mutton Karachi",
        price: "$200.00",
        desc: "The best cuts of lamb for Mutton Karahi are the shoulder and ribs. If you choose a fattier portion, use a little less ghee, if you choose a leaner portion, use the entire cup..",
        image: "Assets/Mutton-Karahi.jpg",
        category: "Dinner",
    },

    // {
    //     sn: 38, 
    //     title: "Murgh Chana Lacha dar Paratha",
    //     price: "$190.00",
    //     desc: "Punjabi dish meaning “mixed spice chickpeas.” Its signature spiced tang is thanks to coriander, amchoor powder (a tangy dried green mango powder), and a combination of fresh and powdered chilies..",
    //     image: "Assets/",
    //     category: "Dinner",
    // },

    {
        sn: 39, 
        title: "Quarter Borast Chest",
        price: "$200.00",
        desc: "Broasting is a special cooking process that combines pressure frying and traditional shallow frying to produce juicy chunks of fried chicken with a crispy outer layer.",
        image: "Assets/Quarter-Borast-Chest.jpg",
        category: "FastFood",
    },

    {
        sn: 40, 
        title: "Quarter Borast Leg",
        price: "$180.00",
        desc: "Chicken leg quarters, also known as hindquarters, are a popular poultry cut that consists of the drumstick, thigh, and a portion of the backbone..",
        image: "Assets/Quarter-Borast-Leg.jpg",
        category: "FastFood",
    },

    {
        sn: 41, 
        title: "Zinger",
        price: "$150.00",
        desc: "The Zinger spicy chicken sandwich features a double hand-breaded, fried chicken breast filet topped with lettuce and Colonel's mayonnaise on a toasted sesame seed bun.",
        image: "Assets/Zinger.jpg",
        category: "FastFood",
    },

    {
        sn: 42, 
        title: "Club Sandwich",
        price: "$140.00",
        desc: "This classic sandwich is comprised of 3 types of meat (ham, turkey, and bacon), lettuce, tomato, and cheddar, all layered between 3 slices of toasted bread..",
        image: "Assets/ClubSandwich.jpg",
        category: "FastFood",
    },

    // {
    //     sn: 43, 
    //     title: "Chese Club Sandwich",
    //     price: "$170.00",
    //     desc: "a sandwich with three slices of bread with two layers of meat! Sliced, cooked poultry, ham or fried bacon, lettuce, tomato, and mayonnaise are the typical ingredients.",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    // {
    //     sn: 44, 
    //     title: "BBQ Club Sandwich",
    //     price: "$190.00",
    //     desc: "Meats may be sliced, chopped or pulled, and various types are used, such as pork, pulled pork, pork shoulder, beef, beef brisket, chicken, sausage, pork ribs and turkey. Some versions use slow-smoked meats..",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    // {
    //     sn: 45, 
    //     title: "Chese Zinger",
    //     price: "$170.00",
    //     desc: "A burger with crunchy, juicy chicken fillet in a warm sesame bun, topped with fresh lettuce and creamy mayo & cheese..",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    // {
    //     sn: 46, 
    //     title: "Chat Pata Masala Borast Chest",
    //     price: "$220.00",
    //     desc: "Broasting is a special cooking process that combines pressure frying and traditional shallow frying to produce juicy chunks of fried chicken with a crispy outer layer.",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    // {
    //     sn: 47, 
    //     title: "Chat Pata Masala Borast Leg",
    //     price: "$200.00",
    //     desc: "Broasting is a special cooking process that combines pressure frying and traditional shallow frying to produce juicy chunks of fried chicken with a crispy outer layer.",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    // {
    //     sn: 48, 
    //     title: "Yummi Nuggets",
    //     price: "$100.00",
    //     desc: "a food product consisting of a small piece of deboned chicken meat that is breaded or battered, then deep-fried or baked. .",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    // {
    //     sn: 49, 
    //     title: "Hot Dog",
    //     price: "$100.00",
    //     desc: "a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. The term hot dog can refer to the sausage itself..",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    // {
    //     sn: 50, 
    //     title: "Chicken Burger",
    //     price: "$130.00",
    //     desc: "Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo..",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    // {
    //     sn: 51, 
    //     title: "Beef Burger",
    //     price: "$150.00",
    //     desc: "Juicy, big, loaded with toppings of my choice. High quality beef medium to well with cheese and bacon on a multigrain bun.",
    //     image: "Assets/",
    //     category: "FastFood",
    // },

    {
        sn: 52, 
        title: "Chicken Mayo Garlic Roll",
        price: "$70.00",
        desc: "A very simple garlic sauce can be made by adding crushed or minced garlic to Strained yogurt, mayonnaise or sour cream.In addition to chicken, the roll may contain butter, mayonnaise, other condiments, lettuce, onion, cheese, stuffing, or potato wedges.",
        image: "Assets/ChickenMayoGarlicRoll.jpg",
        category: "BBQ",
    },

    {
        sn: 53, 
        title: "Beef Mayo Garlic Roll",
        price: "$90.00",
        desc: "A very simple garlic sauce can be made by adding crushed or minced garlic to Strained yogurt, mayonnaise or sour cream.In addition to Beef, the roll may contain butter, mayonnaise, other condiments, lettuce, onion, cheese, stuffing, or potato wedges..",
        image: "Assets/BeefMayoGarlicRoll.jpg",
        category: "BBQ",
    },

    // {
    //     sn: 54, 
    //     title: "Beef Roll",
    //     price: "$90.00",
    //     desc: "6 ounces cooked beef (such as roast or steak), cut into long thin strips (about 1-1/2 cups) 2 cups leftover cooked rice. 4 sheets nori (dried seaweed) (about 8-inch square).",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 55, 
    //     title: "Chicken Roll",
    //     price: "$70.00",
    //     desc: "Chicken Roll is a delectable North Indian recipe made using all purpose flour, stir-fried chicken, yoghurt and a variety of vegetables rolled into paranthas. .",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 56, 
    //     title: "Chicken Boti Plate",
    //     price: "$100.00",
    //     desc: "These chicken boti kebabs are infused with spices, flavored with ginger and garlic, and marinated in yogurt to keep them moist and juicy. Though these are traditionally served with naan in Pakistan.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    {
        sn: 57, 
        title: "Beef Boti Plate",
        price: "$120.00",
        desc: "These Beef boti kebabs are infused with spices, flavored with ginger and garlic, and marinated in yogurt to keep them moist and juicy. Though these are traditionally served with naan in Pakistan.",
        image: "Assets/BeefBotiPlate.jpg",
        category: "BBQ",
    },

    {
        sn: 58, 
        title: "Chicken Mali Boti Plate",
        price: "$150.00",
        desc: "These Chicken Mali boti are infused with spices, flavored with ginger and garlic, and marinated in yogurt to keep them moist and juicy. Though these are traditionally served with naan in Pakistan.",
        image: "Assets/ChickenMaliBotiPlate.jpg",
        category: "BBQ",
    },
    
    // {
    //     sn: 59, 
    //     title: "Beef Mali Boti Plate",
    //     price: "$150.00",
    //     desc: "These Beef Mali boti kebabs are infused with spices, flavored with ginger and garlic, and marinated in yogurt to keep them moist and juicy. Though these are traditionally served with naan in Pakistan.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 60, 
    //     title: "Chicken White Karahi",
    //     price: "$150.00",
    //     desc: "It's a rather thick, jammy gravy and concentrated in flavour – yum! The traditional Karahi has undergone pretty major alterations over time..",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 61, 
    //     title: "Behari Boti Plate",
    //     price: "$150.00",
    //     desc: "These Behari boti kebabs are infused with spices, flavored with ginger and garlic, and marinated in yogurt to keep them moist and juicy. Though these are traditionally served with naan in Pakistan.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 62, 
    //     title: "Chicken Rehsmi Boti Plate",
    //     price: "$150.00",
    //     desc: "These Chicken Rehsmi boti kebabs are infused with spices, flavored with ginger and garlic, and marinated in yogurt to keep them moist and juicy. Though these are traditionally served with naan in Pakistan.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 63, 
    //     title: "Chicken Tikka Leg",
    //     price: "$150.00",
    //     desc: "A chicken leg extends from the claw to what would be the animal's hip. When carving a chicken, it is cut into two leg quarters and two breast quarters. Each leg quarter, or simply the leg, includes two parts: the drumstick and the thigh. The two pieces may remain attached or sold as separate cuts.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 64, 
    //     title: "Chicken Tikka Chest",
    //     price: "$150.00",
    //     desc: "The dish is popular in India, Bangladesh, Pakistan and the United Kingdom. It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 65, 
    //     title: "Chicken Mali Tikka Chest",
    //     price: "$150.00",
    //     desc: "The dish is popular in India, Bangladesh, Pakistan and the United Kingdom. It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 66, 
    //     title: "Chicken Mali Tikka Leg",
    //     price: "$150.00",
    //     desc: "The dish is popular in India, Bangladesh, Pakistan and the United Kingdom. It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 67, 
    //     title: "Chicken Behari Tikka Chest",
    //     price: "$150.00",
    //     desc: "The dish is popular in India, Bangladesh, Pakistan and the United Kingdom. It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 68, 
    //     title: "Chicken Behari Tikka Leg",
    //     price: "$150.00",
    //     desc: "The dish is popular in India, Bangladesh, Pakistan and the United Kingdom. It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken..",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 69, 
    //     title: "Chicken Reshmi Kabab Plate",
    //     price: "$150.00",
    //     desc: "Moist minced Chicken Kebabs stewed in an onion and tomato curry. Accompanied by a side of white rice and naan. Reshmi, or silken chicken kabab, is so called because of the minced texture and creaminess.",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    // {
    //     sn: 70, 
    //     title: "Chicken Reshmi Kabab Roll",
    //     price: "$150.00",
    //     desc: "Reshmi kebabs are a dish of Moghul origin whose Persian-inspired cuisine was intricate and expensive to prepare. This was due in part to their use of costly ingredients such as meat, cream, nuts and spices..",
    //     image: "Assets/",
    //     category: "BBQ",
    // },

    {
        sn: 71, 
        title: "Pepsi",
        price: "$50.00",
        desc: "A carbonated soft drink with a cola flavor Create more smiles with every sip and every bite.",
        image: "Assets/Pepsi.jpg",
        category: "ColdDrink",
    },

    {
        sn: 72, 
        title: "Dwe",
        price: "$50.00",
        desc: "A carbonated soft drink with a cola flavor Create more smiles with every sip and every bite.",
        image: "Assets/Dwe.jpg",
        category: "ColdDrink",
    },

    // {
    //     sn: 73, 
    //     title: "Coka Cola",
    //     price: "$50.00",
    //     desc: "A carbonated soft drink with a cola flavor Create more smiles with every sip and every bite. By creating joyful moments through our delicious and nourishing products and unique brand experiences. By being the best possible partner, driving game-changing innovation and delivering a level of growth unmatched in our industry.",
    //     image: "Assets/",
    //     category: "ColdDrink",
    // },

    // {
    //     sn: 74, 
    //     title: "Fanta",
    //     price: "$50.00",
    //     desc: "A carbonated soft drink with a cola flavor Create more smiles with every sip and every bite. By creating joyful moments through our delicious and nourishing products and unique brand experiences. By being the best possible partner, driving game-changing innovation and delivering a level of growth unmatched in our industry.",
    //     image: "Assets/",
    //     category: "ColdDrink",
    // },

    // {
    //     sn: 75, 
    //     title: "Spite",
    //     price: "$50.00",
    //     desc: "A carbonated soft drink with a cola flavor Create more smiles with every sip and every bite. By creating joyful moments through our delicious and nourishing products and unique brand experiences. By being the best possible partner, driving game-changing innovation and delivering a level of growth unmatched in our industry.",
    //     image: "Assets/",
    //     category: "ColdDrink",
    // },

    // {
    //     sn: 76, 
    //     title: "Marinda",
    //     price: "$50.00",
    //     desc: "A carbonated soft drink with a cola flavor Create more smiles with every sip and every bite. By creating joyful moments through our delicious and nourishing products and unique brand experiences. By being the best possible partner, driving game-changing innovation and delivering a level of growth unmatched in our industry.",
    //     image: "Assets/",
    //     category: "ColdDrink",
    // },

    // {
    //     sn: 77, 
    //     title: "String",
    //     price: "$50.00",
    //     desc: "A carbonated soft drink with a cola flavor Create more smiles with every sip and every bite. By creating joyful moments through our delicious and nourishing products and unique brand experiences. By being the best possible partner, driving game-changing innovation and delivering a level of growth unmatched in our industry.",
    //     image: "Assets/",
    //     category: "ColdDrink",
    // },

    // {
    //     sn: 78, 
    //     title: "7up",
    //     price: "$50.00",
    //     desc: "A carbonated soft drink with a cola flavor Create more smiles with every sip and every bite. By creating joyful moments through our delicious and nourishing products and unique brand experiences. By being the best possible partner, driving game-changing innovation and delivering a level of growth unmatched in our industry.",
    //     image: "Assets/",
    //     category: "ColdDrink",
    // },

    {
        sn: 79, 
        title: "Aquafina",
        price: "$100.00",
        desc: "Aquafina originates from public water sources and is then purified through a rigorous purification process..",
        image: "Assets/Aquafina.jpg",
        category: "ColdDrink",
    },

    {
        sn: 80, 
        title: "BlueBerry",
        price: "$40.00",
        desc: "Puree blueberries in blender. Add pureed blueberries and sugar in sauce pan and stir, warming until sugar dissolves. Refrigerate mixture until cold.",
        image: "Assets/BlueBerry.jpg",
        category: "IceCream",
    },

    {
        sn: 81, 
        title: "Pista",
        price: "$40.00",
        desc: "It's sweet and creamy like IceCream should be, with subtle hints of savory nuttiness from the pistachios..",
        image: "Assets/Pasta.jpg",
        category: "IceCream",
    },

    {
        sn: 82, 
        title: "Peshawari",
        price: "$40.00",
        desc: "The classic Peshawari IceCream, crafted with milk, sugar, and cream, has retained its popularity since the 1960s. What truly makes it unforgettable is its lush, creamy texture, achieved through a meticulous churning process..",
        image: "Assets/Peshawari.jpg",
        category: "IceCream",
    },

    {
        sn: 83, 
        title: "Curnch",
        price: "$40.00",
        desc: "Vanilla IceCream with Nestlé Crunch® Chocolate Covered Krispies. Because our product is made fresh-right in each store, available flavors and menu items vary by region and location..",
        image: "Assets/Curnch.jpg",
        category: "IceCream",
    },

    // {
    //     sn: 84, 
    //     title: "Chocolate Fudge",
    //     price: "$40.00",
    //     desc: "Fudge is a dense, rich confection typically made with sugar, milk or cream, butter and chocolate or other flavorings. The base for fudge is boiled until it reaches the soft-ball stage (135 to 140 degrees F), then stirred or beaten as it cools to minimize the formation of sugar crystals..",
    //     image: "Assets/",
    //     category: "IceCream",
    // },

    // {
    //     sn: 85, 
    //     title: "Vanala",
    //     price: "$40.00",
    //     desc: " Vanilla IceCream is a sweet frozen dessert made from milk, cream, sugar, and vanilla flavoring from vanilla seeds, pure vanilla extract, vanilla seed paste, or a combination..",
    //     image: "Assets/",
    //     category: "IceCream",
    // },

    // {
    //     sn: 86, 
    //     title: "Almand",
    //     price: "$40.00",
    //     desc: "This is cold and sweet and full of almond flavor from almond extract and chopped toasted almonds.",
    //     image: "Assets/",
    //     category: "IceCream",
    // },

    // {
    //     sn: 87, 
    //     title: "Blackforest",
    //     price: "$40.00",
    //     desc: "Traditional black forest IceCream is normally a chocolate IceCream with cherries or a cherry jam swirl and chocolate flakes or chocolate chunks.",
    //     image: "Assets/",
    //     category: "IceCream",
    // },

    // {
    //     sn: 88, 
    //     title: "Black Berry",
    //     price: "$90.00",
    //     desc: "Blackberry flavor is similar to a red grape but sweeter, deeper, and stronger. They are succulent, soft, and juicy, slightly tart with earthy undertones.",
    //     image: "Assets/",
    //     category: "Mocktail",
    // },

    {
        sn: 89, 
        title: "Pena Colada",
        price: "$90.00",
        desc: "The piña colada is a popular classic cocktail invented in Puerto Rico made with pineapple juice, rum, and coconut, served blended or with crushed ice.",
        image: "Assets/Pena-Colada.jpg",
        category: "Mocktail",
    },

    {
        sn: 90, 
        title: "Double Apple",
        price: "$90.00",
        desc: "Crisp, tart, and balanced with perfect sweetness; our Green Apple Soda is like drinking straight from a Granny Smith apple tree but turned up to eleven..",
        image: "Assets/DoubleApple.jpg",
        category: "Mocktail",
    },

    {
        sn: 91, 
        title: "Special Lechi",
        price: "$90.00",
        desc: "The aromatic lychee is sweet, with slightly floral and acidic notes.Upon biting, you'll get a juicy flavor burst with a taste similar to a strawberry or pear with a hint of citrus. Some also compare the floral taste to rose",
        image: "Assets/Special-Lechi.jpg",
        category: "Mocktail",
    },

    {
        sn: 92, 
        title: "Chow Mein",
        price: "$190.00",
        desc: "More specifically, there are two main types of chow mein dishes: Steamed chow mein: In steamed chow mein, the noodles are initially flash-fried, then stir-fried while being tossed with additional ingredients like meat or vegetables and coated in a light sauce..",
        image: "Assets/ChowMein.jpg",
        category: "Chinese",
    },

    {
        sn: 93, 
        title: "Pasta",
        price: "$120.00",
        desc: "A collective name for a category of food made from wheat flour and water, sometimes with egg. The name refers to the resulting dough (pasta also means “dough”) that is rolled out and cut into various shapes. .",
        image: "Assets/Pasta.jpg",
        category: "Chinese",
    },

    // {
    //     sn: 94, 
    //     title: "Spring Roll",
    //     price: "$80.00",
    //     desc: "A cylindrical casing of rice paper, or sometimes wheat-and-egg dough, filled with a shredded mixture of vegetables and often meat or seafood, served fresh or deep-fried.",
    //     image: "Assets/",
    //     category: "Chinese",
    // },
    
    // {
    //     sn: 95, 
    //     title: "Wong Tong",
    //     price: "$40.00",
    //     desc: "A dumpling filled with minced pork and spices, usually boiled in and served with soup but sometimes fried as a side dish.",
    //     image: "Assets/",
    //     category: "Chinese",
    // },

    // {
    //     sn: 96, 
    //     title: "Hot & Sour",
    //     price: "$100.00",
    //     desc: "Hot and Sour soup is a Chinese soup that's savoury, spicy and tangy. The broth is thickened and it's filled with mushrooms, tofu, bamboo shoots and silky egg ribbons. The flavour and textures in this soup are an addictive combination, making it a firm Chinese restaurant favourite!.",
    //     image: "Assets/",
    //     category: "Chinese",
    // },

    
    // {
    //     sn: 97, 
    //     title: "Kung Pao Chicken",
    //     price: "$140.00",
    //     desc: "Kung pao chicken is Chinese-style stir-fried chicken cubes with dried chili peppers.",
    //     image: "Assets/",
    //     category: "Chinese",
    // },

    // {
    //     sn: 98, 
    //     title: "Sweet & Sour Pork",
    //     price: "$140.00",
    //     desc: "A Chinese stir-fry dish made with juicy pieces of pork tenderloin, bell peppers, onion, and pineapple. Battered pork gets fried until crispy then tossed in a sweet and tangy sauce..",
    //     image: "Assets/",
    //     category: "Chinese",
    // },

    // {
    //     sn: 99, 
    //     title: "Mapo Tofu",
    //     price: "$140.00",
    //     desc: "made with simmered medium-firm silken tofu flavored with fermented bean paste, beef, plenty of red-hot roasted chili oil, and a handful of Sichuan peppercorns.",
    //     image: "Assets/",
    //     category: "Chinese",
    // },

    // {
    //     sn: 100, 
    //     title: "Chicken Fried Rice",
    //     price: "$100.00",
    //     desc: "A dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat..",
    //     image: "Assets/",
    //     category: "Chinese",
    // },

    // {
    //     sn: 101, 
    //     title: "Char Siu",
    //     price: "$140.00",
    //     desc: "Long strips of seasoned boneless pork are skewered with long forks and placed in a covered oven or over a fire..",
    //     image: "Assets/",
    //     category: "Chinese",
    // },

    {
        sn: 102, 
        title: "Afghani Pilow",
        price: "$100.00",
        desc: "Kabuli Pulao was a dish originally created by the upper-class families of Kabul who could afford to include caramelized carrots, raisins, and nuts in their rice. With time, as the masses became wealthier the dish became more common and a staple all around..",
        image: "Assets/Afghani-Pilow.jpg",
        category: "Afghani",
    },

    {
        sn: 103, 
        title: "Afghani boti ",
        price: "$130.00",
        desc: "The national Afghani dish are very much from other restaurants as Dumba boti is one of the main and famous dish of this placeAfghani Beef Boti is a dish from Afghanistan and it's one of the most well-known dishes in that country. Afghan cuisine is mostly mild with aromatic flavors.",
        image: "Assets/Afghani-boti.jpg",
        category: "Afghani",
    },

    {
        sn: 104, 
        title: "Afghani Roshe",
        price: "$150.00",
        desc: "Afghani Mutton Rosh is a flavorful and aromatic dish originating from Afghanistan and KPK Pakistan. It is a traditional recipe that showcases the rich culinary heritage of the region..",
        image: "Assets/Roash.jpg",
        category: "Afghani",
    },

    {
        sn: 105, 
        title: "Dum Pukht",
        price: "$150.00",
        desc: "Dum Pukht, Larhmeen or slow oven cooking is a cooking technique associated with the Khyber Pukhtunkha region in Pakistan in which meat and vegetables are cooked over a very low flame, generally in sealed containers with very less spices..",
        image: "Assets/DumPukht.jpg",
        category: "Afghani",
    },

    // {
    //     sn: 106, 
    //     title: "Afghani Kahwa",
    //     price: "$50.00",
    //     desc: "Kahwah (also transliterated as qehwa, kehwa or kahwa) is the traditional preparation of green tea (Camellia sinensis) widely consumed in India, Pakistan, Afghanistan, Iran, some regions of Central Asia..",
    //     image: "Assets/",
    //     category: "Afghani",
    // },

    {
        sn: 107, 
        title: "Paratha",
        price: "$30.00",
        desc: "Paratha are unleavened layered flatbreads made with whole wheat flour (atta), salt, water & ghee or oil. These traditional flatbreads are a staple in Indian subcontinent and are served for a breakfast with a side of curd, chutney, pickle, curries, eggs and meat dishes..",
        image: "Assets/Paratha.png",
        category: "OtherItems",
    },

    {
        sn: 108, 
        title: "Tandori Roti ",
        price: "$20.00",
        desc: "Tandoori roti are unleavened whole wheat flat breads. Traditionally these are made in a tandoor, which is a pot-shaped clay oven and not on a skillet or flat pan.",
        image: "Assets/Tandori-Roti.jpg",
        category: "OtherItems",
    },
    
    {
        sn: 109, 
        title: "Chapati",
        price: "$10.00",
        desc: " A round flat unleavened bread of India that is usually made of whole wheat flour and cooked on a griddle.",
        image: "Assets/Chapati.jpg",
        category: "OtherItems",
    },

    {
        sn: 110, 
        title: "Salad",
        price: "$30.00",
        desc: "A salad is a dish consisting of mixed ingredients, frequently vegetables. They are typically served chilled or at room temperature, though some can be served warm. .",
        image: "Assets/Salad.jpg",
        category: "OtherItems",
    },

    {
        sn: 110, 
        title: "Raita",
        price: "$30.00",
        desc: "That said, it's always made with yogurt—typically plain, full-fat yogurt—spices, and some kind of fruit or vegetable that will add heft and texture to the creamy spiced yogurt.",
        image: "Assets/Raita.jpg",
        category: "OtherItems",
    },

    // {
    //     sn: 111, 
    //     title: "Dodh Pati ",
    //     price: "$50.00",
    //     desc: "A tea beverage, originating from the Indian subcontinent, consumed in India, Pakistan, Bangladesh, Afghanistan and Nepal in which milk, together with sugar, is boiled with tea.",
    //     image: "Assets/",
    //     category: "OtherItems",
    // },
    // {
    //     sn: 112, 
    //     title: "Green Tea",
    //     price: "$50.00",
    //     desc: "A brewed green tea is typically green, yellow or light brown in color, and its flavor profile can range from grass-like and toasted (pan fired) to vegetal, sweet and seaweed-like (steamed). .",
    //     image: "Assets/",
    //     category: "OtherItems",
    // },

    // {
    //     sn: 113, 
    //     title: "Coffee",
    //     price: "$50.00",
    //     desc: "Coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Coffee is one of the three most popular beverages in the world (alongside water and tea).",
    //     image: "Assets/",
    //     category: "OtherItems",
    // },
];

let btns = ['All', 'BreakFast', 'Lunch', 'Dinner', 'FastFood', 'Chinese', 'Afghani', 'ColdDrink', 'Mocktail', 'IceCream', 'OtherItems']



let btnContainer = document.querySelector('.btn-container');
btns.map( (btn) => {
    btnContainer.innerHTML += `
    <button class ='mybtns' id="${btn}" onclick=display('${btn}')>${btn}</button>`
})


function check(btnName){
    console.log(btnName);
    
}

const sectionCenter = document.querySelector('.section-center');
function display(btnName) {

    sectionCenter.innerHTML = ""

    let filtration =  menu.filter( (menuItem) => {
        if(btnName == "All") return true
        if (menuItem.category == btnName) return menuItem 
    })

    filtration.forEach( (cardItem) => {
        sectionCenter.innerHTML += `
        <article class= "menu-item">
         <image src=${cardItem.image} alt=${cardItem.title} class="Photo">
         <div class="item-info">
         <header>
             <h4 class="cardItem">${cardItem.title}</h4>
             <h4 class="price">${cardItem.price}</h4>
         </header>
             <p class="item-text">${cardItem.desc}</p>
         </div>
         </article>
        `
    })
}

display("All")


