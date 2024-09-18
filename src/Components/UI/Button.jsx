export default function Button(props) {
  return (
    <div className={`${props.className} active flex cursor-pointer items-center justify-center rounded-lg bg-primary font-semibold text-background transition-all hover:opacity-80 active:scale-95`}>
      {props.text}
    </div>
  );
}
