//imports
import transformCollectionToString from "./transformCollectionToString.js";

console.log(transformCollectionToString(["apple", "grapes", "strawberries"])); // "apple | grapes | strawberries"

console.log(transformCollectionToString([])); // ""
