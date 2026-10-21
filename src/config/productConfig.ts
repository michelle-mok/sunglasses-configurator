export const SUNGLASSES_MATERIAL_NAMES = ['temples', 'earhooks', 'lens_exterior'] as const;

export type SunglassesMaterialName = (typeof SUNGLASSES_MATERIAL_NAMES)[number];

type ProductOption = {
    id: string;
    label: string;
    price: number;
    color: string;
};

type LensOption = ProductOption & { iridescence: number; iridescenceThickness: number };

type OptionCategory = {
    id: string;
    material: Exclude<SunglassesMaterialName, 'lens_exterior'>;
    label: string;
    options: readonly ProductOption[];
};

type LensCategory = {
    id: string;
    material: 'lens_exterior';
    label: string;
    options: readonly LensOption[];
};

export const PRODUCT_CATEGORIES = [
    {
        id: 'frame',
        material: 'temples',
        label: 'Frame finish',
        options: [
            {
                id: 'silver',
                label: 'Silver',
                price: 0,
                color: '#f5f5f5',
            },
            {
                id: 'gold',
                label: 'Gold',
                price: 20,
                color: '#d4af37',
            },
            {
                id: 'gunmetal',
                label: 'Gunmetal',
                price: 15,
                color: '#5a5d62',
            },
        ],
    },
    {
        id: 'earhook',
        material: 'earhooks',
        label: 'Earhook color',
        options: [
            {
                id: 'black',
                label: 'Black',
                price: 0,
                color: '#1a1a1a',
            },
            {
                id: 'white',
                label: 'White',
                price: 10,
                color: '#eeeeee',
            },
            {
                id: 'red',
                label: 'Red',
                price: 15,
                color: '#b3202a',
            },
        ],
    },
    {
        id: 'lens',
        material: 'lens_exterior',
        label: 'Lens',
        options: [
            {
                id: 'original',
                label: 'Original',
                price: 0,
                color: '#181818',
                iridescence: 1,
                iridescenceThickness: 300.01,
            },
            {
                id: 'thin-coating',
                label: 'Thin Coating',
                price: 25,
                color: '#181818',
                iridescence: 1,
                iridescenceThickness: 200,
            },
            {
                id: 'smoke-tint',
                label: 'Smoke Tint',
                price: 10,
                color: '#181818',
                iridescence: 0,
                iridescenceThickness: 0,
            },
        ],
    },
] as const satisfies readonly (OptionCategory | LensCategory)[];
