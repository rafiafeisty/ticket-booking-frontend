import logo from "./logo.svg";
import marvelLogo from "./marvelLogo.svg";
import googlePlay from "./googlePlay.svg";
import appStore from "./appStore.svg";
import screenImage from "./screenImage.svg";
import profile from "./profile.png";

export const assets = {
  logo,
  marvelLogo,
  googlePlay,
  appStore,
  screenImage,
  profile,
};

export const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WpW36ldAqnM",
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8",
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g",
  },
];

export const dummyCastsData = [
  {
    name: "Milla Jovovich",
    profile_path:
      "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg",
  },
  {
    name: "Dave Bautista",
    profile_path:
      "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
  },
  {
    name: "Arly Jover",
    profile_path:
      "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
  },
  {
    name: "Amara Okereke",
    profile_path:
      "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
  },
  {
    name: "Fraser James",
    profile_path:
      "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg",
  },
  {
    name: "Deirdre Mullins",
    profile_path:
      "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg",
  },
  {
    name: "Sebastian Stankiewicz",
    profile_path:
      "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg",
  },
  {
    name: "Tue Lunding",
    profile_path:
      "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg",
  },
  {
    name: "Jacek Dzisiewicz",
    profile_path:
      "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg",
  },
  {
    name: "Ian Hanmore",
    profile_path:
      "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg",
  },
  {
    name: "Eveline Hall",
    profile_path:
      "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg",
  },
  {
    name: "Kamila Klamut",
    profile_path:
      "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg",
  },
  {
    name: "Caoilinn Springall",
    profile_path:
      "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg",
  },
  {
    name: "Jan Kowalewski",
    profile_path:
      "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
  },
  {
    name: "Pawel Wysocki",
    profile_path:
      "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
  },
  {
    name: "Simon Lööf",
    profile_path:
      "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg",
  },
  {
    name: "Tomasz Cymerman",
    profile_path:
      "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
  },
];

