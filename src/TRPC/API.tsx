import React from 'react';
import { JsonSchema7AnyType } from 'zod-to-json-schema/src/parsers/any';
import { TRPCDocsMeta } from './Meta';

export interface TRPCAPI {
  route: string;
  isRouter: boolean;
  isQuery: boolean;
  isMutation: boolean;
  isSubscription: boolean;
  metaData?: TRPCDocsMeta;
  inputs: JsonSchema7AnyType[];
  outputs: JsonSchema7AnyType;
  children: TRPCAPI[];
}

export interface APIProps {}

export const API = ({}: APIProps) => {
  return <div className="bg-red-100">test</div>;
};
