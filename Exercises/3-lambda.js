'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;



const tagDate = (str) => {
const date = new Date().toISOString().split('T')[0];
// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.
    return tagged(date, str)
} 

module.exports = { tagDate };
