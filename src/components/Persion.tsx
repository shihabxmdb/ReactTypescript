type nameProps={
    name:{
        first:string,
        last:string
    }
}
export const Persion = (props:nameProps) => {
  return <div>{props.name.first} {props.name.last}</div>;
};
