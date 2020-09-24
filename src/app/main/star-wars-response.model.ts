export interface StarWarsResponse<T> {
    count: number;
    next: number;
    previous: number;
    results: T[];
}
