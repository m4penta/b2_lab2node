const express = require("express");
const app = express();
const port = 3000;
var listProduct = [
  {
    id: 0101,
    title: "Apple Book",
    price: 3000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FQuestion_book-new.svg%2F1280px-Question_book-new.svg.png&imgrefurl=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FT%25E1%25BA%25ADp_tin%3AQuestion_book-new.svg&tbnid=PUZfYlmwbGBW9M&vet=12ahUKEwjdpLPH59bvAhVGYJQKHb2fDsYQMygDegUIARCsAQ..i&docid=OZXnhNKI1cjYUM&w=1280&h=997&q=book&ved=2ahUKEwjdpLPH59bvAhVGYJQKHb2fDsYQMygDegUIARCsAQ",
  },
  {
    id: 0102,
    title: "Microsoft Book",
    price: 2000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FQuestion_book-new.svg%2F1280px-Question_book-new.svg.png&imgrefurl=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FT%25E1%25BA%25ADp_tin%3AQuestion_book-new.svg&tbnid=PUZfYlmwbGBW9M&vet=12ahUKEwjdpLPH59bvAhVGYJQKHb2fDsYQMygDegUIARCsAQ..i&docid=OZXnhNKI1cjYUM&w=1280&h=997&q=book&ved=2ahUKEwjdpLPH59bvAhVGYJQKHb2fDsYQMygDegUIARCsAQ",
  },
  {
    id: 0103,
    title: "VFast Book",
    price: 1000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FQuestion_book-new.svg%2F1280px-Question_book-new.svg.png&imgrefurl=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FT%25E1%25BA%25ADp_tin%3AQuestion_book-new.svg&tbnid=PUZfYlmwbGBW9M&vet=12ahUKEwjdpLPH59bvAhVGYJQKHb2fDsYQMygDegUIARCsAQ..i&docid=OZXnhNKI1cjYUM&w=1280&h=997&q=book&ved=2ahUKEwjdpLPH59bvAhVGYJQKHb2fDsYQMygDegUIARCsAQ",
  },
];
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render('shop',{products:listProduct});
});
app.listen(port, () => {
  console.log(`đang chạy cổng: ${port}`);
});
