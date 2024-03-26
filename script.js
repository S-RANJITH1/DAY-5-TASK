// task 1 => For the given JSON iterate overv all for loops (for,for in, for of)

let persDetails = [
  {
    name: "Ranjith",
    age: "27",
    city: "Neyveli",
  },
  {
    name: "Varadhan",
    age: "30",
    city: "Titakudi",
  },
  {
    name: "Lenin",
    age: "35",
    city: "Trichy",
  },
];
//for loop
for (let i = 0; i < persDetails.length; i++) {
  console.log(persDetails[i].name, persDetails[i].age, persDetails[i].city);
}

//for in
for (let i in persDetails) {
  console.log(persDetails[i].name, persDetails[i].age, persDetails[i].city);
}
//for of
for (let j of persDetails) {
  console.log(j.name, j.age, j.city);
}

// task 2 => Create ur own resume data in JSON formate
let resume = {
  name: "Ranjith",
  age: "27",
  email: "ranjithppk2@gmail.com",
  phone: "1234567890",
  address: [
    {
      city: "Neyveli",
      pincode: "607805",
      state: "Tamilnadu",
    },
  ],
  education: [
    {
      SSLC: "68%",
      HLC: "80%",
      UG: "65%",
    },
  ],
  languages: ["Tamil", "English"],
  skils: ["communication", "problem solving"],
};

console.log(resume)
