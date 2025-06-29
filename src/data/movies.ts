export interface Movie {
  id: number;
  title: string;
  originalTitle?: string;
  year: number;
  language: string;
  genre: string[];
  director: string;
  cast: string[];
  rating: number;
  synopsis: string;
  duration: number;
  boxOffice?: string;
}

export const indianMovies: Movie[] = [
  {
    id: 1,
    title: "3 Idiots",
    year: 2009,
    language: "Hindi",
    genre: ["Comedy", "Drama"],
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi", "Kareena Kapoor"],
    rating: 8.4,
    synopsis: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    duration: 170
  },
  {
    id: 2,
    title: "Baahubali 2: The Conclusion",
    year: 2017,
    language: "Telugu",
    genre: ["Action", "Drama", "Fantasy"],
    director: "S.S. Rajamouli",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
    rating: 8.2,
    synopsis: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
    duration: 167,
    boxOffice: "₹1,810 crores"
  },
  {
    id: 3,
    title: "Dangal",
    year: 2016,
    language: "Hindi",
    genre: ["Biography", "Drama", "Sport"],
    director: "Nitesh Tiwari",
    cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"],
    rating: 8.3,
    synopsis: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.",
    duration: 161,
    boxOffice: "₹2,023 crores"
  },
  {
    id: 4,
    title: "Tumhari Sulu",
    year: 2017,
    language: "Hindi",
    genre: ["Comedy", "Drama"],
    director: "Suresh Triveni",
    cast: ["Vidya Balan", "Manav Kaul", "Neha Dhupia"],
    rating: 7.1,
    synopsis: "A happy-go-lucky Mumbai suburban housewife Sulochana, fondly known as Sulu, lands the role of a night RJ, resulting in drastic changes to her routine life.",
    duration: 140
  },
  {
    id: 5,
    title: "Super Deluxe",
    year: 2019,
    language: "Tamil",
    genre: ["Comedy", "Drama", "Thriller"],
    director: "Thiagarajan Kumararaja",
    cast: ["Vijay Sethupathi", "Fahadh Faasil", "Samantha Ruth Prabhu"],
    rating: 8.3,
    synopsis: "An unfaithful newly-wed wife, an estranged father, a priest and an angry son suddenly find themselves in the most unexpected predicaments.",
    duration: 176
  },
  {
    id: 6,
    title: "Kumbakonam Gopals",
    originalTitle: "ಕುಂಬಕೋಣಂ ಗೋಪಾಲ್",
    year: 1998,
    language: "Kannada",
    genre: ["Comedy", "Drama"],
    director: "Sunil Kumar Desai",
    cast: ["Anant Nag", "Ramesh Aravind", "Lakshmi"],
    rating: 7.8,
    synopsis: "A story about a middle-class family and their struggles with societal expectations and personal aspirations.",
    duration: 155
  },
  {
    id: 7,
    title: "Drishyam",
    year: 2013,
    language: "Malayalam",
    genre: ["Crime", "Drama", "Thriller"],
    director: "Jeethu Joseph",
    cast: ["Mohanlal", "Meena", "Ansiba Hassan"],
    rating: 8.6,
    synopsis: "A man goes to extreme lengths to save his family from punishment after they commit an unexpected crime.",
    duration: 150
  },
  {
    id: 8,
    title: "Pink",
    year: 2016,
    language: "Hindi",
    genre: ["Crime", "Drama", "Thriller"],
    director: "Aniruddha Roy Chowdhury",
    cast: ["Taapsee Pannu", "Amitabh Bachchan", "Kirti Kulhari"],
    rating: 8.1,
    synopsis: "When three young women are implicated in a crime, a retired lawyer steps forward to help them clear their names.",
    duration: 136
  },
  {
    id: 9,
    title: "Arjun Reddy",
    year: 2017,
    language: "Telugu",
    genre: ["Drama", "Romance"],
    director: "Sandeep Reddy Vanga",
    cast: ["Vijay Deverakonda", "Shalini Pandey"],
    rating: 8.1,
    synopsis: "A brilliant medical student becomes an alcoholic and drug addict after his girlfriend is forced to marry another man.",
    duration: 182
  },
  {
    id: 10,
    title: "Queen",
    year: 2013,
    language: "Hindi",
    genre: ["Comedy", "Drama"],
    director: "Vikas Bahl",
    cast: ["Kangana Ranaut", "Rajkummar Rao", "Lisa Haydon"],
    rating: 8.2,
    synopsis: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.",
    duration: 146
  },
  {
    id: 11,
    title: "Vikram Vedha",
    year: 2017,
    language: "Tamil",
    genre: ["Action", "Crime", "Thriller"],
    director: "Pushkar-Gayathri",
    cast: ["R. Madhavan", "Vijay Sethupathi", "Shraddha Srinath"],
    rating: 8.4,
    synopsis: "A notorious gangster Vedha surrenders himself to encounter specialist Vikram whom he challenges every step of the way by narrating his life events.",
    duration: 147
  },
  {
    id: 12,
    title: "Sholay",
    year: 1975,
    language: "Hindi",
    genre: ["Action", "Adventure", "Drama"],
    director: "Ramesh Sippy",
    cast: ["Dharmendra", "Amitabh Bachchan", "Sanjeev Kumar", "Hema Malini"],
    rating: 8.2,
    synopsis: "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.",
    duration: 204
  },
  {
    id: 13,
    title: "Andhadhun",
    year: 2018,
    language: "Hindi",
    genre: ["Crime", "Mystery", "Thriller"],
    director: "Sriram Raghavan",
    cast: ["Ayushmann Khurrana", "Tabu", "Radhika Apte"],
    rating: 8.2,
    synopsis: "A series of mysterious events change the life of a blind pianist who now must report a crime that was actually never witnessed by him.",
    duration: 139
  },
  {
    id: 14,
    title: "Gully Boy",
    year: 2019,
    language: "Hindi",
    genre: ["Drama", "Musical"],
    director: "Zoya Akhtar",
    cast: ["Ranveer Singh", "Alia Bhatt", "Siddhant Chaturvedi"],
    rating: 7.9,
    synopsis: "A coming-of-age story based on the lives of street rappers in Mumbai.",
    duration: 153
  },
  {
    id: 15,
    title: "The Lunchbox",
    year: 2013,
    language: "Hindi",
    genre: ["Drama", "Romance"],
    director: "Ritesh Batra",
    cast: ["Irrfan Khan", "Nimrat Kaur", "Nawazuddin Siddiqui"],
    rating: 7.8,
    synopsis: "A mistaken delivery in Mumbai's famously efficient lunchbox delivery system connects a young housewife to an older man in the dusk of his life.",
    duration: 104
  },
  {
    id: 16,
    title: "KGF: Chapter 1",
    year: 2018,
    language: "Kannada",
    genre: ["Action", "Drama"],
    director: "Prashanth Neel",
    cast: ["Yash", "Srinidhi Shetty", "Ramachandra Raju"],
    rating: 8.2,
    synopsis: "In the 1970s, a fierce rebel rises against brutal oppression and becomes the symbol of hope to legions of downtrodden people.",
    duration: 156,
    boxOffice: "₹250 crores"
  },
  {
    id: 17,
    title: "Premam",
    year: 2015,
    language: "Malayalam",
    genre: ["Comedy", "Drama", "Romance"],
    director: "Alphonse Puthren",
    cast: ["Nivin Pauly", "Sai Pallavi", "Madonna Sebastian"],
    rating: 8.3,
    synopsis: "A young man has three opportunities to fall in love. Three beautiful women come into his life - first love, the intense love and the love that arrives when one least expects it.",
    duration: 156
  },
  {
    id: 18,
    title: "96",
    year: 2018,
    language: "Tamil",
    genre: ["Drama", "Romance"],
    director: "C. Prem Kumar",
    cast: ["Vijay Sethupathi", "Trisha Krishnan"],
    rating: 8.5,
    synopsis: "Ram is a photographer and nature lover who travels all around India capturing moments. On a chance visit to his hometown, he goes to his school and meets Janu, his classmate from 15 years ago.",
    duration: 158
  },
  {
    id: 19,
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    language: "Hindi",
    genre: ["Adventure", "Comedy", "Drama"],
    director: "Zoya Akhtar",
    cast: ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol", "Katrina Kaif"],
    rating: 8.2,
    synopsis: "Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.",
    duration: 155
  },
  {
    id: 20,
    title: "Article 15",
    year: 2019,
    language: "Hindi",
    genre: ["Crime", "Drama", "Thriller"],
    director: "Anubhav Sinha",
    cast: ["Ayushmann Khurrana", "Nassar", "Manoj Pahwa"],
    rating: 8.1,
    synopsis: "In the rural heartlands of India, an upright police officer sets out on a crusade against corruption and injustice.",
    duration: 130
  }
];