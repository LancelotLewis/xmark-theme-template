import React from 'react';
import PropTypes from 'prop-types';
import Page from '@xmark/client/src/layouts/Page';

function ThemeLayout({ header, footer, children }) {
  return (
    <div className="flex">
      <aside className="p-5 border border-1">This is aside from theme layouts</aside>
      <main className="flex-1">
        <Page header={header} footer={footer}>
          {children}
        </Page>
      </main>
    </div>
  );
}

ThemeLayout.propTypes = {
  header: PropTypes.any,
  footer: PropTypes.any,
  children: PropTypes.any.isRequired,
};
ThemeLayout.defaultProps = {
  header: null,
  footer: null,
};

export default ThemeLayout;
