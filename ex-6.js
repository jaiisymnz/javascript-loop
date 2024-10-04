// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
// for(let i = 0; i<companyName.length; i++) {
//           console.log(companyName[i]);
// };
// console.log(reversedCompanyName);

for(let i = companyName.length-1; i>=0; i--) {
          console.log(companyName[i]);
          reversedCompanyName = reversedCompanyName + companyName[i];
};

console.log(reversedCompanyName)