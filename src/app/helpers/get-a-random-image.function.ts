export function getARandomImage(type: 'film' | 'character' | 'planet'): string {
    const images: string[] = getImagesArray(type);
    return images[~~(images.length * Math.random())];
}

function getImagesArray(type: 'film' | 'character' | 'planet'): string[] {
    switch (type) {
        case 'film':
            return filmImages;
        case 'character':
            return characterImages;
        case 'planet':
            return planetImages;
        default:
            return [];
    }
}

const filmImages: string[] = [
    'Unbenannt.png', 'Unbenannt-1.png', 'Unbenannt-2.png', 'Unbenannt-3.png', 'Unbenannt-4.png', 'Unbenannt-5.png'
];

const characterImages: string[] = [
    'Unbenannt.png', 'Unbenannt1.png', 'Unbenannt-1.png', 'Unbenannt-2.png', 'Unbenannt-3.png', 'Unbenannt-4.png'
];

const planetImages: string[] = [
    'pobrane.png', 'Unbenannt.png', 'Unbenannt-1.png', 'Unbenannt-2.png', 'Unbenannt-3.png', 'Unbenannt-4.png'
];
