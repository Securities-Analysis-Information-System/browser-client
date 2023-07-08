import {writable} from 'svelte/store';

export const currentYearStore = writable((new Date()).getFullYear());