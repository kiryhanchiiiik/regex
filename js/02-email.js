const text = `
Hello, contact me at john.doe@example.com.
Or reach support: support123@my-company.org
Invalid: test@com, @test.com
`;

const emailRegex = /\b[A-Za-z-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

const emails = text.match(emailRegex);
console.log(emails);
