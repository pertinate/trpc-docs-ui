import React from 'react';

export interface TRPCDocsContact {
  name: string;
  url: string;
  email: string;
}

export interface ContactInfo {}

export const ContactInfo = ({}: ContactInfo) => {
  return <div className="bg-red-100">test</div>;
};
