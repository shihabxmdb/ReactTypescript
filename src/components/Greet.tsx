type GreetProps = {
  name: string;
  messageCount?: number;
  isLogedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLogedIn ? (
        <div>
          Welcome {props.name}. You have {messageCount} unread message
        </div>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};
