import React from 'react';
import useSWR from 'swr';
import fetcher from '../fetcher';
import { TRPCAPI } from './API';
import { TRPCDocsContact } from './ContactInfo';
import { TRPCDocsLicense } from './License';
import { TRPCDocsServers } from './Servers';

export interface TRPCDocs {
  license: TRPCDocsLicense;
  contactInfo: TRPCDocsContact;
  termsOfService: string;
  servers: TRPCDocsServers[];
  api: TRPCAPI[];
}

export interface DocumentationProps {
  url: string;
  children?: (documentation?: TRPCDocs) => React.ReactNode;
}

export const Documentation = ({ url, children }: DocumentationProps) => {
  const { data } = useSWR<TRPCDocs>(url, fetcher);
  return <div className="bg-red-100">{children?.(data)}</div>;
};
