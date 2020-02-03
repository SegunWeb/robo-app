import React from 'react';
import {Content} from "arwes";

const ErrorBoundry = ({status, children}) => {

        return (
            <div>
                {
                    status ?
                        <Content>
                            <blockquote data-layer='alert' className="errors">Sorry but something went wrong...</blockquote>
                        </Content>
                        : children
                }
            </div>
        )
};
export default ErrorBoundry