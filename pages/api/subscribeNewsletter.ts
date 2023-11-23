import axios from 'axios';
import { RegionUS, TrackClient } from 'customerio-node';
import { nanoid } from 'nanoid';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function SubscribeNewsletter(req: NextApiRequest, res: NextApiResponse) {
  const siteId = process.env.CUSTOMER_IO_SITE_KEY;
  const apiKey = process.env.CUSTOMER_IO_API_KEY;
  const credentials = `${siteId}:${apiKey}`;
  const encodedCredentials = Buffer.from(credentials).toString('base64');

  const headers = {
    Authorization: `Basic ${encodedCredentials}`,
    'Content-Type': 'application/json',
  };

  if (!siteId || !apiKey) {
    throw new Error('Environment variables are required!');
  }

  const cio = new TrackClient(siteId, apiKey, { region: RegionUS });
  const id = nanoid();
  try {
    await cio.identify(id, {
      email: req.body.email,
    });

    await axios.post(
      'https://track.customer.io/api/v1/segments/12/add_customers',
      {
        ids: [id],
      },
      { headers },
    );

    res.status(200).send('success');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
