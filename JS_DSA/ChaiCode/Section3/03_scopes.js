function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  two();
  console.log(website); // you cannot access the website variable outside the scope of it's function
}
one();

