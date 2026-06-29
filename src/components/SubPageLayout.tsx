import React from 'react';
import SubHero from './SubHero';
import Sidebar from './Sidebar';
import './SubPage.scss';

type SubPageLayoutProps = {
  heroTitle: string;
  breadcrumbs: { label: string, path?: string }[];
  sidebarData: {
    title: string;
    items: { label: string; path: string; icon: React.ElementType }[];
  };
  children: React.ReactNode;
};

export default function SubPageLayout({ heroTitle, breadcrumbs, sidebarData, children }: SubPageLayoutProps) {
  return (
    <div className="subpage-wrapper">
      <SubHero title={heroTitle} breadcrumbs={breadcrumbs} />
      <div className="container subpage-container">
        <Sidebar data={sidebarData} />
        <div className="subpage-content">
          {children}
        </div>
      </div>
    </div>
  );
}
