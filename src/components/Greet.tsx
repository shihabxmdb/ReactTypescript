type GreetProps = {
  name: string;
  messageCount: number;
  isLogedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLogedIn ? (
        <div>
          {" "}
          Welcome {props.name}You have {props.messageCount} unread message
        </div>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};
