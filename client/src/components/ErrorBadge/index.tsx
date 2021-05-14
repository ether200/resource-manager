import React from "react";
import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

const ErrorBadge: React.FC<{ message: string | null }> = ({ message }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default ErrorBadge;
