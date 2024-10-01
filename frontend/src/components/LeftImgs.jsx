export default function LeftImgs() {
  return (
    <div className="hidden xl:flex  w-1/2 bg-blue-500 relative rounded-l-3xl  ">
      <img
        src="/Character-working-laptop-while-sitting-chair.png"
        alt="Character working on laptop"
        className="absolute h-4/5 w-3/5 -left-1/4 bottom-0 object-cover"
      />
      <img src="/cactus.png" className="plant absolute " />
    </div>
  );
}