export const dummyShowsData = [
  {
    _id: "324544",
    id: 324544,
    title: "In the Lost Lands",
    overview:
      "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
    poster_path:
      "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 14, name: "Fantasy" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-02-27",
    original_language: "en",
    tagline: "She seeks the power to free her people.",
    vote_average: 6.4,
    vote_count: 15000,
    runtime: 102,
  },
  {
    _id: "1232546",
    id: 1232546,
    title: "Until Dawn",
    overview:
      "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
    poster_path:
      "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    genres: [
      { id: 27, name: "Horror" },
      { id: 9648, name: "Mystery" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-23",
    original_language: "en",
    tagline: "Every night a different nightmare.",
    vote_average: 6.405,
    vote_count: 18000,
    runtime: 103,
  },
  {
    _id: "552524",
    id: 552524,
    title: "Lilo & Stitch",
    overview:
      "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    poster_path:
      "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Hold on to your coconuts.",
    vote_average: 7.117,
    vote_count: 27500,
    runtime: 108,
  },
  {
    _id: "668489",
    id: 668489,
    title: "Havoc",
    overview:
      "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
    poster_path:
      "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-25",
    original_language: "en",
    tagline: "No law. Only disorder.",
    vote_average: 6.537,
    vote_count: 35960,
    runtime: 107,
  },
  {
    _id: "950387",
    id: 950387,
    title: "A Minecraft Movie",
    overview:
      "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    poster_path:
      "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
    ],
    casts: dummyCastsData,
    release_date: "2025-03-31",
    original_language: "en",
    tagline: "Be there and be square.",
    vote_average: 6.516,
    vote_count: 15225,
    runtime: 101,
  },
  {
    _id: "575265",
    id: 575265,
    title: "Mission: Impossible - The Final Reckoning",
    overview:
      "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Our lives are the sum of our choices.",
    vote_average: 7.042,
    vote_count: 19885,
    runtime: 170,
  },
  {
    _id: "986056",
    id: 986056,
    title: "Thunderbolts*",
    overview:
      "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    poster_path:
      "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-30",
    original_language: "en",
    tagline: "Everyone deserves a second shot.",
    vote_average: 7.443,
    vote_count: 23569,
    runtime: 127,
  },
  {
    _id: "823464",
    id: 823464,
    title: "The Last Samurai",
    overview:
      "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
    poster_path:
      "https://image.tmdb.org/t/p/original/a8jmJPs5eZBARmnuEEvZwbjwyz4.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/a8jmJPs5eZBARmnuEEvZwbjwyz4.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 18, name: "Drama" },
      { id: 10752, name: "War" },
    ],
    casts: dummyCastsData,
    release_date: "2025-06-15",
    original_language: "en",
    tagline: "In the face of an enemy, in the heart of a stranger, destiny awaits.",
    vote_average: 7.8,
    vote_count: 28500,
    runtime: 154,
  },
  {
    _id: "734829",
    id: 734829,
    title: "Cyber Revolution",
    overview:
      "In a dystopian future where AI controls humanity, a group of rebels must hack into the mainframe to free mankind from digital slavery.",
    poster_path:
      "https://image.tmdb.org/t/p/original/iRSeVamw11W0Y5FsNm5vTEWtkPN.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/iRSeVamw11W0Y5FsNm5vTEWtkPN.jpg",
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 28, name: "Action" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-07-10",
    original_language: "en",
    tagline: "The future is not programmed yet.",
    vote_average: 8.1,
    vote_count: 19200,
    runtime: 128,
  },
  {
    _id: "645738",
    id: 645738,
    title: "Midnight in Paris",
    overview:
      "A romantic comedy about a family traveling to the French capital for business where a young executive finds love in the most unexpected places.",
    poster_path:
      "https://image.tmdb.org/t/p/original/4wBG5kbfagTQclETblPRRGihk0I.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4wBG5kbfagTQclETblPRRGihk0I.jpg",
    genres: [
      { id: 35, name: "Comedy" },
      { id: 10749, name: "Romance" },
      { id: 18, name: "Drama" },
    ],
    casts: dummyCastsData,
    release_date: "2025-08-05",
    original_language: "en",
    tagline: "Love knows no time zones.",
    vote_average: 7.3,
    vote_count: 16700,
    runtime: 116,
  },
  {
    _id: "556829",
    id: 556829,
    title: "The Lost City",
    overview:
      "A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.",
    poster_path:
      "https://image.tmdb.org/t/p/original/rnheO8cFvCYcmZsDrBoabJbKLFE.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rnheO8cFvCYcmZsDrBoabJbKLFE.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 35, name: "Comedy" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-09-12",
    original_language: "en",
    tagline: "The adventure is real.",
    vote_average: 6.9,
    vote_count: 14300,
    runtime: 112,
  },
  {
    _id: "467910",
    id: 467910,
    title: "Eternal Sunshine",
    overview:
      "A couple undergoes a medical procedure to have each other erased from their memories when their relationship turns sour.",
    poster_path:
      "https://image.tmdb.org/t/p/original/iyQPQhfsjc8YHQ2ricIrjookqPt.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/iyQPQhfsjc8YHQ2ricIrjookqPt.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-10-18",
    original_language: "en",
    tagline: "Some memories are meant to be forgotten.",
    vote_average: 8.4,
    vote_count: 32500,
    runtime: 108,
  },
  {
    _id: "378021",
    id: 378021,
    title: "Ocean's Legacy",
    overview:
      "A master thief and his crew attempt the heist of the century by stealing three priceless artifacts from three different countries simultaneously.",
    poster_path:
      "https://image.tmdb.org/t/p/original/oHUHccvraYF8lYp6BxRoujRtH8Q.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/oHUHccvraYF8lYp6BxRoujRtH8Q.jpg",
    genres: [
      { id: 80, name: "Crime" },
      { id: 35, name: "Comedy" },
      { id: 28, name: "Action" },
    ],
    casts: dummyCastsData,
    release_date: "2025-11-22",
    original_language: "en",
    tagline: "Three countries. Three heists. One impossible mission.",
    vote_average: 7.6,
    vote_count: 19800,
    runtime: 135,
  },
  {
    _id: "289132",
    id: 289132,
    title: "Winter's Tale",
    overview:
      "A burglar falls for an heiress as she dies in his arms. When he learns that he has the gift of reincarnation, he sets out to save her.",
    poster_path:
      "https://image.tmdb.org/t/p/original/dwDAUpidqVEql6w1o51VIPlMtbG.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/dwDAUpidqVEql6w1o51VIPlMtbG.jpg",
    genres: [
      { id: 14, name: "Fantasy" },
      { id: 10749, name: "Romance" },
      { id: 18, name: "Drama" },
    ],
    casts: dummyCastsData,
    release_date: "2025-12-15",
    original_language: "en",
    tagline: "This is not a true story. It's a love story.",
    vote_average: 7.1,
    vote_count: 15600,
    runtime: 118,
  },
  {
    _id: "190243",
    id: 190243,
    title: "The Last Frontier",
    overview:
      "An astronaut on a mission to save humanity must make an impossible choice when he discovers the truth about the new world meant to save mankind.",
    poster_path:
      "https://image.tmdb.org/t/p/original/4S2gS1mECZ5wDRBVAZE6KWmJHI3.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4S2gS1mECZ5wDRBVAZE6KWmJHI3.jpg",
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 18, name: "Drama" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2026-01-20",
    original_language: "en",
    tagline: "The end of Earth is just the beginning.",
    vote_average: 8.2,
    vote_count: 21000,
    runtime: 142,
  }
];

