import React from 'react';
import { TRPCDocsOperation } from './Operation';
import { TRPCDocsServers } from './Servers';

export interface TRPCDocsMeta {
  summary: string;
  description?: string;
  servers?: TRPCDocsServers[];
  operation: TRPCDocsOperation;
}

export interface MetaProps {
  url: string;
  //   children?: (documentation?: TRPCDocs) => React.ReactNode;
}

export const Meta = ({}: MetaProps) => {
  return <div className="bg-red-100"></div>;
};
