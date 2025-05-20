function parseCode(encodedString) {
    // Split the string by '0' and filter out any empty strings
    const parts = encodedString.split('0').filter(part => part !== '');
    
    // Return an object with the extracted values
    return {
        firstName: parts[0],
        lastName: parts[1],
        id: parts[2]
    };
}

// Example usage:
console.log(parseCode("John000Doe000123")); // { firstName: "John", lastName: "Doe", id: "123" }
console.log(parseCode("michael0smith004331")); // { firstName: "michael", lastName: "smith", id: "4331" }
console.log(parseCode("Thomas00LEE0000043")); // { firstName: "Thomas", lastName: "LEE", id: "43" }