export const dummyDateTimeData = {
  "2025-07-24": [
    { time: "2025-07-24T10:00:00.000Z", showId: "68395b407f6329be2bb45bd1" },
    { time: "2025-07-24T13:30:00.000Z", showId: "68395b407f6329be2bb45bd2" },
    { time: "2025-07-24T16:45:00.000Z", showId: "68395b407f6329be2bb45bd3" },
    { time: "2025-07-24T19:15:00.000Z", showId: "68395b407f6329be2bb45bd4" },
    { time: "2025-07-24T22:00:00.000Z", showId: "68395b407f6329be2bb45bd5" },
  ],
  "2025-07-25": [
    { time: "2025-07-25T11:00:00.000Z", showId: "68395b407f6329be2bb45bd6" },
    { time: "2025-07-25T14:20:00.000Z", showId: "68395b407f6329be2bb45bd7" },
    { time: "2025-07-25T17:30:00.000Z", showId: "68395b407f6329be2bb45bd8" },
    { time: "2025-07-25T20:45:00.000Z", showId: "68395b407f6329be2bb45bd9" },
    { time: "2025-07-25T23:15:00.000Z", showId: "68395b407f6329be2bb45bda" },
  ],
  "2025-07-26": [
    { time: "2025-07-26T09:30:00.000Z", showId: "68395b407f6329be2bb45bdb" },
    { time: "2025-07-26T12:45:00.000Z", showId: "68395b407f6329be2bb45bdc" },
    { time: "2025-07-26T15:30:00.000Z", showId: "68395b407f6329be2bb45bdd" },
    { time: "2025-07-26T18:15:00.000Z", showId: "68395b407f6329be2bb45bde" },
    { time: "2025-07-26T21:30:00.000Z", showId: "68395b407f6329be2bb45bdf" },
  ],
  "2025-07-27": [
    { time: "2025-07-27T10:15:00.000Z", showId: "68395b407f6329be2bb45be0" },
    { time: "2025-07-27T13:45:00.000Z", showId: "68395b407f6329be2bb45be1" },
    { time: "2025-07-27T16:30:00.000Z", showId: "68395b407f6329be2bb45be2" },
    { time: "2025-07-27T19:00:00.000Z", showId: "68395b407f6329be2bb45be3" },
    { time: "2025-07-27T22:30:00.000Z", showId: "68395b407f6329be2bb45be4" },
  ],
  "2025-07-28": [
    { time: "2025-07-28T11:30:00.000Z", showId: "68395b407f6329be2bb45be5" },
    { time: "2025-07-28T14:15:00.000Z", showId: "68395b407f6329be2bb45be6" },
    { time: "2025-07-28T17:45:00.000Z", showId: "68395b407f6329be2bb45be7" },
    { time: "2025-07-28T20:30:00.000Z", showId: "68395b407f6329be2bb45be8" },
    { time: "2025-07-28T23:00:00.000Z", showId: "68395b407f6329be2bb45be9" },
  ],
};

