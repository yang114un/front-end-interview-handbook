import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import SidebarAd from '../../components/SidebarAd';

function DocPaginator({previous, next}) {
  return (
    <>
      <nav
        className="pagination-nav docusaurus-mt-lg"
        aria-label={translate({
          id: 'theme.docs.paginator.navAriaLabel',
          message: 'Docs pages navigation',
          description: 'The ARIA label for the docs pagination',
        })}>
        <div className="pagination-nav__item">
          {previous && (
            <a className="pagination-nav__link" href={previous.permalink}>
              <div className="pagination-nav__sublabel">
                <Translate
                  id="theme.docs.paginator.previous"
                  description="The label used to navigate to the previous doc">
                  Previous
                </Translate>
              </div>
              <div className="pagination-nav__label">{previous.title}</div>
            </a>
          )}
        </div>
        <div className="pagination-nav__item pagination-nav__item--next">
          {next && (
            <a className="pagination-nav__link" href={next.permalink}>
              <div className="pagination-nav__sublabel">
                <Translate
                  id="theme.docs.paginator.next"
                  description="The label used to navigate to the next doc">
                  Next
                </Translate>
              </div>
              <div className="pagination-nav__label">{next.title}</div>
            </a>
          )}
        </div>
      </nav>
      <div className="margin-top--md">
        <SidebarAd position="docs_bottom" />
      </div>
    </>
  );
}

export default DocPaginator;
