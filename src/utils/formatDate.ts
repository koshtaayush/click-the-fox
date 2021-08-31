import { months } from './../config/constants.config'

/**
  * Util function to convert the date format to desired format
  * Input Date.now
  * Returns example 2021, Sep 1
*/
export const formatDate = (inputDate: Date) => {
    let formattedDate = `${inputDate.getFullYear()}, ${months[inputDate.getMonth()]} ${inputDate.getDate()}`
    return formattedDate;
}  