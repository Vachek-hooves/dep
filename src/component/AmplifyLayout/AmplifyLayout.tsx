import { useEffect } from 'react'
import { Amplify } from 'aws-amplify';
import { AwsAmplifyConfig } from '../../config';

import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-geo/styles.css';

export const AmplifyLayout = ({ children }: React.PropsWithChildren) => {
    useEffect(() => {
        Amplify.configure(AwsAmplifyConfig);
    });

    return (
        <div>
            {children}
        </div>
    );
}