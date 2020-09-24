import { environment } from '@environments/environment';

export function getIdFromUrl(url: string): number {
    const baseUrl = environment.serverUrl;
    const type = getType(url);
    const id = url.replace(`${baseUrl}${type}/`, '').replace('/', '');
    return +id;
}

function getType(url: string): string {
    const types = [
        'films', 'people', 'planets'
    ];

    for (const type of types) {
        if (url.indexOf(type) > -1) {
            return type;
        }
    }
}
