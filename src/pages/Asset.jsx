import { useParams } from "react-router-dom";

export function Asset() {
  const { id } = useParams();

  return (
    <div>
      hello from Asset
      <br />
      ID: {id}
      <br />
      <a href="/">Home</a>
    </div>
  );
}
