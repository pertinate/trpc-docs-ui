import React from 'react';

export interface TRPCDocsOperation {
  deprecated: boolean;
  requiresAuth: boolean;
  tags: string[];
}

export interface OperationProps {}

export const Operation = ({}: OperationProps) => {
  return <div className="bg-red-100">test</div>;
};
