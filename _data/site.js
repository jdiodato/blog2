module.exports = {
  meta: {
    title: "The Punk Pedagogue",
    description: "",
    lang: "en",
    siteUrl: "thepunkpedagogue.com",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "thepunkpedagogue.com",
    authorName: "Joe Diodato",
    authorEmail: "diodatouft@gmail.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to the Punk Pedagogue",
    description: "My name is Joe Diodato. I'm a special education teacher, unionist, and musician. This blog is a place for me to document my learning and growth as an educator and unionist. " +
    "Help yourself to a cup of tea, and thanks for stopping by my little corner of the internet." 
  }
}
