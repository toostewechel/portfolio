import Content from "./Content";
import Opening from "./Opening";

Chapter.Content = Content;
Chapter.Opening = Opening;

function Chapter(props) {
  return (
    <section>
      {props.Opening}
      {props.Content}
    </section>
  );
}

export default Chapter;
