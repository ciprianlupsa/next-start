import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query);

  res.json({ number: Math.floor(Math.random() * 10) });
}

// fetch('http://localhost/3000/api/random-number', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         username: 'admin',
//         password: 'admin'
//     })
// });
