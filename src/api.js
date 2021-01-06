// React のコンポーネントは、アプリケーションの状態が同じであれば常に同じ JSX 式を結果として返すべき
export async function fetchImages(breed) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/12`
  );
  const data = await response.json();
  return data.message;
}
