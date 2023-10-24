type nameListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersionList = (props: nameListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div>
            <h2>{name.first}</h2>
          </div>
        );
      })}
    </div>
  );
};
