'use strict';

/**
 * @description 웰컴 페이지
 * @returns Response
 */
export const welcome = async () => {
    return {
        statusCode: 200,
        headers: {
            'x-custom-header': 'my custom header value',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: `DoubleJ 견적 서비스!` }),
    };
};
