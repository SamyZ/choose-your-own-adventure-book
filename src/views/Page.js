import * as React from 'react';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

type Page = {
  title?: string,
  content: string,
  number: number,
  transitions: Array<{
    label: string,
    to: Array<{
      page: number,
      probability: Character => number,
    }>,
  }>,
};

const Page = ({ title, content }) => (
  <div>
    <PageHeader />
    {title && <div>{title}</div>}
    <div>{content}</div>
    <PageFooter />
  </div>
);

export type { Page };
export default Page;