export const dummyDashboardData = {
  totalBookings: 42,
  totalRevenue: 3850,
  totalUser: 12,
  activeShows: [
    {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        C5: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        D7: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "6835238fe96d99513e4221a8",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T15:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {
        A2: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        B2: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        C3: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
        D4: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        E6: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
      },
    },
    {
      _id: "6835238fe96d99513e4221a9",
      movie: dummyShowsData[2],
      showDateTime: "2025-06-30T03:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {
        F1: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
        F2: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
        E3: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
        D5: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
        C7: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
      },
    },
    {
      _id: "6835238fe96d99513e4221aa",
      movie: dummyShowsData[3],
      showDateTime: "2025-07-15T16:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        B2: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        C4: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "683682072b5989c29fc6dc0d",
      movie: dummyShowsData[4],
      showDateTime: "2025-06-05T15:30:00.000Z",
      showPrice: 49,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        C1: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
        C2: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
      },
    },
    {
      _id: "68380044686d454f2116b39a",
      movie: dummyShowsData[5],
      showDateTime: "2025-06-20T16:00:00.000Z",
      showPrice: 79,
      occupiedSeats: {
        A1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        A2: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        B3: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
        B4: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
        C5: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        D6: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
      },
    },
    {
      _id: "68390055ab3d6a7f12c7d4ef",
      movie: dummyShowsData[6],
      showDateTime: "2025-07-22T18:00:00.000Z",
      showPrice: 72,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        C1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        D2: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
        D3: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
        E4: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        F5: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
      },
    },
    {
      _id: "68400066bc4e7b8g23d8e5fg",
      movie: dummyShowsData[7],
      showDateTime: "2025-07-25T14:00:00.000Z",
      showPrice: 85,
      occupiedSeats: {
        E1: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
        E2: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
        F1: "user_7cT9cUHlBBBV4JMzVch0ZBbNpt",
        F2: "user_7cT9cUHlBBBV4JMzVch0ZBbNpt",
        D3: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
        C4: "user_7cT9cUHlBBBV4JMzVch0ZBbNpt",
      },
    },
    {
      _id: "68410077cd5f8c9h34e9f6gh",
      movie: dummyShowsData[8],
      showDateTime: "2025-07-28T20:00:00.000Z",
      showPrice: 92,
      occupiedSeats: {
        A1: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        A2: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        B3: "user_9eW1eWJmDDDDx6LOxBej2DDdPrv",
        C4: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        D5: "user_9eW1eWJmDDDDx6LOxBej2DDdPrv",
        E6: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
      },
    },
    {
      _id: "68420088de6g0dai45f0g7hi",
      movie: dummyShowsData[9],
      showDateTime: "2025-07-29T18:30:00.000Z",
      showPrice: 65,
      occupiedSeats: {
        F3: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        A5: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        B1: "user_9eW1eWJmDDDDx6LOxBej2DDdPrv",
        C2: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        D4: "user_9eW1eWJmDDDDx6LOxBej2DDdPrv",
        E6: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
      },
    },
    {
      _id: "68430099ef7h1ebj56g1h8ij",
      movie: dummyShowsData[10],
      showDateTime: "2025-07-30T21:00:00.000Z",
      showPrice: 78,
      occupiedSeats: {
        A7: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B8: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        C6: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
        D5: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        E4: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        F3: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
      },
    },
    {
      _id: "684400aaf8i2fck67h2i9jk",
      movie: dummyShowsData[11],
      showDateTime: "2025-08-01T16:45:00.000Z",
      showPrice: 88,
      occupiedSeats: {
        A3: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
        B4: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
        C5: "user_7cT9cUHlBBBV4JMzVch0ZBbNpt",
        D6: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
        E7: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
        F8: "user_7cT9cUHlBBBV4JMzVch0ZBbNpt",
      },
    },
    {
      _id: "684500bbg9j3gdl78i3j0kl",
      movie: dummyShowsData[12],
      showDateTime: "2025-08-02T19:15:00.000Z",
      showPrice: 95,
      occupiedSeats: {
        A2: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        B3: "user_9eW1eWJmDDDDx6LOxBej2DDdPrv",
        C4: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        D5: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        E6: "user_9eW1eWJmDDDDx6LOxBej2DDdPrv",
        F7: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "684600cch0k4hem89j4k1lm",
      movie: dummyShowsData[13],
      showDateTime: "2025-08-03T14:30:00.000Z",
      showPrice: 70,
      occupiedSeats: {
        A4: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        B5: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
        C6: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
        D7: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl",
        E8: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm",
        F1: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn",
      },
    },
    {
      _id: "684700ddi1l5ifn90k5l2mn",
      movie: dummyShowsData[14],
      showDateTime: "2025-08-04T20:45:00.000Z",
      showPrice: 82,
      occupiedSeats: {
        A6: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
        B7: "user_7cT9cUHlBBBV4JMzVch0ZBbNpt",
        C8: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
        D1: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso",
        E2: "user_7cT9cUHlBBBV4JMzVch0ZBbNpt",
        F3: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu",
      },
    },
  ],
};

