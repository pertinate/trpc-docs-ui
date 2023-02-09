import React from 'react';

export interface TRPCDocsServers {
  url: string;
  description: string;
}

export interface ServersProps {}

export const Servers = ({}: ServersProps) => {
  return <div className="bg-red-100">test</div>;
};
