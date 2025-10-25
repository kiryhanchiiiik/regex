const text = `
Call me at 123-456-7890 or (987) 654-3210.
Other numbers: 12-345-6789, 1234567890
`;

const phoneRegex = /(\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}/g;
const phones = text.match(phoneRegex);
console.log(phones);
