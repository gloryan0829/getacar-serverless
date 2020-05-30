export const SuccessResponseHelper = (data) => {
    return {
        statusCode: 200,
        headers: {
            'x-custom-header': 'my custom header value',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: '성공', success: true, data }),
    };
};

export const FailedResponseHelper = (err) => {
    return {
        statusCode: 200,
        headers: {
            'x-custom-header': 'my custom header value',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: '실패', success: false, data: err }),
    };
}