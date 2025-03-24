import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, firstName, lastName, customerType, companyName, companyAddress, contactNumber, password } = req.body;
    // Mock response (replace with real backend logic)
    res.status(200).json({ message: 'Registration successful', user: { email, firstName, lastName, customerType, companyName, companyAddress, contactNumber } });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}