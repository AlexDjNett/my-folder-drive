export default function InputDefault(props: any) {
  return (
    <input
      type="text"
      placeholder="Type here"
      className="input input-bordered input-success w-full max-w-xs"
      {...props}
    />
  );
}
