export default function handler({req, res}:any) {
    if (req.method !== "POST") {
      return res.status(400).end();
    }
    console.log(req.body);
    // do whatever you need with the data
    return res.status(200).json({ ...req.body });
  }