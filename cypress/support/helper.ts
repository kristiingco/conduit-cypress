export const convertFavoriteCountToNumber = (str: string) => {
    return Number(str.trim().split(/[\s()]+/)[1]);
};
