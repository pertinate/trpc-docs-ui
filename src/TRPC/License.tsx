import React from 'react';

export interface TRPCDocsLicense {
  name: string;
  identifier: string;
  url?: string;
}

export interface LicenseProps {}

export const License = ({}: LicenseProps) => {
  return <div className="bg-red-100"></div>;
};
