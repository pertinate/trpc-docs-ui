import React from 'react';
import useSWR from 'swr';

export interface DocsProps {
  url: string;
}
//@ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

export const TRPCDocsUi = ({  url }: DocsProps) => {
    const { data, error, isLoading } = useSWR(
    'http://localhost:8080/trpc.json',
    fetcher
  );
  console.log(data, error, isLoading, url)
    return <div className="bg-red-100">{JSON.stringify(data)}</div>;
}
