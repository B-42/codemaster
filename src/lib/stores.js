import { writable } from "svelte/store";

export const window = writable({
    width: undefined,
    height: undefined,
    isMobile: false
}),
solvePageRiddle = writable(undefined);