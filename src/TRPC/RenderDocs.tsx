import React from 'react';

export interface WithChildrenCallback<T> {
  children?: (data: T) => React.ReactNode;
}

export interface RenderDocsProps {}

export const RenderDocs = ({}: RenderDocsProps) => {
  return <div className="bg-red-100"></div>;
};
