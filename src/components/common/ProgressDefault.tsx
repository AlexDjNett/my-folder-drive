export default function ProgressDefault({ progress }: ProgressDefault) {
  return (
    <progress
      className="progress progress-primary mt-[20px] w-[80%]"
      value={progress}
      max="100"
    ></progress>
  );
}
