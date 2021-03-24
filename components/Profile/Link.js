export default function Link(props) {
  return (
    <a href={props.href} id={props.id} className="btn btn:hover rounded">
      <div className="flex flex-row px-3 py-2 gap-2 items-center ">
        <img src={props.icon} alt={props.label} />
        <p className="font-display text-sm text-white">{props.label}</p>
      </div>
    </a>
  );
}
