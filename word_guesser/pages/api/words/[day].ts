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
    '2': ['acrid','actor','acute','adage','adapt'],
    '3': ['adept','admin','admit','adobe','adopt'],
    '4': ['adore','adorn','adult','affix','afire'],
    '5': ['afoot','afoul','after','again','agape'],
    '6': ['agate','agent','agile','aging','aglow'],
    '7': ['agony','agora','agree','ahead','aider'],
    '8': ['aisle','alarm','album','alert','algae'],
    '9': ['alibi','alien','align','alike','alive'],
    '10': ['allay','alley','allot','allow','alloy']
  }



  res.status(200).json({ word: wordSchedule[day]})
}
