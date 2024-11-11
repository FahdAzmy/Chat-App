import Message from "./Message";
export default function Messages() {
  return (
    <div className="flex flex-col mb-10 space-y-3 p-4">
      {" "}
      <Message message={"Hello"} />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message message={"Bye"} />
      <Message message={"GoodBye"} />
    </div>
  );
}
