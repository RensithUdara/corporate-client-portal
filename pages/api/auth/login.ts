import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Mock validation (replace with real backend logic)
    if (email === 'test@example.com' && password === 'Password123!') {
      res.status(200).json({ user: { email, firstName: 'Test', lastName: 'User', customerType: 'Corporate' } });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}