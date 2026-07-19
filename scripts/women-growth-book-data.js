"use strict";

hexo.extend.generator.register("women-growth-book-data", function generateWomenGrowthBookData(locals) {
  const bookData = locals.data.books || {};
  const siteBooks = [
    ...(bookData.featuredLists || []).flatMap((list) => list.books || []),
    ...(bookData.years || []).flatMap((year) => year.books || [])
  ];
  const researchedBooks = (locals.data.women_growth_public_books || {}).books || [];
  const questionBooks = (locals.data.women_growth_book_questions || {}).books || [];
  const publicBooks = [
    { title: "成为我自己", author: "[美] 欧文·亚隆", link: "https://book.douban.com/subject/33460827/", cover: "/img/books/33460827.jpg" },
    { title: "自我突围", author: "施一公", link: "https://book.douban.com/subject/36350823/", cover: "/img/books/36350823.jpg" },
    { title: "人间值得", author: "[日] 中村恒子", link: "https://book.douban.com/subject/34797578/", cover: "/img/books/34797578.jpg" },
    { title: "第二性", author: "[法] 西蒙娜·德·波伏瓦", link: "https://book.douban.com/subject/25822104/", cover: "/img/books/25822104.jpg" },
    { title: "女性的奥秘", author: "[美] 贝蒂·弗里丹", link: "https://book.douban.com/subject/1680190/", cover: "/img/books/1680190.jpg" },
    { title: "从零开始的女性主义", author: "[日] 上野千鹤子", link: "https://book.douban.com/subject/35523099/", cover: "/img/books/35523099.jpg" }
  ];
  const uniqueBooks = new Map();

  [...siteBooks, ...publicBooks, ...researchedBooks, ...questionBooks].forEach((book) => {
    if (!book || !book.title) return;
    const current = uniqueBooks.get(book.title) || {};
    uniqueBooks.set(book.title, {
      title: book.title,
      author: book.author || current.author || "",
      cover: book.cover || current.cover || "",
      link: book.link || current.link || "",
      douban_id: book.douban_id || current.douban_id || "",
      matched_title: book.matched_title || current.matched_title || book.title,
      publication_date: book.publication_date || current.publication_date || "",
      source: book.source || current.source || "",
      questions: Array.isArray(book.questions) && book.questions.length === 2 ? book.questions : current.questions || []
    });
  });

  return {
    path: "atlas-of-her-becoming/books-data.json",
    data: JSON.stringify({ books: [...uniqueBooks.values()] })
  };
});