export const dummyBookingData = [
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack", userId: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    seats: ["D1", "D2"],
    totalPrice: 118,
    bookingDate: "2025-06-25T10:30:00.000Z",
  },
  {
    _id: "68396335fb83252d82e17296",
    user: { name: "John Doe", userId: "user_3yP5YQDhXXxXr0FIvRyd6VXrJpl" },
    show: {
      _id: "6835238fe96d99513e4221a8",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T15:30:00.000Z",
      showPrice: 81,
    },
    seats: ["A2", "B2"],
    totalPrice: 162,
    bookingDate: "2025-06-26T14:20:00.000Z",
  },
  {
    _id: "68396336fb83252d82e17297",
    user: { name: "Jane Smith", userId: "user_4zQ6ZREiYYyYs1GJwSze7WYsKqm" },
    show: {
      _id: "6835238fe96d99513e4221aa",
      movie: dummyShowsData[3],
      showDateTime: "2025-07-15T16:30:00.000Z",
      showPrice: 81,
    },
    seats: ["B1", "B2"],
    totalPrice: 162,
    bookingDate: "2025-06-27T09:15:00.000Z",
  },
  {
    _id: "68396337fb83252d82e17298",
    user: { name: "Mike Johnson", userId: "user_5aR7aSFjZZzZt2HKxTaf8XZtLrn" },
    show: {
      _id: "6835238fe96d99513e4221a9",
      movie: dummyShowsData[2],
      showDateTime: "2025-06-30T03:30:00.000Z",
      showPrice: 81,
    },
    seats: ["F1", "F2"],
    totalPrice: 162,
    bookingDate: "2025-06-28T16:45:00.000Z",
  },
  {
    _id: "68396338fb83252d82e17299",
    user: { name: "Sarah Wilson", userId: "user_6bS8bTGkAAAaU3ILyUbg9YAaMso" },
    show: {
      _id: "68400066bc4e7b8g23d8e5fg",
      movie: dummyShowsData[7],
      showDateTime: "2025-07-25T14:00:00.000Z",
      showPrice: 85,
    },
    seats: ["E1", "E2"],
    totalPrice: 170,
    bookingDate: "2025-06-29T11:30:00.000Z",
  },
  {
    _id: "68396339fb83252d82e1729a",
    user: { name: "GreatStack", userId: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok" },
    show: {
      _id: "683682072b5989c29fc6dc0d",
      movie: dummyShowsData[4],
      showDateTime: "2025-06-05T15:30:00.000Z",
      showPrice: 49,
    },
    seats: ["A1", "A2", "A3", "B1", "B2", "B3"],
    totalPrice: 294,
    bookingDate: "2025-06-20T08:15:00.000Z",
  },
  {
    _id: "68396340fb83252d82e1729b",
    user: { name: "Alex Brown", userId: "user_7cT9cUHlBBBV4JMzVch0ZBbNpt" },
    show: {
      _id: "68410077cd5f8c9h34e9f6gh",
      movie: dummyShowsData[8],
      showDateTime: "2025-07-28T20:00:00.000Z",
      showPrice: 92,
    },
    seats: ["F1", "F2"],
    totalPrice: 184,
    bookingDate: "2025-06-30T13:20:00.000Z",
  },
  {
    _id: "68396341fb83252d82e1729c",
    user: { name: "Emma Davis", userId: "user_8dU0dVIlCCCCw5KNwAdi1CCcOqu" },
    show: {
      _id: "68390055ab3d6a7f12c7d4ef",
      movie: dummyShowsData[6],
      showDateTime: "2025-07-22T18:00:00.000Z",
      showPrice: 72,
    },
    seats: ["G1", "G2"],
    totalPrice: 144,
    bookingDate: "2025-07-01T17:45:00.000Z",
  },
  {
    _id: "68396342fb83252d82e1729d",
    user: { name: "GreatStack", userId: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    seats: ["A1"],
    totalPrice: 59,
    bookingDate: "2025-06-22T19:30:00.000Z",
  },
  {
    _id: "68396343fb83252d82e1729e",
    user: { name: "GreatStack", userId: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok" },
    show: {
      _id: "6835238fe96d99513e4221a8",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T15:30:00.000Z",
      showPrice: 81,
    },
    seats: ["A1", "A2", "A3"],
    totalPrice: 243,
    bookingDate: "2025-06-23T12:10:00.000Z",
  },
];