const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        name: "Interlocking G necklace with hazelnut and peanut charms",
        price: 3100,
        img: "https://media.gucci.com/style/White_South_0_160_158x158/1674777654/741762_I4601_0911_002_100_0000_Light.jpg",
        description:
          "Statement necklaces highlight the Spring Summer 2023 looks. The oversized design emphasizes recognizable House symbols, blending historic elements with a modern spirit. This Interlocking G necklace with hazelnut and peanut charms is a testament to Gucci's creative vision.",
        description1: "Metal with silver-toned finish",
        description2: "Hazelnut and peanut charms",
        description3: "Interlocking G detail",
        description4: "Clasp closure",
        description5: "Length: 25.5",
        description6: "Made in Italy",
        description7:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy",
      },
      {
        id: 2,
        name: "Interlocking G choker",
        price: 4200,
        img: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1675969257/741869_I4729_8131_001_100_0000_Light-Interlocking-G-choker.jpg",
        description:
          "Statement necklaces highlight the Spring Summer 2023 looks. The oversized design emphasizes recognizable House symbols, blending historic elements with a modern spirit. A testament to Gucci's creative vision, this striking choker incorporates the Interlocking G motif into the popular chunky chain style.",
        description1: "Metal with palladium-toned finish",
        description2: "Groumette style",
        description3: "Interlocking G detail",
        description4: "Length: 13",
        description5: "Made in Italy",
        description6:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
      },
      {
        id: 3,
        name: "Interlocking G crystal single earring",
        price: 1200,
        img: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_490x490/1674777695/746071_IAAC6_8520_001_100_0000_Light-Interlocking-G-crystal-single-earring.jpg",
        description:
          "Statement accessories highlight the Spring Summer 2023 looks. Their design emphasizes recognizable House symbols, blending historic elements with a modern spirit. A testament to Gucci's creative vision, this striking crystal single earring incorporates the Interlocking G motif into a sleek design.",
        description1: "Metal with silver-toned finish",
        description2: "Crystal chains",
        description3: "Interlocking G detail",
        description4: "Clip-on",
        description5: "Made in Italy",
        description6:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy",
      },
      {
        id: 4,
        name: "Interlocking G nail accessory set",
        price: 1100,
        img: "https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1658246451/720757_J3F42_8162_001_100_0000_Light-Interlocking-G-nail-accessory-set.jpg",
        description:
          "The Punk attitude, a recurring narrative from the Gucci Exquisite fashion show defines this nail piercing set. The set of four is composed of two rings, a stud and a dangling nail piercing all made of metal and enriched with crystals. The set is defined by the Interlocking G logo, a nod to the past.",
        description1: "Metal with palladium finish",
        description2:
          "Set of four nail accessories with crystals and Interlocking G details",
        description3: "Made in Italy",
        description4:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy",
        description5: "Made in Italy",
        description6: "Length: 13",
      },
      {
        id: 5,
        name: "Single earring to lip jewelry piece",
        price: 1100,
        img: "https://media.gucci.com/style/HEXF1E9FB_Center_0_0_800x800/1665509418/726950_I4601_0926_001_100_0000_Light-Single-earring-to-lip-jewelry-piece.jpg",
        description:
          "Looks from the Cruise 2023 Gucci Cosmogonie runway show were accessorized with statement-making jewelry pieces. Refined headpieces and unique earrings are masterfully crafted from metal with filigree detailing, the House logo and floral patterns.",
        description1: "Metal with aged palladium finish",
        description2: "Interlocking G fringe detail",
        description3: "Attaches to the ear and the lip",
        description4: "Made in Italy",
        description5:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
        description6: "Length: 13",
      },

      {
        id: 6,
        name: "Interlocking G multi-chain face mask",
        price: 2900,
        img: "https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1675969247/741839_I8775_8181_001_100_0000_Light-Interlocking-G-multi-chain-face-mask.jpg",
        description:
          "This season, Gucci continues to envision jewelry as part of the Ready-to-Wear collection. Embellished with cascading metal chains and GG logo details, these statement accessories can be worn alone or together with mono earrings from the line to emphasize individual looks. This design with multiple crystal chains is a bold take on the face mask.",
        description1: "Metal with silver-toned finish",
        description2: "Crystal beads and grosgrain",
        description3: "Interlocking G detail",
        description4: "Elastic band",
        description5: "Made in Italy",
        description6:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
      },
      {
        id: 7,
        name: "Hoop earrings with Interlocking G",
        price: 500,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1663780528/702525_I4601_0926_001_100_0000_Light-Hoop-earrings-with-Interlocking-G.jpg",
        description:
          "The gourmette chain has been reprised from Gucci Aria, appearing not only in the form of necklaces and bracelets but also for smaller accessories. Here, the chain forms this pair of hoop earrings, complete with the emblematic Interlocking G logo.",
        description1: "Palladium metal",
        description2: "Gourmette chain design with Interlocking G detail",
        description3: "For pierced ears",
        description4: "Length: .8",
        description5: "Made in Italy",
        description6:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
      },
      {
        id: 8,
        name: "Interlocking G gourmette chain ring",
        price: 340,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1647451844/702514_I4601_0926_001_100_0000_Light-Interlocking-G-gourmette-chain-ring.jpg",
        description:
          "The gourmette chain has been reprised from Gucci Aria, appearing not only in the form of necklaces and bracelets but also for smaller accessories. Here the chain defines this palladium toned ring, complete with the Interlocking G emblem for a distinct logo feel.",
        description1: "Palladium metal",
        description2: "Gourmette chain design with Interlocking G detail",
        description3: "Band width: .3",
        description4: "Made in Italy",
        description5:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
        description6: "Length: 13",
      },
      {
        id: 9,
        name: "Bracelet with Interlocking G",
        price: 760,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1631552408/675758_I4601_0926_001_100_0000_Light-Bracelet-with-Interlocking-G.jpg",
        description:
          "This contemporary gourmette chain bracelet is crafted from a dark grey palladium finish. The Interlocking G appears as a small logo detail, representative of Founder Guccio Gucci's initials.",
        description1: "Metal with palladium finish",
        description2: "Gourmette chain design with Interlocking G detail",
        description3: "Box clasp",
        description4: "Width: .4",
        description5: "Made in Italy",
        description6:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
      },
      {
        id: 10,
        name: "Crystal earcuff",
        price: 1500,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1664469003/719231_J3F42_8162_001_100_0000_Light-Crystal-earcuff.jpg",
        description:
          "Magical mirrors become a metaphor of the latet Gucci Exquisite collection. The contemporary earcuff is enriched by crystals and the Gucci logo completes the design.",
        description1: "Metal with palladium finish",
        description2: "Crystal details",
        description3: "Engraved Gucci script detail",
        description4: "1.6 length",
        description5: "Made in Italy",
        description6:
          "Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy",
      },
      {
        id: 11,
        name: "Wool crêpe jacket",
        price: 4400,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1675881955/737474_Z8BFO_9045_001_100_0000_Light-Wool-crpe-jacket.jpg",
        description:
          "Further exploring formalwear with an unconventional approach, the Spring Summer 2023 collection looks at the concept of tailoring with a new lens. The House reinterprets classic silhouettes, combining minimal jackets with cues from the 1990s for an innovative update of the wardrobe. This wool crêpe jacket features a bold rectangular G buckle.",
        description1: "Ivory crêpe wool",
        description2: "Gold-toned GG buttons",
        description3: "Lined",
        description4: "Detachable collar",
        description5: "Detachable self-tie belt with bold rectangular G buckle",
        description6: "Two front pockets",
      },
      {
        id: 12,
        name: "Soft wool silk jacket",
        price: 4700,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1676313954/737469_Z8BFK_1000_001_100_0000_Light-Soft-wool-silk-jacket.jpg",
        description:
          "Further exploring formalwear with an unconventional approach, the Spring Summer 2023 collection looks at the concept of tailoring with a new lens. The House reinterprets classic silhouettes, combining minimal jackets with cues from the 1990s, including lingerie inspirations, for an innovative update of the wardrobe. This structured silk jacket is presented in a soft wool silk fabric, characterized by a removable leather belt with contrasting metal buckle.",
        description1: "Black soft wool silk",
        description2: "Lined",
        description3: "Round collar",
        description4: "Short sleeves with turn-up cuffs",
        description5: "Four front pockets",
        description6: "Removable leather belt with metal buckle",
      },
      {
        id: 13,
        name: "Wool silk cut-out short",
        price: 2150,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1675878334/746576_ZAMKA_1000_001_100_0000_Light-Wool-silk-cut-out-short.jpg",
        description:
          "Further exploring formalwear with an unconventional approach, the Spring Summer 2023 collection looks at the concept of tailoring with a new lens. The House reinterprets classic silhouettes, combining minimal jackets with cues from the 1990s, including lingerie inspirations, for an innovative update of the wardrobe. This pair of shorts feature a cut-out details and detachable GG mesh culottes.",
        description1: "Black soft wool silk",
        description2: "Detachable GG mesh culottes",
        description3: "Hook closure",
        description4: "Length: 22.8 based on a size 40 (IT)",
        description5: "Leg width: 20.5 based on a size 40 (IT)",
        description6: "Made in Italy",
      },
      {
        id: 14,
        name: "Cotton poplin shirt",
        price: 14,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1675900049/737987_ZAMWP_9245_001_100_0000_Light-Cotton-poplin-shirt.jpg",
        description:
          "Presenting a classic ready-to-wear style. This shirt in black cotton poplin features a point collar and epaulette detail. A button closure completes the design.",
        description1: "White cotton poplin",
        description2: "Point collar",
        description3: "Epaulette detail",
        description4: "Button closure",
        description5: "Length: 13.8 based on a size 40 (IT)",
        description6: "Made in Italy",
      },
      {
        id: 15,
        name: "Lurex pleated dress",
        price: 7000,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1675881912/737075_ZAMI5_1700_001_100_0000_Light-Lurex-pleated-dress.jpg",
        description:
          "A silver pleated lurex dress speaks to the glamorous and elegant side of the Gucci narrative. The silhouette features balloon sleeves and a wrap front style, while self-covered buttons add the final touch of sophistication.",
        description1: "Silver pleated lurex",
        description2: "Self-covered buttons",
        description3: "Half lined",
        description4: "Crewneck",
        description5: "Long balloon sleeves",
        description6: "Fitted button cuffs",
      },
      {
        id: 16,
        name: "Cotton ribbon jersey maxi dress",
        price: 2800,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1676076345/738771_XJFIR_1000_001_100_0000_Light-Cotton-ribbon-jersey-maxi-dress.jpg",
        description:
          "Sparkling elements illuminate a selection of ready-to-wear pieces for the Spring Summer 2023 collection, reminiscent of '90s partywear. This striking jersey maxi dress reveals sculptural cut-out details, further enriched with leather straps and a glimmering crystal G square.",
        description1: "Black cotton ribbon jersey",
        description2: "Leather straps with crystal G square",
        description3: "Adjustable straps",
        description4: "Cut-out detailing",
        description5: "Detachable leather strings",
        description6: "The product shown in this image is a size 40 (IT)",
      },
      {
        id: 17,
        name: "Voile lamé top",
        price: 3500,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1676483136/741246_ZAMYF_5632_001_100_0000_Light-Voile-lam-top.jpg",
        description:
          "Reminiscent of '90s fashion, this cropped crewneck top is crafted in a silver voile lamé. Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive accessories, from the everyday wardrobe to special occasions, the House's beloved motifs embellish ready-to-wear, handbags, shoes, and other collections.",
        description1: "Silver voile lamé",
        description2: "Unlined",
        description3: "Crewneck",
        description4: "Short sleeves",
        description5: "Cropped",
        description6: "Length: 15.3, based on a size 40 (IT)",
      },
      {
        id: 18,
        name: "Wool silk pant",
        price: 1650,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1675362620/737876_ZAMKA_1000_001_100_0000_Light-Wool-silk-pant.jpg",
        description:
          "In a play with fabrics and silhouettes, the Spring Summer 2023 collection blends relaxed silhouettes and sophisticated references, resulting in a series of hybrid looks. From suits to denim, the pant, a signature Gucci item, continues to be a staple throughout the womenswear selection, creating a new idea of daywear that reflects the House’s aesthetic. This pant appears in soft black wool silk.",
        description1: "Black soft wool silk",
        description2: "Belt loops",
        description3: "Two side pockets",
        description4: "Two back pockets",
        description5: "Regular waist",
        description6: "Button and zip closure",
      },
      {
        id: 19,
        name: "Gucci Guilty Parfum Pour Homme, 90ml, eau de parfum",
        price: 175,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1640103305/703097_99999_0099_001_100_0000_Light-Gucci-Guilty-Parfum-Pour-Homme-90ml-eau-de-parfum.jpg",
        description:
          "The #ForeverGuilty universe continues to pursue a liberated notion of love with a reinterpretation of the classic Gucci Guilty fragrances. The new vision elevates the scent to higher levels of intensity for those looking for a declaration of love free from the rules and definitions of society. Designed to act as emblems of the connection between like-minded, eccentric lovers, Gucci Guilty Parfum Pour Homme is a Woody Aromatic Ambery fragrance that magnifies the true essence of the Gucci Guilty Pour Homme signature.",
        description1: "90ml",
        description2:
          "Gucci Guilty Parfum Pour Homme opens with a lighter, milder, and more modernized aromatic hook of French Lavandin Abrialis and uplifting Lemon Sfumatrice that combine perfectly with the intensity of Juniper.",
        description3:
          "The true essence of Gucci Guilty Pour Homme is magnified at the heart, with the deep ambery signature of Spanish Cistus combined with the floral richness of Orange Flower and a spicy hint of Nutmeg.",
        description4:
          "The mysterious elegance of Indonesian Patchouli is reinforced with the long-lasting sensation of Dry Woods and Musks.",
        description5:
          "Encapsulated in a fully metallized bottle, dressed in dark anthracite, with a matching cap. The design is finished with the House’s emblematic interlocking G logo.",
        description6: "Made in Italy",
      },
      {
        id: 20,
        name: "Gucci Guilty Pour Homme, 90ml eau de toilette",
        price: 119,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1545326106/563057_99999_0099_001_100_0000_Light-Gucci-Guilty-Pour-Homme-90ml-eau-de-toilette.jpg",
        description:
          "An Aromatic Fougère, the original Gucci Guilty Pour Homme eau de toilette enters a new chapter, embodying the free spirit of a new generation of scent lovers. Individual, yet fusing together naturally, the men's and women's perfumes embody a declaration of self-expression and fearlessness, conjured up by the statement #ForeverGuilty.",
        description1:
          "Top notes of Pink Pepper, a spicy, intense flavor mixed with invigorating Italian Lemon.",
        description2:
          "Heart notes of Orange Blossom Absolute blended with Neroli and French Lavender.",
        description3:
          "Base notes of Patchouli, embodying a modern expression of sensuality, mystery, and intrigue. The dry down is intensified with the masculine richness of Cedarwood.",
        description4:
          "Gucci Guilty Pour Homme’s grey clad bottle and cap complement the warm purple-grey colored scent. The Interlocking G logo defines the front.",
        description5: "90ml",
        description6: "Made in Italy",
      },
      {
        id: 21,
        name: "Gucci Guilty Parfum Pour Homme, 50ml, eau de parfum",
        price: 146,
        img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1636650075/703099_99999_0099_001_100_0000_Light-Gucci-Guilty-Parfum-Pour-Homme-50ml-eau-de-parfum.jpg",
        description:
          "The #ForeverGuilty universe continues to pursue a liberated notion of love with a reinterpretation of the classic Gucci Guilty fragrances. The new vision elevates the scent to higher levels of intensity for those looking for a declaration of love free from the rules and definitions of society. Designed to act as emblems of the connection between like-minded, eccentric lovers, Gucci Guilty Parfum Pour Homme is a Woody Aromatic Ambery fragrance that magnifies the true essence of the Gucci Guilty Pour Homme signature.",
        description1: "50ml",
        description2:
          "Gucci Guilty Parfum Pour Homme opens with a lighter, milder, and more modernized aromatic hook of French Lavandin Abrialis and uplifting Lemon Sfumatrice that combine perfectly with the intensity of Juniper.",
        description3:
          "The true essence of Gucci Guilty Pour Homme is magnified at the heart, with the deep ambery signature of Spanish Cistus combined with the floral richness of Orange Flower and a spicy hint of Nutmeg.",
        description4:
          "The mysterious elegance of Indonesian Patchouli is reinforced with the long-lasting sensation of Dry Woods and Musks.",
        description5:
          "Encapsulated in a fully metallized bottle, dressed in dark anthracite, with a matching cap. The design is finished with the House’s emblematic interlocking G logo.",
        description6: "90ml",
      },

      {
        id: 22,
        name: "Stylo Définition L’Obscur Ink Liner",
        price: 39,
        img: "https://media.gucci.com/content/DarkGray_ProductPush_Standard_700x700/1648800903/ProductPush_ink-liner-white-new-02_001_Light.jpg",
        description:
          "Stylo Définition L’Obscur is the perfect ink lining tool for creating one-stroke results. Designed with a precise felt-tip, the ultra-pigmented liner is formulated for a long-lasting, waterproof satin finish. The liner glides on easily and dries quickly, while the black satin color creates an ultra-intense effect.",
        description1: "Black satin finish",
        description2:
          "What it is: Gucci ink lining tool for creating intense black eye looks in one stroke.",
        description3:
          "Why it is special: with an ultra-precise and flexible felt-tip applicator, it allows for fine and bold lines and everything in between, for endless makeup looks.",
        description4:
          "Long-lasting for up to 18 hours, waterproof and tear-proof, glides on easily to deliver an intense black satin color in just one stroke.",
        description5:
          "Key ingredients: a combination of film formers for their waterproof and long-lasting properties and carbon black pigments to deliver a one-stroke application, with great black color opacity.​",
        description6:
          "Ophthalmologically-tested, it is suitable for sensitive eyes and contact lens wearers.​",
      },
      {
        id: 23,
        name: "Mascara L'Obscur, black",
        price: 36,
        img: "https://media.gucci.com/content/DarkGray_ProductPush_Standard_700x700/1588069803/ProductPush_mascara-white-new_001_Light.png",
        description:
          "In a buildable and versatile intense black hue, Gucci's Mascara L’Obscur encompasses the charm and mystery its name suggests. Encased within the House's covetable signature packaging, it is designed with a uniquely shaped brush and formula that grips the lashes for distinct results. L'Obscur was created for customized performance for those who dare to express and embrace their differences: from classic to bold, understated to punk. The ultra-rich creamy formula builds volume, while curling and lifting the lashes, adding length and definition with a long-wearing finish.",
        description1: "Black",
        description2:
          "Rich, creamy texture adheres to the lashes for a long-wearing, smudge- and flake-proof finish that lasts up to 12 hours",
        description3:
          "Buildable, volumizing formula thickens lashes without clumping",
        description4: "Coats lashes from root to tip for optimal length",
        description5:
          "Curls and lifts the lashes with high definition and separation",
        description6:
          "Flexible elastomer brush can be positioned horizontally or vertically. The thin head is designed for catching the smallest lashes in the corner of the eyes and along the bottom lash line. The soft comb separates lashes from the root to create a wide fanned-out effect.",
      },
      {
        id: 24,
        name: "514 Virginia Scarlett, Rouge De Beauté Brillant",
        price: 45,
        img: "https://media.gucci.com/style/Transparent_South_0_160_316x316/1611681305/647859_9PL13_9514_001_100_0000_Light-514-Virginia-Scarlett-Rouge-De-Beaut-Brillant.png",
        description:
          "Gucci Beauty presents Rouge De Beauté Brillant, a special lip color set apart by unique benefits. Serving as an in-between for a sheer and satin lipstick, the hybrid long-lasting dual-action formula delivers 24 hours of moisture and a beautifully pigmented shine. Beautiful shine and glowing color combine in vibrant hues of reds, pinks, corals and nudes. Formulated with nourishing and antioxidant ingredients, the creamy texture highlights and preserves the natural beauty of the mouth, so lips look fuller and plumped to perfection. A new vintage shape and design inspired by vintage brooches bears witness once again to the Creative Director’s passion for collectable objects of desire.",
        description1: "514 Virginia Scarlett",
        description2: "Formulated with ingredients of natural origin",
        description3: "Vibrant, glowing color",
        description4:
          "Luminous glowing finish with long-lasting shine for 4+ hours",
        description5:
          "Infused with luxurious and moisturizing Black Rose Oil and Peony Oil combined with Jojoba Seed Oil and Karité Butter for 24-hour moisturizing effects",
        description6:
          "Hyaluronic Acid provides immediate and long-lasting hydration, as well as a subtle lip-plumping and smoothing effect",
      },
      {
        id: 25,
        name: "201 The Painted Veil, Rouge à Lèvres Voile Lipstick",
        price: 45,
        img: "https://media.gucci.com/style/Transparent_South_0_160_316x316/1554383704/586169_9PLP8_9201_001_100_0000_Light-201-The-Painted-Veil-Rouge-Lvres-Voile-Lipstick.png",
        description:
          "A collection of moisture-rich lipsticks with a luminous shine, Rouge à Lèvres Voile delivers sheer color with an ultra-light and smooth feel. The first chapter in a new story for Gucci Beauty, born under the creative direction of Alessandro Michele, a range of brilliantly colored shades are inspired by iconic Hollywood movies and characters from the gilded era. The bold color palette speaks to the eccentric and free-spirited mood of the House's collections—an unconfined and unlimited form of self-expression—with each lipstick encased within precious gold-toned packaging topped with a rose printed cover that recalls vintage prints from the 1950s.",
        description1: "201 The Painted Veil (Rosewood)",
        description2: "Sheer finish lipstick",
        description3: "Semitransparent color with luminous shine",
        description4:
          "Moisturizing formula glides on smoothly for a comfortable, lightweight finish",
        description5:
          "Floral fragrance with violet notes and a soft, fruity scent",
        description6: "Dermatologically tested",
      },
      {
        id: 26,
        name: "02, Crayon Contour des Lèvres Lip Liner Pencil",
        price: 34,
        img: "https://media.gucci.com/style/Transparent_South_0_160_316x316/1611680406/662407_9PPL2_9002_001_100_0000_Light-02-Crayon-Contour-des-Lvres-Lip-Liner-Pencil.png",
        description:
          "Crayon Contour des Lèvres naturally enhances the fullness of the lips. With a soft and blendable formula, the lip contour pencil glides across the mouth with ease for the ultimate precision finish. In a range of intensely bold and soft universal nudes and reds, this is the perfect tool to fill and shape the lips for true staying power.",
        description1: "02 Rosewood",
        description2: "Instant and intense bold color",
        description3: "Feather-proof finish",
        description4: "Vegan formula",
        description5: "Stays put for four hours",
        description6:
          "Shea Butter, Jojoba and Canola Oils ensure creamy and soft texture that swipes effortlessly onto the lips",
      },
      {
        id: 27,
        name: "700 Crystal Black, Vernis à Ongles Nail Polish",
        price: 33,
        img: "https://media.gucci.com/style/Transparent_South_0_160_316x316/1612807206/662287_99PRD_9700_001_100_0000_Light-700-Crystal-Black-Vernis-Ongles-Nail-Polish.png",
        description:
          "An intense high-coverage varnish, the Vernis à Ongles capsule collection presents ten vibrant shades, offering a long-lasting glossy shine with a yesteryear glamour allure. A plant-based nail lacquer featuring a tailored brush for an effortless and even application, it glides onto nails applying a perfectly smooth film that dries fast and leaves a long-lasting shine. Inspired by vintage nail polish bottles, Vernis À Ongles is designed with a sleek ribbed grip handle, while the pear-shaped clear glass bottle is finished with Gucci lettering in gold.",
        description1: "700 Crystal Black",
        description2: "Plant-based",
        description3:
          "Comes with a custom-designed brush shape for an easy application",
        description4:
          "Vibrant, intense and ultra-shiny, it smooths out ridges and imperfections on the nail surface, while offering high coverage from first coat",
        description5:
          "Creating a glossy, glamorous finish, each layer transforms into an ultra-smooth film on contact with the nail and provides a pop of eye-catching colour",
        description6:
          "Designed with a sleek ribbed grip handle, while the pear-shaped clear glass bottle is finished with Gucci lettering in gold",
      },
      {
        id: 28,
        name: "713 Dorothy Turquoise, Vernis à Ongles Nail Polish",
        price: 33,
        img: "https://media.gucci.com/style/Transparent_South_0_160_316x316/1612807207/662287_99PRD_9713_001_100_0000_Light-713-Dorothy-Turquoise-Vernis-Ongles-Nail-Polish.png",
        description:
          "An intense high-coverage varnish, the Vernis à Ongles capsule collection presents ten vibrant shades, offering a long-lasting glossy shine with a yesteryear glamour allure. A plant-based nail lacquer featuring a tailored brush for an effortless and even application, it glides onto nails applying a perfectly smooth film that dries fast and leaves a long-lasting shine. Inspired by vintage nail polish bottles, Vernis À Ongles is designed with a sleek ribbed grip handle, while the pear-shaped clear glass bottle is finished with Gucci lettering in gold.",
        description1: "713​ Dorothy​ Turquoise​",
        description2: "Plant-based",
        description3:
          "Comes with a custom-designed brush shape for an easy application",
        description4:
          "Vibrant, intense and ultra-shiny, it smooths out ridges and imperfections on the nail surface, while offering high coverage from first coat",
        description5:
          "Creating a glossy, glamorous finish, each layer transforms into an ultra-smooth film on contact with the nail and provides a pop of eye-catching colour",
        description6:
          "Designed with a sleek ribbed grip handle, while the pear-shaped clear glass bottle is finished with Gucci lettering in gold",
      },
      {
        id: 29,
        name: "03, Gucci Blush De Beauté",
        price: 51,
        img: "https://media.gucci.com/style/Transparent_South_0_160_316x316/1657798203/702601_9PRD9_9003_001_100_0000_Light-03-Gucci-Blush-De-Beaut.png",
        description:
          "Gucci Beauty presents Gucci Blush De Beauté, the House’s first powder blush made for pure creative expression. Its adaptable formula of smooth powders and pigments is infused with emollient waxes to deliver buildable, long-lasting color that intensifies seamlessly, layer after layer. The hydrating, ultra-thin powder cares for all skin types with an infusion of Shea Butter, Hyaluronic Acid and Black Rose Oil, blending easily for a second-skin feel. Designed for versatility, every touch of Gucci’s new powder blush comforts with a moment of self-care that helps skin feel as good as it looks.",
        description1: "03 Radiant Pink",
        description2:
          "What it is: Gucci Beauty’s first powder blush, a smooth, playful, multi-use color for cheeks and eyes. ​",
        description3:
          "Why it is special: it offers a buildable, long-lasting luminous matte color, whether looking for a lightly flushed look or a daring flushed look.",
        description4:
          "Key Ingredients: Smooth Powders Emollient Waxes & Pigments, Shea Butter that helps reduce the overall feeling of dryness, Hyaluronic Acid to provide hydration, and Black Rose Oil with soothing properties.",
        description5:
          "Its ultra-thin powder blends effortlessly and provides a mistake-proof makeup application. With its skin-loving formula, the product delivers a beautiful color but also comfort and care. ​",
        description6:
          "Created as a treasured compact, it is ideal for an on-the-go application.​",
      },
      {
        id: 30,
        name: "Sérum De Beauté Fluide Soyeux Primer",
        price: 56,
        img: "https://media.gucci.com/content/BestOfEditsFeatured_Standard_432x364/1653916540/BestOfEditsFeatured_serum-new_001_Default.jpg",
        description:
          "A celebration of identity, the new Sérum de Beauté Fluide Soyeux silk priming serum has been meticulously crafted to harness, reveal and perfect the distinctive qualities of the individual. Its universal, non-sticky formula is suitable for all skin types—gliding on smoothly to even tone and plump skin while creating a natural finish with a soft glow effect. Imbued with lightweight agents that blur fine lines and pores, the primer can be worn alone or in preparation for a fuller look using other beautifying tools like Gucci’s Fluide De Beauté Fini Naturel liquid foundation.",
        description1: "Translucent",
        description2: "Universal formula suitable for all skin types",
        description3:
          "Luminous, natural finish for even tone and plumping effect",
        description4:
          "Imbued with a spherical powder for seamlessly silky application",
        description5:
          "Contains squalane, a natural-origin emollient derived from olive, mimicking the natural oils that the body produces to protect the skin and helping to replenish the natural moisture barrier.",
        description6:
          "Please note, returns on this item will be accepted only if the product is intact.",
      },
    ],
  });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
