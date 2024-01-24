function PageOfMeals({ params }) {
  return (
    <main>
      <h1>Some Meals</h1>
      <p>{params.slug}</p>
    </main>
  );
}

export default PageOfMeals;
