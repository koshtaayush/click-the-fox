/**
  * Util function shuffle the contents of an array
*/
export const shuffleArray = (sourceArray: Array<IImagesWithUrl>) => {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

interface IImagesWithUrl {
  image: string,
  isFox: boolean,
}