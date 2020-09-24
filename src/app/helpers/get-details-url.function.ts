import { getIdFromUrl } from './get-id-from-url.function';

export function getDetailsUrl(url: string, type: 'films' | 'characters' | 'planets'): string {
    const id = getIdFromUrl(url);
    return `/app/${type}/details/${id}`;
}
