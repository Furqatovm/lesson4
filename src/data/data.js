export const teachers = [
    {
      id: 1,
      fullName: "Ali Karimov",
      class: "10-A",
      email: "ali.karimov@mail.com",
      gender: "Male",
      subject: "Mathematics",
      age: 32,
      about: "Experienced math teacher with strong analytical skills.",
      img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      fullName: "Dilnoza Rahimova",
      class: "9-B",
      email: "dilnoza.rahimova@mail.com",
      gender: "Female",
      subject: "English",
      age: 28,
      about: "Passionate English teacher focused on communication skills.",
      img: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      fullName: "Bekzod Ismoilov",
      class: "11-A",
      email: "bekzod.ismoilov@mail.com",
      gender: "Male",
      subject: "Physics",
      age: 35,
      about: "Physics teacher with practical experiment experience.",
      img: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      fullName: "Malika Tursunova",
      class: "8-C",
      email: "malika.tursunova@mail.com",
      gender: "Female",
      subject: "Biology",
      age: 29,
      about: "Biology teacher who loves interactive lessons.",
      img: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      id: 5,
      fullName: "Javohir Qodirov",
      class: "7-A",
      email: "javohir.qodirov@mail.com",
      gender: "Male",
      subject: "History",
      age: 41,
      about: "History teacher with deep knowledge of world history.",
      img: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      fullName: "Zarina Abdullayeva",
      class: "6-B",
      email: "zarina.abdullayeva@mail.com",
      gender: "Female",
      subject: "Geography",
      age: 27,
      about: "Geography teacher who enjoys maps and field studies.",
      img: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      id: 7,
      fullName: "Sardor Yuldashev",
      class: "10-C",
      email: "sardor.yuldashev@mail.com",
      gender: "Male",
      subject: "Chemistry",
      age: 34,
      about: "Chemistry teacher focused on lab safety and practice.",
      img: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      fullName: "Aziza Saidova",
      class: "9-A",
      email: "aziza.saidova@mail.com",
      gender: "Female",
      subject: "Literature",
      age: 31,
      about: "Literature teacher encouraging critical thinking.",
      img: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      id: 9,
      fullName: "Rustam Akhmedov",
      class: "11-B",
      email: "rustam.akhmedov@mail.com",
      gender: "Male",
      subject: "Informatics",
      age: 26,
      about: "IT teacher with interest in programming and algorithms.",
      img: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      fullName: "Nigora Usmonova",
      class: "8-A",
      email: "nigora.usmonova@mail.com",
      gender: "Female",
      subject: "Art",
      age: 33,
      about: "Art teacher inspiring creativity and imagination.",
      img: "https://randomuser.me/api/portraits/women/10.jpg"
    },
  
    // 30 ta yana shu pattern’da
    ...Array.from({ length: 30 }, (_, i) => ({
      id: i + 11,
      fullName: `Teacher ${i + 11}`,
      class: `${7 + (i % 5)}-${String.fromCharCode(65 + (i % 3))}`,
      email: `teacher${i + 11}@school.com`,
      gender: i % 2 === 0 ? "Male" : "Female",
      subject: ["Math", "English", "Physics", "Biology", "History"][i % 5],
      age: 25 + (i % 15),
      about: "Dedicated teacher focused on student growth and success.",
      img: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i + 11}.jpg`
    }))
  ];
  