'use client';

import Error from 'next/error';
import React from 'react';

interface Props {
  errorCode: number;
}
const ErrorHandler = ({ errorCode }: Props) => {
  return <Error statusCode={errorCode} />;
};

export default ErrorHandler;
