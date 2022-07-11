import { PrismaClient, webdata } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next'

  type Data = {
    posts:webdata[]
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const prisma = new PrismaClient()
    const ingfo = await prisma.webdata.findMany() //ingfo bisa diganti
    console.log(ingfo)
    res.status(200).json({posts: ingfo})
  }