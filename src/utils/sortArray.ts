export const shuffle = (arr: any[]) => arr.sort(() => (Math.random() > .5) ? 1 : -1);