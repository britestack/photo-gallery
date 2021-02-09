import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export const options = {
  stages: [
    { duration: '60s', target: 100 }, //below normal
    { duration: '20s', target: 400 },
    { duration: '1m', target: 600 },  //normal load
    { duration: '2m', target: 1200 }, //apporaching breaking point?
    { duration: '2m', target: 1500 },
    { duration: '1m', target: 1500 }, // should explode here..
    { duration: '40s', target: 1400 },
    { duration: '40s', target: 1300 },
    { duration: '40s', target: 500 },  //down scale and recover
    { duration: '20s', target: 100 },
  ],
};

export default function () {
  const BASE_URL = 'http://localhost:7002';     //gitignore this later on
  // const id = Math.floor(Math.random() * 100000) + 1;
  const home_id = Math.floor(Math.random() * 100000) + 1;
  const responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/homeimages${home_id}`,
      null,
      { tags: { name: 'getHomeImages' } },
    ],
  ]);
  check(http.get(BASE_URL), {
    'status is 200': (r) => r.status == 200,
  }) || errorRate.add(1);
  sleep(1);
}