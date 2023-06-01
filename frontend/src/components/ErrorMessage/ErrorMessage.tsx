import React from "react";

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props): JSX.Element => {
  return (
    <div className="flex items-center w-full justify-center mt-10">
      <div className="max-w-md">
        <div className="text-center text-2xl font-semibold">{message}</div>
      </div>
    </div>
  );
};

export default ErrorMessage;
