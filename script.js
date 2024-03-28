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
//for each
persDetails.forEach(person => {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City:", person.city);
})

// task 2 => Create ur own resume data in JSON formate

let resume1 = {
  personal_info: {
    name: "Ranjith",
    age: 27,
    email: "ranjithppk2@gmail.com",
    phone: "1234567890",
    address: {
      city: "Neyveli",
      pincode: "607805",
      state: "Tamilnadu",
    },
  },
  education: [
    {
      degree: "SSLC",
      percentage: "68%",
    },
    {
      degree: "HLC",
      percentage: "80%",
    },
    {
      degree: "UG",
      percentage: "65%",
    },
  ],
  languages: ["Tamil", "English"],
  skills: ["communication", "problem solving"],
};
console.log(JSON.stringify(resume1, null, 2));