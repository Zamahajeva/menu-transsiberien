/**
 * Cette fonction est appelé pour charger les données de la page, à la fois en front et en back.
 */
export function load() {
    return {
        entrees: [
            {
                plat: 'Oukha',
                description: 'Velouté aux trois poissons (saumon, sandre et carpe).',
                prix: 8.9
            },
            {
                plat: 'Crêpe à la sibérienne',
                description: 'Crêpe chaude à la viande hachée de bœuf grillé aux oignons et carottes au maïs, sauce fromage blanc, concombre et aneth.',
                prix: 8.9
            },
            {
                plat: 'Tartare de sandre de l\'Amou-Daria',
                description: 'Tartare de sandre à la coriandre grillée, coriandre fraîche, oignons et paprika. Légèrement épicé.',
                prix: 8.9
            },
            {
                plat: 'Noix de St Jacques façon Mer Noire',
                description: 'Noix de St Jacques marinées au citron et l\'huile d\'olive Kalamata, sauce poire et miel, caviar rouge de truite.',
                prix: 9.9
            },
            {
                plat: 'Pirojki (végétarien)',
                description: 'Petit chausson au chou blanc sauté au paprika doux, caviar d\'aubergines.',
                prix: 7.9
            },
            {
                plat: 'Okroshka',
                description: 'Soupe froide au lait fermenté, saucisson de porc, radis, concombres, œufs cuits, oignon vert, pommes de terre et l\'aneth.',
                prix: 7.9
            }
        ],
        plats: [
            {
                plat: 'Boeuf Stroganov',
                description: 'Bœuf sauté, puis braisé avec une sauce à la crème et à l\'ail. Accompagné de la purée de pommes de terre.',
                prix: 18.5,
            },
            {
                plat: 'Canard façon tsar',
                description: 'Magret de canard au miel et à la moutarde, petits pois verts, lardon, tomates cerises, cacahuètes.',
                prix: 22.9,
            },
            {
                plat: 'Gratin de berger de taïga\n',
                description: 'Gratin d\'agneau à la purée de pommes de terre et patate douce, salade de la betterave rouge aux noix.',
                prix: 18.5,
            },
            {
                plat: 'Saumon à la Pojarski',
                description: 'Saumon haché aux oignons grillés, carottes, pommes de terre, ciboulette et pané aux croûton de pain de mie, servie avec la poêlée de légumes.',
                prix: 18.9,
            },
            {
                plat: 'Grecciotto aux champignons (Végétarien)',
                description: 'Risotto de graines de sarrasin grillées aux champignons de saison.',
                prix: 15.5,
            },
            {
                plat: 'Saucisse de Kazan',
                description: 'Saucisse maison à la viande de poulet, poivrons, fromage et herbes fraîches. Servi avec écrasé de pommes de terre au fromage de brebis et coriandre fraiche.',
                prix: 17.9,
            },
        ],
        desserts: [
            {
                plat: 'Le Colonel',
                description: 'Coupe de sorbet au citron (3 boules) arrosé avec de la vodka.',
                prix: 8.5,
            },
            {
                plat: 'Gâteau au miel "Raïssa"',
                description: 'Dessert traditionnel où de la crème chantilly maison s\'alterne à plusieurs couches de biscuit au miel.',
                prix: 7.5,
            },
            {
                plat: 'Pavlova',
                description: 'Dessert à base de meringue nappé de crème fouettée et parsemé de fruits rouges.',
                prix: 7.9,
            },
            {
                plat: 'Syrniki comme chez ma grand-mère',
                description: 'Une sorte de beignet à base de fromage frais, de farine et d\'œufs. Servi avec une boule de sorbet framboise.\n' +
                    'Grafskie Razvalini\n',
                prix: 7.9,
            },
            {
                plat: 'Grafskie Razvalini',
                description: 'Petit chou rempli de crème vanille, meringue aux noix de cajou, framboises, sauce au fromage blanc et lait concentré sucré.',
                prix: 7.9,
            },

        ]
    };
}
