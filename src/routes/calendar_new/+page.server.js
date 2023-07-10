/** @type {import('./$types').PageLoad} */
export async function load() {
    return {
        'bonds': {
            'RU000A103133': {
                'period': 91,
                'count': 50,
                'price': 22.81,
            },
        },
        'bond_by_date': {
            '2022-07-15': [
                {
                    'isin': 'RU000A103133',
                    'name': 'Новотр 1Р2',
                    'period': 91,
                    'count': 50,
                    'price': 22.81,
                    'total': 1140.5,
                }
            ],
            '2023-01-01': [
                {
                    'isin': 'RU000A103133',
                    'name': 'Новотр 1Р2',
                    'period': 91,
                    'count': 50,
                    'price': 22.81,
                    'total': 1140.5,
                }
            ],
            '2023-07-20': [
                {
                    'isin': 'RU000A103133',
                    'name': 'Новотр 1Р2',
                    'period': 91,
                    'count': 50,
                    'price': 22.81,
                    'total': 1140.5,
                }
            ],
            '2023-10-19': [
                {
                    'isin': 'RU000A103133',
                    'name': 'Новотр 1Р2',
                    'period': 91,
                    'count': 50,
                    'price': 22.81,
                    'total': 1140.5,
                }
            ],
        },
        'total_by_month': {
            '2022-07': {
                'total': 1140.5,
                'bond_expire': [],
            },
            '2023-01': {
                'total': 1140.5,
                'bond_expire': [],
            },
            '2023-07': {
                'total': 1140.5,
                'bond_expire': [],
            },
            '2023-10': {
                'total': 1140.5,
                'bond_expire': [],
            }
        }
    }

    // return fetch('http://localhost:6000/')
    //     .then((data) => {
    //         return {'key1': true, 'data': data};
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         return {};
    //     });
}