import React from 'react';
import { FormattedNumber, IntlProvider } from 'react-intl';

const BanglaNumber = ({ number }) => {
    const locale = 'bn-BD';
    return (
        <IntlProvider locale={locale}>
            <FormattedNumber value={number} />
        </IntlProvider>
    );
};

export default BanglaNumber;