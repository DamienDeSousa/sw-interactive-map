// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from '../../../services/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Galaxy, IGalaxy } from '../../../models/galaxy.models'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase()
      const galaxies: IGalaxy[] = await Galaxy.find()
      res.status(200).send(galaxies)
    } catch (error) {
      console.error(error)
      res.status(500).json({
        message: 'something went wrong',
        error,
      })
    }
  } else if (req.method === 'POST') {
    try {
      await connectToDatabase()
      const galaxy: IGalaxy = new Galaxy({ ...req.body })
      await galaxy.save()
      res.status(201).json(galaxy)
    } catch (error) {
      console.error(error)
      res.status(500).json({
        message: 'something went wrong',
        error,
      })
    }
  }
}
