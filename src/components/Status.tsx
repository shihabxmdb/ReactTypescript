type StatusProps = {
  Status:'loading'|'success'|'error';
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.Status === "loading") {
    message = "Loading......";
  } else if (props.Status === "success") {
    message = "Data fetched successfully";
  } else if (props.Status === "error") {
    message = "Error fetching Data";
  }
  return (
    <div>
      <h2>Status- {message}</h2>
    </div>
  );
};
