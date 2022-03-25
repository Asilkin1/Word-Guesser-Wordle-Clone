import fs  from 'fs';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  word: Array<string>,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>

) {
  // Represented as a number 1,2,3,4,5
  const { day } = req.query;

  // Words available for each day
  /**
   * @todo add chars to remove to the response
  */
  const wordSchedule = {
    '1': ['abaca','aalii','saber','cable','facer'],
    '2': []
  }



  res.status(200).json({ word: wordSchedule[day]})
}
