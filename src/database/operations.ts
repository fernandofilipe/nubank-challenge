export const noViolationsExample = [
    '{"account": {"active-card": true, "available-limit": 150}}',
    '{"transaction": {"merchant": "Burger King", "amount": 20, "time": "2019-02-13T10:00:00.000Z"}}',
    '{"transaction": {"merchant": "Habbib\'s", "amount": 90, "time": "2019-02-13T11:00:00.000Z"}}',
    '{"transaction": {"merchant": "McDonald\'s", "amount": 30, "time": "2019-02-13T12:00:00.000Z"}}',
];

export const highFrequencyExample = [
    `{"account": {"active-card": true, "available-limit": 100}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 20, "time": "2019-02-13T11:00:00.000Z"}}`,
    `{"transaction": {"merchant": "Habbib's", "amount": 20, "time": "2019-02-13T11:00:01.000Z"}}`,
    `{"transaction": {"merchant": "McDonald's", "amount": 20, "time": "2019-02-13T11:01:01.000Z" } }`,
    `{"transaction": {"merchant": "Subway", "amount": 20, "time": "2019-02-13T11:01:31.000Z" } }`,
    `{"transaction": {"merchant": "Burger King", "amount": 10, "time": "2019-02-13T12:00:00.000Z" } }`,
];

export const doubledTransactionExample = [
    `{"account": {"active-card": true, "available-limit": 100}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 20, "time": "2019-02-13T11:00:00.000Z"}}`,
    `{"transaction": {"merchant": "McDonald's", "amount": 10, "time": "2019-02-13T11:00:01.000Z"}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 20, "time": "2019-02-13T11:00:02.000Z"}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 15, "time": "2019-02-13T11:00:03.000Z"}}`,
];

export const MultipleViolations = [
    `{"account": {"active-card": true, "available-limit": 100}}`,
    `{"transaction": {"merchant": "McDonald's", "amount": 10, "time": "2019-02-13T11:00:01.000Z"}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 20, "time": "2019-02-13T11:00:02.000Z"}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 5, "time": "2019-02-13T11:00:07.000Z"}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 5, "time": "2019-02-13T11:00:08.000Z"}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 150, "time": "2019-02-13T11:00:18.000Z"}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 190, "time": "2019-02-13T11:00:22.000Z"}}`,
    `{"transaction": {"merchant": "Burger King", "amount": 15, "time": "2019-02-13T12:00:27.000Z"}}`,
];