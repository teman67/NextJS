export default async function MealPage(props) {
  const params = await props.params;
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  );
}
